 import { db } from "@/db";
import { Categories } from "@/db/schema";
import { baseProcedure,createTRPCRouter } from "@/trpc/init";
import { TRPCError } from "@trpc/server";


export const categoriesRouter = createTRPCRouter({
    getAllCategories: baseProcedure.query(async () => {
       
        const categories = await db.select().from(Categories);
        return categories;
    })
})
