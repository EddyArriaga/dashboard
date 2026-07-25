import Typography from "@mui/material/Typography";

/* Componente del encabezado */
function HeaderUI() {
    return (
        <Typography variant={"h3"} component={"h1"} sx={{fontWeight:"bold"}}>
            Dashboard del Clima
        </Typography>
    );
}

export default HeaderUI;