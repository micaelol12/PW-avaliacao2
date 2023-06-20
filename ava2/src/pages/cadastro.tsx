import { useCallback, useState } from "react"
import { add, deleteById, getById } from "../services/furb.service"
import { Person } from "../models/person"
import { Delete } from "../models/delete"

import styles from './cadastro.module.css'
import Notificacao from "../components/notificação"

const Cadastro = () => {
    const [consulta, setConsulta] = useState('')
    const [pessoa, setPessoa] = useState<Person | undefined>()
    const [response, setResponse] = useState<Delete>()
    const [putResponse,setPutResponse] = useState<Delete>()

    const [formPessoa, setFormPessoa] = useState<Person>()

    const changeHandler = (value: string) => {
        setConsulta(value)
    }

    const consultar = useCallback(async () => {
        const response = await getById(consulta)
        setPessoa(response.data)
    }, [consulta])

    const excluir = useCallback(async () => {
        const response = await deleteById(consulta)
        if(response.data.status === 'Ok'){
            setPessoa(undefined)
        }
        setResponse(response.data)
    }, [consulta])

    const addPessoa = useCallback(async () => {
        if (formPessoa) {
            console.log('teste', formPessoa)
            const response = await add(formPessoa)
            setPutResponse(response.data)
        }
    }, [formPessoa])

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addPessoa()
    }


    return <div className={styles.page}>
        <div>
            <input type="text" onChange={e => changeHandler(e.target.value)} className={styles.search}></input>
            <button onClick={consultar} className={styles["search_button"]}>Consultar</button>
        </div>

        {pessoa && <div className={styles.pessoa}>
            <p>id : {pessoa.id}</p>
            <p>nome : {pessoa.nome}</p>
            <p>departamento : {pessoa.departamento}</p>
            <p>endereco : {pessoa.endereco}</p>
            <p>email : {pessoa.email}</p>
            <button onClick={excluir} className={styles.exclude}>Excluir</button>
        </div>}

        {response &&  <Notificacao mensagem={response.mensagem} status={ response.status}/>}
       

        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles["form_item"]}>
                <label htmlFor="id">id</label>
                <input id="id" onChange={(e) => setFormPessoa(o => ({ ...o!, id: e.target.value }))} />
            </div>

            <div className={styles["form_item"]}>
                <label htmlFor="nome">nome</label>
                <input id="nome" onChange={(e) => setFormPessoa(o => ({ ...o!, nome: e.target.value }))} />
            </div>

            <div className={styles["form_item"]}>
                <label htmlFor="departamento">departamento</label>
                <input id="departamento" onChange={(e) => setFormPessoa(o => ({ ...o!, departamento: e.target.value }))} />
            </div>

            <div className={styles["form_item"]}>
                <label htmlFor="endereco">endereco</label>
                <input id="endereco" onChange={(e) => setFormPessoa(o => ({ ...o!, endereco: e.target.value }))} />
            </div>

            <div className={styles["form_item"]}>
                <label htmlFor="email">email</label>
                <input id="email" onChange={(e) => setFormPessoa(o => ({ ...o!, email: e.target.value }))} />
            </div>

            <button className={styles.button}>Inserir</button>
        </form>
        {putResponse &&  <Notificacao mensagem={putResponse.mensagem} status={ putResponse.status}/>}


    </div>
}

export default Cadastro