import moment from "moment";

const formatDate = (date) => {

    const dateFormated = moment(date).format('DD/MM/YYYY');
    return dateFormated
}

export default formatDate