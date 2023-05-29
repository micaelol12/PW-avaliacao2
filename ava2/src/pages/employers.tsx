import { useState } from "react";
import { IEmployer } from "../models/employer";
import data from "../exemploJSON.json";
import EmployersList from "../components/EmployersList/EmployersList";

const Employers = () => {
  const [employers, setEmployers] = useState<IEmployer[]>(data);
  return <EmployersList employers={employers}/>;
};

export default Employers;
