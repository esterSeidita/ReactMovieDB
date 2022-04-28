import {useState} from "react";
import CardList from "../../components/CardList";
import SearchInput from "../../components/SearchInput";

export default function Home ({setUpdateCardId}) {
    const [filter, setFilter] = useState("");
    return (
        <>
            <SearchInput setFilter={setFilter}/>
            <CardList filter={filter} setUpdateCardId={setUpdateCardId}/>
        </>
    )
}