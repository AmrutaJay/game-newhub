import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '2731309bd5434f0b9e67f07571407700'
    },

});
