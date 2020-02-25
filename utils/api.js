const axios = require("axios");
const dotenv = require("dotenv").config();
const util = require("util");
const url = `https://api.github.com/users/${username}`;

const api = {
    getUser(username) {
        axios
            .get(url)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log("err", err)
            })
    }
};


module.exports = api;