import { db } from "@/db";
import { Categories } from "@/db/schema";
import { baseProcedure,createTRPCRouter } from "@/trpc/init";



export const categoriesRouter = createTRPCRouter({
    getAllCategories: baseProcedure.query(async () => {
        const categories = await db.select().from(Categories);
        return categories;
    })
})
