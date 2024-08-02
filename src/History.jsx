/* eslint-disable react/prop-types */
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const columns = [
  { field: "id", headerName: "Round", width: 150 },
  { field: "col1", headerName: "Your turn", width: 150 },
  { field: "col2", headerName: "PC turn", width: 150 },
  { field: "winner", headerName: "Winner", width: 150 },
];

const History = ({ rows }) => {
  return (
    <Box sx={{ height: 300, width: "70%", justifyContent: "center", alignItems: "center", textAlign: "center", overflow: "hidden", margin: "auto" }}>
      <DataGrid rows={rows} columns={columns} pageSizeOptions={[0]} pageSize={5} disableRowSelectionOnClick />
    </Box>
  );
};

export default History;
