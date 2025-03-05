import Header from "../../config/defaultLayout/components/Header"
import { useLocalStorage } from '@uidotdev/usehooks';
import { useParams } from 'react-router-dom';
import EditBookForm from "./components/EditBookForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const  Edit = () => {
      const { id } = useParams();
      const navigate = useNavigate()
      const [books, setBooks] = useLocalStorage('books', [])

      const book = books.find(item => item.id === Number(id)) 

      useEffect(()=>{
        if(!book){
            alert('Livro não localizado')
            navigate('/books')
        }
      },[book])

    return (
        <>   
            <Header title='Editar'/>
            <EditBookForm book={book} data={books} setBooks={setBooks}/>   
        </>
    )
}

export default Edit