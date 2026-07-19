import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getArticles = query({
    handler: async (ctx) => {
        const allArticles = await ctx.db.query("articles").collect();
        return allArticles
    }
})

export const createArticle = mutation({
    handler: async (ctx) => {
        const createPost = await ctx.db.insert("articles", {
            title: "Ethereum's Next majour Upgrade: What to Expect",
            time: "4h ago",
            categoryName: "Crypto",
            imageUrl: "https://static.vecteezy.com/system/resources/previews/026/423/787/non_2x/abstract-technology-background-with-circuit-board-and-blue-lights-digital-communication-line-concept-graphic-hardware-computer-tech-integrated-energy-design-information-internet-generative-ai-photo.jpg",
            content: " "
        })
        return createPost
    }
})