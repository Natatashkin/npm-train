// 1. экспорт по умолчанию нескольких функций как оддин объект
// const fetchAllusers = () => {
//     console.log('fetchAllusers');
// };

import shortid from "shortid";

// const fetchUserById = (id) => {
//     console.log('fetchUserById');
// };

// const updateUserById = (id) => {
//     console.log('updateUserById');
// };



// export default { fetchAllusers, fetchUserById, updateUserById };

//2. именной экспорт нескольких функций по отдельности

export const fetchAllusers = () => {
    console.log('fetchAllusers');
};

export const fetchUserById = (id) => {
    console.log('fetchUserById');
};

export const updateUserById = (id) => {
    console.log('updateUserById');
};

export const x = 5;

export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name,
    }
    console.log(user);
}

