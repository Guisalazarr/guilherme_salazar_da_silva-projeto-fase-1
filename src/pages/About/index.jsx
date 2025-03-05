import { Typography } from '@mui/material'
import Header from '../../config/defaultLayout/components/Header'

const About = () => {

    return (
        <>  
            <Header title='Sobre'/>
            <Typography variant='body1'>Está é uma aplicação para um CRUD de um Reading Journal.
            Este projeto foi elaborado na Disciplina de Desenvolvimento de 
            Sistemas Frontend do Curso de Graduação Online da PUCRS
            </Typography>
        </>

    )
}

export default About