import { Typography } from "@mui/material"
import FooterStyled from "./FooterStyled"


const Footer = () => {
    return(
        <FooterStyled>
           <Typography variant="body1">Guilherme Salazar da Silva</Typography>
           <Typography variant="body1">Desenvolvimento de Sistemas frontend</Typography>
           <Typography variant="body1">PUCRS - 2025</Typography>
        </FooterStyled>
    )
}

export default Footer