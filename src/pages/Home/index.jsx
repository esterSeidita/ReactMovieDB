import { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import SearchInput from "../../components/SearchInput";
import Checkboxes from "../../components/Checkboxes";
import Modal from "./../../components/Modal";
import { DeleteData } from "../../utils";

export default function Home({ setUpdateCardId }) {
  const [filter, setFilter] = useState("");
  const [modalInfo, setModalInfo] = useState({});
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    deleteConfirmed &&
      DeleteData(modalInfo.cardId).then(() => window.location.reload(false));
  }, [deleteConfirmed]);

  useEffect(() => {
    setRender(!render);
  }, [render]);

  return (
    <>
      <Modal
        showModal={modalInfo.show || "not-visible"}
        description={modalInfo.description || ""}
        title={modalInfo.title || ""}
        needConfirm={modalInfo.needConfirm || false}
        setDeleteConfirmed={setDeleteConfirmed}
      />
      <Checkboxes
        setCategoriesFilter={setCategoriesFilter}
        setRender={setRender}
      />
      <SearchInput setFilter={setFilter} />
      <CardList
        categoriesFilter={categoriesFilter}
        setModalInfo={setModalInfo}
        filter={filter}
        setUpdateCardId={setUpdateCardId}
      />
    </>
  );
}
