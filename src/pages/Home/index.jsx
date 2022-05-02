import { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import SearchInput from "../../components/SearchInput";
// import Checkboxes from "../../components/Checkboxes";
import Modal from "./../../components/Modal";
import { DeleteData } from "../../utils";
import Categories from "../../components/Categories";
// import { useNavigate } from "react-router-dom";

export default function Home({ setAlertData, setUpdateCardId }) {
  const [filter, setFilter] = useState("");
  const [modalInfo, setModalInfo] = useState({});
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [render, setRender] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    if (deleteConfirmed) {
      // setModalInfo({ show: "not-visible" });
      DeleteData(modalInfo.cardId).then(() => {
        window.location.reload(false)
        
        // setDeleteConfirmed(false);
        // setAlertData({
        //   content: "Film cancellato con successo.",
        //   response: "DELETE",
        //   display: true,
        // });
        // setTimeout(() => {
        //   setAlertData({ content: "", response: "", display: false });
        // }, 5000);
      });
    }
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
        deleteConfirmed={deleteConfirmed}
      />
    </>
  );
}
