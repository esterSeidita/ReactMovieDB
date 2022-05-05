import { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import SearchInput from "../../components/SearchInput";
// import Checkboxes from "../../components/Checkboxes";
import Modal from "./../../components/Modal";
import { DeleteData } from "../../utils";
import Categories from "../../components/Categories";

export default function Home({ setDeleted, setUpdateCardId }) {
  const [filter, setFilter] = useState("");
  const [modalInfo, setModalInfo] = useState({});
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (deleteConfirmed) {
      DeleteData(modalInfo.cardId).then(() => {
        setModalInfo({show: "not-visible"})
        setDeleted(true);
        setDeleteConfirmed("");
        setRender(!render);
      });
    }
    // eslint-disable-next-line 
  }, [deleteConfirmed]);

  return (
    <>
      <Modal
        showModal={modalInfo.show || "not-visible"}
        description={modalInfo.description || ""}
        title={modalInfo.title || ""}
        needConfirm={modalInfo.needConfirm || false}
        setDeleteConfirmed={setDeleteConfirmed}
        setRender = {setRender}
      />
      {/* <Checkboxes
        setCategoriesFilter={setCategoriesFilter}
        setRender={setRender}
      /> */}
      <Categories setCategoriesFilter={setCategoriesFilter} />
      <SearchInput setFilter={setFilter} />
      <CardList
        categoriesFilter={categoriesFilter}
        setModalInfo={setModalInfo}
        filter={filter}
        setUpdateCardId={setUpdateCardId}
        render={render}
      />
    </>
  );
}
