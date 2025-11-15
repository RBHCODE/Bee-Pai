"use client"

import { ColumnDef } from "@tanstack/react-table"
import { AgentGetOne } from "../../../types"
import { GeneratedAvatar } from "../../../../../components/generated-avatar"
import { Badge, CornerDownRightIcon, VideoIcon } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell:({ row }) =>{
        <div className=" flex flex-col gap-y-1">
            <div className="flex items-center gap-y-2">
                <GeneratedAvatar
                  className="size-6"
                  variant="botttsNewtral"
                  seed={row.original.name}
                />
                <span className="font-semibold capitalize">{row.original.name}</span>
            </div>        
                <div className="flex items-center gap-x-1.5">
                    <CornerDownRightIcon className="size-3 text-muted-foreground " />
                    <span className="text-sm text-muted-foreground max-w-[200px] truncate capitalize">
                        {row.original.instructions}
                    </span>
                </div>           
        </div>
    }
  },
  
    {
        accessorKey:"meetingCount",
        header:"Meetings",
        cell: () =>(
            <Badge  className="flex items-center gap-x-2 [&>svg]:size-4" variant="outline">
                <VideoIcon className="text-blue-700" />
                {/* {row.original.meetingCount} {row.original.meetingCount === 1? "meeting" : "meetings"} */}
                5 Meetings
            </Badge>
        )
    }
]