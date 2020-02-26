const axios = require("axios");
const dotenv = require("dotenv").config();

const api = {
    getUser(username) {
        const url = `https://api.github.com/users/${username}`;

        const config = {
            username: `${process.env.CLIENT_ID}`,
            password: `${process.env.CLIENT_PASS}`
        }

        axios
            .get(url, config)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }
};


module.exports = api;