import axios from "axios";

const API = {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=250&nat=us")
    }
};

export default API;