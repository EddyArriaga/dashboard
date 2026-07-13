import './App.css'
import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import IndicatorUI from './components/IndicatorUI';
import useFetchData from './hooks/useFetchData';

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

         <Grid sx={{ display: { xs: "none", md: "block"} }} >Elemento: Gráfico</Grid>

         <Grid sx={{ display: { xs: "none", md: "block" } }}>Elemento: Tabla</Grid>

         <Grid>Elemento: Información adicional</Grid>

      </Grid>
  );
}

export default App
