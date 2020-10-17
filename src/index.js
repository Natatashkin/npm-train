// 1. Импорт по умолчанию
// import validatePassword from './js/validate-password';
// console.log(validatePassword("dfhg"));
import { addUser } from './js/api-service';
addUser('mango'); 
// import apiService from './js/api-service';
// console.log(validatePassword);
// console.log(apiService);

// 2. Именованый импорт
// import { fetchAllusers, fetchUserById, updateUserById, x as value/*экспррт и переименовывание */ } from './js/api-service';

// console.log(fetchAllusers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(value);

// 3. Импорт пространства имён, т.е. забрать всё
// import * as apiService from './js/api-service';
// console.log(apiService);