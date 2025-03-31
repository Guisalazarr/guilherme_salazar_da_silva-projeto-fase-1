import axios from 'axios';

const create = async (body) => {
    
      try {
        await axios.post('http://localhost:5000/books', body);

      } catch (error) {
        console.log(error)
      }
    };

export default create;