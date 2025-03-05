import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../../util/formatDate';

const BookList = (props) => {
    const navigate = useNavigate();

    
    const deleteBooks = (id) =>{
    const confirmDelete = window.confirm('Deseja deletar o livro?')

       if(confirmDelete){
        props.setBooks(props.data.filter(item => item.id !== id))
        alert('Livro deletado com sucesso')
       }
    }

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
      };
    return(
        <>  
            <List sx={{ boxShadow: '2', backgroundColor: '#eeeeee',}}>

           { props.data.length ? props.data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        <ListItem sx={{ maxWidth: '100%', padding: '1rem', gap:'2rem' }}> 
                            <ListItemText primary={item.title} />
                            <ListItemText primary={item.author} />
                            <ListItemText primary={formatDate(item.date)} />
                            <IconButton size='large' color='primary' onClick={() => handleEdit(item.id)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton size='large' onClick={() => deleteBooks(item.id)}>
                                <DeleteIcon sx={{ color: 'red' }}/>
                            </IconButton>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                )
            }) : <Typography variant="body1">Nenhum Livro cadastrado.</Typography>}

            </List>
        </>
    )
}

export default BookList