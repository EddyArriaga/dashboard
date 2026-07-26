import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

function combineArrays(arrLabels: Array<string>, arrValues1: Array<number>, arrValues2: Array<number>) {
    return arrLabels.map((label, index) => ({
        id: index,
        label: label,
        value1: arrValues1[index],
        value2: arrValues2[index]
    }));
}

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90
    },
    {
        field: 'fechaHora',
        headerName: 'Fecha y hora',
        width: 125,
    },
    {
        field: 'temperatura',
        headerName: 'Temperatura',
        width: 125,
    },
    {
        field: 'velocidadDelViento',
        headerName: 'Velocidad del viento',
        width: 125,
    },
];

const arrValues1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const arrValues2 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const arrLabels = ['A','B','C','D','E','F','G'];

export default function TableUI() {

    const rows = combineArrays(arrLabels, arrValues1, arrValues2);

    return (
        <Box sx={{ height: 350, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
               }}
               pageSizeOptions={[5]}
               disableRowSelectionOnClick
            />
        </Box>
    );
}