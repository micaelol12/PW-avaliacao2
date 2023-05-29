import { IEmployer } from "../../models/employer"
import EmployerCard from "../EmployerCard/EmployerCard"
import styles from './EmployersList.module.css'

const EmployersList: React.FC<{employers: IEmployer[]}> = ({employers}) => {
    return <div className={styles.container} >
        {employers.map(e=> <EmployerCard {...e} key={e.id}/>)}
    </div>
}

export default EmployersList