import { useState } from "react";
import CardList from "../../components/CardList"
import Checkboxes from "../../components/Checkboxes"
import styles from "./style.module.scss"

export default function Categories () {
    const [modalInfo, setModalInfo] = useState({});
    const [categoriesFilter, setCategoriesFilter] = useState([]);
    
    return (
        <>
            <Checkboxes setCategoriesFilter={setCategoriesFilter}/>
            <CardList setModalInfo = {setModalInfo} filter="" categoriesFilter={categoriesFilter} setUpdateCardId=""/>
        </>
    )
}