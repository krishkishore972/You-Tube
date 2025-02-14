import { pgTable, uuid, text,timestamp,uniqueIndex } from "drizzle-orm/pg-core";


export const Users = pgTable("users", {
    id:uuid("id").primaryKey().defaultRandom(),
    clerkId:text("clerk_id").unique().notNull(),
    name:text("name").notNull(),
    //Todo Add banner field
    imageUrl:text("image_url").notNull(),
    createdAt:timestamp("created_at").defaultNow().notNull(),
    updatedAt:timestamp("updated_at").defaultNow().notNull(),
},(t) =>[uniqueIndex("clerk_id_idx").on(t.clerkId)]);

