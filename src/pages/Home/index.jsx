import { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import SearchInput from "../../components/SearchInput";
import Modal from "./../../components/Modal";
import { DeleteData } from "../../utils";

export default function Home({ setUpdateCardId }) {
  const [filter, setFilter] = useState("");
  const [modalInfo, setModalInfo] = useState({});
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  useEffect(() => {
    deleteConfirmed && DeleteData(modalInfo.cardId);
  }, [deleteConfirmed])

  return (
    <>
      <Modal
        showModal={modalInfo.show || "not-visible"}
        description={modalInfo.description || ""}
        title={modalInfo.title || ""}
        needConfirm={modalInfo.needConfirm || false}
        setDeleteConfirmed = {setDeleteConfirmed}
      />
      <SearchInput setFilter={setFilter} />
      <CardList setModalInfo= {setModalInfo} filter={filter} setUpdateCardId={setUpdateCardId} />
    </>
  );
}
