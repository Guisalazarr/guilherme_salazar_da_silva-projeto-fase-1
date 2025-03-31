import axios from 'axios';

const toDelete = async (id) => {
    
      try {
        await axios.delete(`http://localhost:5000/books/${id}`);

      } catch (error) {
        console.log(error)
      }
    };

export default toDelete;