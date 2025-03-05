import { Typography } from "@mui/material"


const Header = (props) => {

    return (
        <Typography variant="h2" sx={{marginBottom: '60px'}}>{props.title}</Typography>
    )
}

export default Header 