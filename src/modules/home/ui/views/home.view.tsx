"use client";

import { useQueries, useQuery } from "@tanstack/react-query";
import { useTRPC } from "../../../../trpc/client";


export const HomeView = () =>{
    const trpc = useTRPC();
    const {data} = useQuery(trpc.hello.queryOptions({text:"Rbh-Code"}));

  return (
      <div className="flex flex-col p-4 gap-y-5">
        {data?.greeting}
      </div>
    );
}

// export default page;