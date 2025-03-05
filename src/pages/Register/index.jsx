import BookForm from "./components/BookForm"
import Header from "../../config/defaultLayout/components/Header"
import { useLocalStorage } from '@uidotdev/usehooks';

const  Register = () => {
      const [books, setBooks] = useLocalStorage('books', [])

    return (
        <>   
            <Header title='Cadastrar'/>
            <BookForm books={books} setBooks={setBooks}/>   
        </>
    )
}

export default Register