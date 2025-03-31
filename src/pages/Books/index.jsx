import Header from "../../config/defaultLayout/components/Header"
import BookList from "./components/BookList"
import ToList from '../../server/ToList'

const Books =  () => {
    const data = ToList()

    return (
        <>  
            <Header title='Lista de livros'/>
            <BookList data={data}/> 
        </>

    )
}

export default  Books