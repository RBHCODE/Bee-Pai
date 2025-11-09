

import { ErrorBoundary } from "react-error-boundary";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { AgentsView, AgentsViewError, AgentsViewLoading } from "../../../modules/agents/server/ui/views/agents-view"
import { getQueryClient, trpc } from "../../../trpc/server";
import { Suspense } from "react";
import { AgentslistHeader } from "../../../modules/agents/server/ui/views/agents-list-header";




const page = async () => {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions()); 

    return( 
       <>
         <AgentslistHeader />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<AgentsViewLoading />}>
                <ErrorBoundary fallback={<AgentsViewError />}>
                    <AgentsView />
                </ErrorBoundary>
                </Suspense>
            </HydrationBoundary>
        </>
    )
}

export default page;