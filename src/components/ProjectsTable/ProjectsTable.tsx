'use client'
import { DataTable } from 'mantine-datatable'
import { Badge } from '@mantine/core'
import type { MantineColor } from '@mantine/core'
import { ErrorAlert } from '@/components'

// type Status = 'In Progress' | 'Cancelled' | 'Completed' | 'Pending' | string;

// const StatusBadge = ({ status }: { status: Status }) => {
//   let color: MantineColor = ''
//   switch (status) {
//     case 'In Progress':
//       color = 'blue'
//       break
//     case 'Cancelled':
//       color = 'red'
//       break
//     case 'Completed':
//       color = 'green'
//       break
//     case 'Pending':
//       color = 'orange'
//       break
//     default:
//       color = 'gray'
//   }
//   return (
//     <Badge color={color} variant="filled" radius="sm">
//       {status}
//     </Badge>
//   );
// }

type ProjectItem = {
  id: string;
  source: string;
  revenue: string;
  value: number;
};

type ProjectsTableProps = {
  data?: ProjectItem[];
  isError: boolean;
  loading: boolean;
};

const ProjectsTable = ({ data, isError, loading }: ProjectsTableProps) => {
  return isError ? (
    <ErrorAlert title="Error loading projects" message="error happen" />
  ) : (
    <DataTable
      verticalSpacing="sm"
      highlightOnHover
      columns={[
        { accessor: 'id' },
        { accessor: 'source' },
        { accessor: 'revenue' },
        // {
        //   accessor: 'state',
        //   render: ({ state }) => <StatusBadge status={state} />,
        // },
        { accessor: 'value' },
      ]}
      records={data}
      fetching={loading}
    />
  )
}
export default ProjectsTable;
