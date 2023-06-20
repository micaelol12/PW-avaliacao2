import axios from "axios";
import { Person } from "../models/person";
import { Delete } from "../models/delete";

const URL_FURB = "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/";


export const getById = (id:string) => {
    return axios.get<Person>(URL_FURB + id)
}

export const deleteById = (id:string) => {
    return axios.delete<Delete>(URL_FURB + id)
}

export const add = (person: Person) => {
    return axios.put<Delete>(URL_FURB,person)
}