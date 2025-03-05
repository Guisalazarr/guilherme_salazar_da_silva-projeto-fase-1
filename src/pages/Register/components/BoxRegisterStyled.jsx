const { styled, Box } = require("@mui/material");


const BoxStyled = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '500px',
    height: '200px',
    gap: '10px'

})


export default BoxStyled