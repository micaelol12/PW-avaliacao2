import { IEmployer } from "../../models/employer";
import styles from "./EmployerCard.module.css";

const EmployerCard: React.FC<IEmployer> = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.foto} className={styles.img}></img>
      <div className={styles.info}>
        <span className={styles.name}>{props.nome}</span>
        <div>
          <ul>
            <li>{props.subobjeto.propriedade1}</li>
            <li>{props.subobjeto.propriedade2}</li>
          </ul>
        </div>
        <div className={styles["email-container"]}>
            <a href={`mailto:${props.email}`} >{props.email}</a>
        </div>
      </div>
    </div>
  );
};

export default EmployerCard;
