import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContainerStyled from './components/ContainerStyled'

const DefaultLayout = (props) => {

    return(
        <>
            <Navbar/>
            <ContainerStyled>
                {props.component}
            </ContainerStyled>
            <Footer/>
        </>
    )

}

export default DefaultLayout