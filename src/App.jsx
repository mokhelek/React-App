import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

// Importing the components from "./components/"
import DataList from "./components/DataList.jsx";
import Header from "./components/Header.jsx";
import FooterMenu from './components/FooterMenu.jsx'

// importing pages from "./pages/"
import ReadArticlePage from "./pages/ReadArticlePage.jsx";
import AddBookPage from "./pages/AddBookPage.jsx";




function App() {
  let [stories, setStories] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    getStories();
  }, []);

  const getStories = async () => {
    const stories = await fetch("http://127.0.0.1:8000/api/books");
    const data = await stories.json();

    setStories(data);
  };


  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().match(searchTerm.toLowerCase());
  });

  return (
    <Router>
      <Header searchValue={handleSearch} />

      <Routes>
        <Route path="/" exact element={<DataList list={searchedStories} />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/read/:note_id" element={<ReadArticlePage stories={stories} />} />
      </Routes>

     <FooterMenu />

    </Router>
  );
}

export default App;






