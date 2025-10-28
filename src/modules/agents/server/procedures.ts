// import { TRPCError } from "@trpc/server";
import { db } from "../../../db";
import { agents } from "../../../db/schema";
import { createTRPCRouter, baseProcedure } from "../../../trpc/init";

export const agentsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const data = await db
      .select()
      .from(agents);

    // Optional delay or error handling
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new TRPCError({ code: "BAD_REQUEST" });

    return data;
  }),
});


