import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import DATA from "./news";

export const getArticles = query({
    handler: async (ctx) => {
        const allArticles = await ctx.db.query("articles").collect();
        return allArticles
    }
})

export const createArticle = mutation({
    handler: async (ctx) => {
        for( let i = 0; i < DATA.length; i++) {
            ctx.db.insert("articles", DATA[i]);
        }
        return "Article created"
    }
})