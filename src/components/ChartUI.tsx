import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

interface ChartUIProps {
    temperature?: number[],
    wind?: number[],
    hour?: string[]
}

export default function ChartUI(props: ChartUIProps) {
   return (
      <>
         <Typography variant="h5" component="div">
            Temperatura y viento por hora
         </Typography>
         <LineChart
            height={300}
            series={[
               { data: props.temperature, label: 'Temperatura'},
               { data: props.wind, label: 'Viento'},
            ]}
            xAxis={[{ scaleType: 'point', data: props.hour }]}
         />
      </>
   );
}