const axios = require('axios');
const dotenv = require('dotenv').config();
const api = {
    getUser(username) {
        const gitURL = `https://api.github.com/users/${username}`;
        return axios({

                url: gitURL,
                method: "get",
                auth: {
                    username: process.env.CLIENT_ID,
                    password: process.env.CLIENT_PASS
                }
            })
            .then(res => {
                const userData = res.data;
                return userData;
            })
            .catch(err => {
                console.log(err);
            })
    }
};

module.exports = api;