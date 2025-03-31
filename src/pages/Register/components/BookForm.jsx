import BoxStyled from "./BoxRegisterStyled.jsx"
import Button from '@mui/material/Button';
import { TextField } from "@mui/material"
import { useState } from "react";
import generateId from "../../../util/generateId.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import create from "../../../server/create.js";


const BookForm = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [readAt, setReadAt] = useState('')
    const [valid, setValid] = useState(false)


    useEffect(() => {
        if (title.length < 2 && author.length < 2 && genre.length < 2, readAt.length < 2) {
          setValid(true);
        } else {
          setValid(false);
        }
      }, [title, author, genre, readAt]);

      
    const createBook = () => {
        const newBook = {
            id: generateId(),
            title,
            author,
            genre,
            readAt
        }
    create(newBook);
    alert('Livro adicionado com sucesso')
    navigate('/books')
    }


    return(
        <BoxStyled>
          <TextField id="outlined-basic" label="Titulo" type="text" variant="outlined" fullWidth 
          value={title} onChange={(e)=> setTitle(e.target.value)}/>

          <TextField id="outlined-basic" label="Autor" type="text" variant="outlined" fullWidth 
          value={author} onChange={(e)=> setAuthor(e.target.value)}/>

          <TextField id="outlined-basic" label="Gênero" type="text" variant="outlined" fullWidth 
          value={genre} onChange={(e)=> setGenre(e.target.value)}/>

          <TextField id="outlined-basic"  type="date" variant="outlined" fullWidth 
          value={setReadAt} onChange={(e)=> setReadAt(e.target.value)}/>

          <Button variant="contained" size="large" onClick={createBook} disabled={valid} fullWidth>Adicionar</Button>
       </BoxStyled>
    )
}

export default BookForm