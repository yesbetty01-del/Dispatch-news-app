import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getUserByEmail = query({
    args: {
        email: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query("users").filter( q => q.eq(q.field("email"), args.email)).first();
        return user
    }
})
export const createUser = mutation({
    handler: async (ctx) => {
        //const newUser = await ctx.db.insert("users", {})
    }
})