"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { trpc, useTRPC } from "../../../../../trpc/client";
import { LoadingState } from "../../../../../components/loading-state";
import { ErrorState } from "../../../../../components/error-state";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { EmptyState } from "../../../../../components/empty-state";

// const mockData:Payment[] = [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]


export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable  data={data} columns={columns}/>
      {data.length === 0 && (
        <EmptyState
        title="Create your first agents"
        description="create your account and join your meetings"
        />
      )}
    </div>
  );
};

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds"
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title="Error loading agents"
      description="Please try again later"
    />
  );
};
