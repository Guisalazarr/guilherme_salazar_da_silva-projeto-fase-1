import Header from "../../config/defaultLayout/components/Header"
import BookList from "./components/BookList"
import { useLocalStorage } from '@uidotdev/usehooks';

const Books = () => {
    const [books, setBooks] = useLocalStorage('books', [])
    
    return (
        <>  
            <Header title='Lista de livros'/>
            <BookList data={books} 
            setBooks={setBooks}/>     
        </>

    )
}

export default  Books