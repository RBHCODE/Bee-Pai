// import { TRPCError } from "@trpc/server";
import z, { string } from "zod";
import { db } from "../../../db";
import { agents } from "../../../db/schema";
import { createTRPCRouter,protectedProcedure } from "../../../trpc/init";
import { agentsInsertSchema } from "../schemas";
import { eq } from "drizzle-orm";
import { auth } from "../../../lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const page= async() =>{
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  if(!session){
    redirect("/sign-in");
  }
}
export const agentsRouter = createTRPCRouter({

  //TODO: Change 'getOne' to use 'protectedProcedure'
 getOne: protectedProcedure.input(z.object({ id: string() })).query(async ({ input }) => {
    const [existingAgent] = await db
      .select()
      .from(agents)
      .where(eq(agents.id, input.id))
    return existingAgent;
  }),


  //TODO: Change 'getmany' to use 'protectedProcedure'
  getMany: protectedProcedure.query(async () => {
    const data = await db
      .select()
      .from(agents);

    // Optional delay or error handling
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new TRPCError({ code: "BAD_REQUEST" });

    return data;
  }),
  create:protectedProcedure.input(agentsInsertSchema).mutation(async ({ ctx, input }) =>{
    const [createdAgent] = await db
            .insert(agents)
            .values({
              ...input,
              userid:ctx.auth.user.id,
            })
            .returning();

            return createdAgent;
  }),
});


