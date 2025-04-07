import { defineStackbitConfig, type SiteMapEntry } from "@stackbit/types";

export default defineStackbitConfig({
    // Define the single page model
    modelExtensions: [
        { name: "LandingPage", type: "page", urlPath: "/" } // Landing page with root URL
    ],

    siteMap: ({ documents, models }) => {
        // Filter for the landing page model
        const landingPageModels = models.filter((m) => m.name === "LandingPage");

        return documents
            // Filter to include only documents of the landing page model
            .filter((d) => landingPageModels.some(m => m.name === d.modelName))
            .map((document) => ({
                stableId: document.id,
                urlPath: "/", // This is the root URL for your landing page
                document,
                isHomePage: true, // This is the home page
            }))
            .filter(Boolean) as SiteMapEntry[]; // Filter out any null entries
    },
    stackbitVersion: "" // You can specify a version if needed
});