import BoxStyled from "./BoxRegisterStyled.jsx"
import Button from '@mui/material/Button';
import { TextField } from "@mui/material"
import { useState } from "react";
import generateId from "../../../util/generateId.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const BookForm = (props) => {

    const navigate = useNavigate()
  

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [gender, setGender] = useState('')
    const [date, setDate] = useState('')
    const [valid, setValid] = useState(false)


    useEffect(() => {
        if (title.length < 2 && author.length < 2 && gender.length < 2, date.length < 2) {
          setValid(true);
        } else {
          setValid(false);
        }
      }, [title, author, gender, date]);

      
    const createBook = () => {
        const newBook = {
            id: generateId(),
            title,
            author,
            gender,
            date
        }

    props.setBooks([...props.books, newBook])
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
          value={gender} onChange={(e)=> setGender(e.target.value)}/>

          <TextField id="outlined-basic"  type="date" variant="outlined" fullWidth 
          value={date} onChange={(e)=> setDate(e.target.value)}/>

          <Button variant="contained" size="large" onClick={createBook} disabled={valid} fullWidth>Adicionar</Button>
       </BoxStyled>
    )
}

export default BookForm