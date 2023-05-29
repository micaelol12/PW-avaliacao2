export interface IEmployer {
    id: number,
    nome: string,
    foto: string,
    email: string,
    subobjeto: {
        propriedade1: string,
        propriedade2:string
    }
}