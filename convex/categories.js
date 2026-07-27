import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { Categories } from "./category";

export const getAllCategories = query({
    handler: async (ctx) => {
        const getCategories = await ctx.db.query("category").collect();
        return getCategories
    }
})

export const createCategories = mutation({
    handler: async (ctx) => {
        for (let i = 0; i < Categories.length; i++) {
            await ctx.db.insert("category", Categories[i]);
        }
        return {message: "category created"};
    }
})