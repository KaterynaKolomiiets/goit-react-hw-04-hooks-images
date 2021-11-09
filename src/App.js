import { useState, useEffect } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import { sendServerRequest } from "./components/services/pixabay-api";
import Modal from "./components/Modal/Modal";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./App.module.css";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [userQuery, setUserQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [src, setSrc] = useState("");

  const toggleModal = (e) => {
    setShowModal((prev) => !prev);
    if (e) {
      setSrc(e.target.src);
    }
  };
  useEffect(() => {
    if (userQuery === "") {
      return;
    }
    setIsLoading(true);
    sendServerRequest(page, userQuery)
      .then((res) => {
        if (page === 1) {
          setArticles(res.articles);
        } else {
          if (!res.articles) {
            alert("No articles left!");
            return;
          } else {
            setArticles((prevState) => [...prevState, ...res.articles]);
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }
        }
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [page, userQuery]);

  const handleFormSubmit = (userQuery) => {
    setUserQuery(userQuery);
    setPage(1);
  };

  const changePage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className={s.app}>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && (
        <Loader type="Bars" color="orangered" className={s.loader} />
      )}
      <ImageGallery props={articles} onClick={toggleModal} />
      {articles?.length > 0 && <Button onClick={changePage} />}
      {showModal && <Modal src={src} onClose={toggleModal} />}
      {error && <div>{error}</div>}
    </div>
  );
};

export default App;