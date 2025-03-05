import BoxStyled from '../../Register/components/BoxRegisterStyled';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const EditBookForm = (props) => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [gender, setGender] = useState('')
    const [date, setDate] = useState('')
    const [valid, setValid] = useState(false)


    useEffect(() => {
        if (title.length < 2 && author.length < 2 && gender.length < 2, date.length < 2) {

          setTitle(props.book.title)
          setAuthor(props.book.author)
          setGender(props.book.gender)
          setDate(props.book.date)
          setValid(true);

        } else {
          setValid(false);
        }
      }, [title, author, gender, date]);


      
    const editBook = () => {
      const newBook ={
        id: props.book.id,
        title,
        author,
        gender,
        date
      }

      const findIndex = props.data.findIndex(item => item.id === props.book.id)
      const list = [...props.data]
      list.splice(findIndex, 1, newBook)

      props.setBooks([...list])

      alert('Livro editado com sucesso!')
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

          <Button variant="contained" size="large" onClick={editBook} disabled={valid}>Editar</Button>
       </BoxStyled>
    )
}

export default EditBookForm