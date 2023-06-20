import { Delete } from "../models/delete"
import styles from './notificacao.module.css'

const Notificacao: React.FC<Delete> = ({ status, mensagem }) => {
    return <div className={`${styles.notificacao} ${status === 'Ok' ? styles.green : styles.red}`}>{mensagem}</div>
}
export default Notificacao