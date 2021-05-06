import axios from 'axios';

const url = "http://challenge-react.alkemy.org/";

export default {
    signUp: (user) => {
        return new Promise((resolve, reject) => {
            resolve(axios.post(url, user).then(res => res)) 
            reject("error en login de usuario!")
        })
    }
}