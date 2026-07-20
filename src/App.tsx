import './App.css'
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './hooks/useFetchData';
import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';

function App() {
  const dataFetcherOutput = useFetchData();

  return (
    <Grid container spacing={5} sx={{ justifyContent: "left", alignItems: "center" }}>

         <Grid size={{ xs: 12, md: 12 }}>
          <HeaderUI/>
         </Grid>

         <Grid container sx={{ justifyContent: "right", alignItems: "center" }}>
          <AlertUI description="No se preveen lluvias"/>
         </Grid>

         <Grid size={{ xs: 12, md: 3  }}>
          <SelectorUI/>
         </Grid>

         <Grid container size={{ xs: 12, md: 9 }} >

                 <Grid size={{ xs: 12, md: 3 }}>
                      {dataFetcherOutput && (<IndicatorUI title='Temperatura (2m)' description={ `${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}` } />)}
                 </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                      {dataFetcherOutput && (<IndicatorUI title='Temperatura aparente' description={ `${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}` } />)}
                 </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                     {dataFetcherOutput && (<IndicatorUI title='Velocidad del viento (10m)' description={ `${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}` } />)}
                 </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                      {dataFetcherOutput && (<IndicatorUI title='Humedad relativa (2m)' description={ `${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}` } />)}
                 </Grid>

             </Grid>

         <Grid size={{xs: 12, md:12 }} >
               {dataFetcherOutput && (<ChartUI temperature={dataFetcherOutput.hourly.temperature_2m} wind={dataFetcherOutput.hourly.wind_speed_10m} hour={dataFetcherOutput.hourly.time} />)}
         </Grid>

         <Grid sx={{ display: { xs: "none", md: "block" } }}>
               <TableUI />
         </Grid>

         <Grid>Elemento: Información adicional</Grid>

      </Grid>
  );
}

export default App
