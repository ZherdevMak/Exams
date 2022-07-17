import React from "react";
// Вопрос:
//
//     Что надо написать вместо ХХХ, чтобы функция calculator работала?
//
//     copy
//
//     type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType) => {
//     switch (ХХХ) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         default:
//             return state
//     }
// }
//
// //Что надо написать вместо ХХХ, чтобы функция calculator работала?
//
// Ответ:
//
//
//
//
//
// Вопрос:
//
//     Обработка какого action.type не предусмотрена в функции calculator?
//
//     copy
//
//     type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         default:
//             return state
//     }
// }
//
// //Обработка какого action.type не предусмотрена в функции calculator?
//
// Ответ:
//
// Вопрос:
//
//     Что надо написать вместо XXX, что бы переменная result содержала значение 5?
//
//     copy
//
//     type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         default:
//             return state
//     }
// }
//
// const result = calculator(10, {XXX, payload: 5})
// console.log(result)
// //Что надо написать вместо XXX, что бы переменная result содержала значение 5?
//
// Ответ:

// Вопрос:
//
//     Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?
//
//     copy
//
//     type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
//
// //Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?
//
// Ответ:
// Вопрос:
//
//     Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
//
//     copy
//
//     type ActionType = {
//     type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
//     payload: number
// }
//
// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, {XXX, payload: 0})
// if (!(result - 1)){
//     console.log("IT-INCUBATOR")
// }
//
// //Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
//
// Ответ:
//
// Вопрос:
//
//     Какой код должен быть написан вместо XXX и YYY в типе ChangeUserPasswordTypeAT, что бы редьюсер работал?
//
//     В ответе напишите через пробел: XXX YYY.
//
//     copy
// type UserType = {
//     id: number
//     userName: string
//     email: string
//     password: string
// }
//
// type ChangeUserPasswordTypeAT = {
//     type: "CHANGE-USER-PASSWORD"
//     payload: {
//         XXX
//         YYY
//     }
// }
//
// export const userReducer =
//     (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
//         switch (action.type) {
//             case "CHANGE-USER-PASSWORD":
//                 return state.map(u =>
//                     u.id === action.payload.id
//                         ? {...u, password: action.payload.newPassword}
//                         : u)
//             default:
//                 return state
//         }
//     }
//
// //Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
// //В ответе напишите через пробел: XXX  YYY
//
// Ответ:
