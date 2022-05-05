import "normalize.css";
import "./App.css";
import { lazy, useEffect, useState, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Alert from "./components/Alert";
import Loading from "./components/Loading";

function App() {
  const [updateCardId, setUpdateCardId] = useState();
  const [alertData, setAlertData] = useState({
    content: "",
    response: "",
    display: false,
  });
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    if (deleted === true) {
      setAlertData({
        content: "Film cancellato con successo.",
        response: "DELETE",
        display: true,
      });

      setDeleted(false);

      setTimeout(() => {
        setAlertData({ content: "", response: "", display: false });
      }, 7000);
    }
  }, [deleted]);

  const Home = lazy(() => import("./pages/Home"));
  const AddMovie = lazy(() => import("./pages/AddMovie"));
  const UpdateMovie = lazy(() => import("./pages/UpdateMovie"));

  return (
    <div className="App">
      <Router>
        <Header />
        {alertData.display && (
          <Alert content={alertData.content} response={alertData.response} />
        )}
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <Home
                  onDeleteRender={deleted}
                  setDeleted={setDeleted}
                  setUpdateCardId={setUpdateCardId}
                />
              </Suspense>
            }
          ></Route>
          <Route
            path="ReactMovieDB"
            element={
              <Suspense fallback={<Loading />}>
                <Home
                  onDeleteRender={deleted}
                  setDeleted={setDeleted}
                  setUpdateCardId={setUpdateCardId}
                />
              </Suspense>
            }
          ></Route>
          <Route
            path="AddMovie"
            element={
              <Suspense fallback={<Loading />}>
                <AddMovie setAlertData={setAlertData} />
              </Suspense>
            }
          ></Route>
          <Route
            path="UpdateMovie"
            element={
              <Suspense fallback={<Loading />}>
                <UpdateMovie
                  setAlertData={setAlertData}
                  updateCardId={updateCardId}
                />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
