"use client"

import { ColumnDef } from "@tanstack/react-table"
import { AgentGetOne } from "../../../types"
import { GeneratedAvatar } from "../../../../../components/generated-avatar"
import { Badge } from "../../../../../components/ui/badge"
import { CornerDownRightIcon, VideoIcon } from "lucide-react"

export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-y-1">
          {/* Avatar + Name */}
          <div className="flex items-center gap-x-2">
            <GeneratedAvatar
              className="size-6"
              variant="botttsNeutral"
              seed={row.original.name}
            />
            <span className="font-semibold capitalize">{row.original.name}</span>
          </div>

          {/* Instructions */}
          <div className="flex items-center gap-x-1.5">
            <CornerDownRightIcon className="size-3 text-muted-foreground" />
            <span className="text-sm text-muted-foreground max-w-[200px] truncate capitalize">
              {row.original.instructions}
            </span>
          </div>
        </div>
      )
    },
  },

  {
    accessorKey: "meetingCount",
    header: "Meetings",
    cell: ({ row }) => {
      return (
        <Badge
          className="flex items-center gap-x-2 [&>svg]:size-4"
          variant="outline"
        >
          <VideoIcon className="text-blue-700" />
          {row.original.meetingCount}{" 5 "}
          {row.original.meetingCount === 1 ? "Meeting" : "Meetings"}
        </Badge>
      )
    },
  },
]
