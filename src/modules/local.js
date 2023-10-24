import { NOWBLOCKEL } from "./variables.js";

const storage = {
    setFavCities: function(arr) {
        const favCity = JSON.stringify([...arr]);
        localStorage.setItem('city', favCity);
    },
    getFavCities: function() {
        const res = localStorage.getItem('city');
        let arr = [];
        if(localStorage.getItem('city') !== null) {
            arr = JSON.parse(res);
        }
        return arr;
    },
    setCurrentCity: (value) => {
        document.cookie = `currentcity = ${value}; max-age=3600`;
    },
    getCurrentCity: () => {
        let res = document.cookie.split('=');
        if(res) {
            return res[1];
        }
        return undefined
    },
};

let listArr = new Set(storage.getFavCities());
let currentCity = storage.getCurrentCity();

if(currentCity !== undefined) {
    NOWBLOCKEL.CITY.textContent = currentCity;
} else {
    NOWBLOCKEL.CITY.textContent = 'Found city';
}

export {listArr, currentCity, storage};

