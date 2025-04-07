import { defineStackbitConfig, type SiteMapEntry } from "@stackbit/types";

export default defineStackbitConfig({
    modelExtensions: [
        {
            name: "LandingPage",
            type: "page",
            fields: [
                { name: "brandName", type: "string" },
                { name: "navLinks", type: "list", items: { type: "string" } }, // Change 'of' to 'items'
                { name: "heroTitle", type: "string" },
                { name: "heroDescription", type: "string" },
                // Add other fields as necessary
            ],
            urlPath: "/" // Landing page with root URL
        }
    ],

    siteMap: ({ documents, models }) => {
        const landingPageModels = models.filter((m) => m.name === "LandingPage");

        return documents
            .filter((d) => landingPageModels.some(m => m.name === d.modelName))
            .map((document) => ({
                stableId: document.id,
                urlPath: "/", // This is the root URL for your landing page
                document,
                isHomePage: true, // This is the home page
            }))
            .filter(Boolean) as SiteMapEntry[];
    },
    stackbitVersion: "" // You can specify a version if needed
});