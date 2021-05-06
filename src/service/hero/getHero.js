import axios from 'axios';

const url = "https://superheroapi.com/api.php/4290321464353395"

export default{
    getHero: ({id}) => {
        return new Promise((resolve, reject) => {
            resolve(axios.get(`${url}/${id}`));
            reject((err) => console.log(`error al traer heroe ${err}`));
        })
    },
    searchHero: ({nameHero}) => {
        return new Promise((resolve, reject) => {
            resolve(axios.get(`${url}/search/${nameHero}`));
            reject((err) => console.log(`error al buscar heroe ${err}`));
        })
    }
}