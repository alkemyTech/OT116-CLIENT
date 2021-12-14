import React, { useState, useEffect } from "react";
import "../../Components/FormStyles.css";
import { getCategories } from "../../Services/categoriesServices";
import InputEditor from "../Inputs/InputEditor";
import { setCKEditorText } from "../common/ckEditor/setCKEditorText";
import { URLFileFormater, CKEditorTextFormater } from "../../Utils/formatters";
import { handleNewsImputChange } from "../../Utils/handlers";
import { useDispatch, useSelector } from "react-redux";
import * as newsActions from "../../app/NewsReducer/newsReducer";
import { useHistory, useParams } from "react-router";
import InputImg from "../Inputs/InputImg";
import { right } from "@popperjs/core";
const NewsForm = () => {
  const currentNews = useSelector((state) => state.news.currentNews);
  const { newsid } = useParams();
  const [news, setNews] = useState(currentNews);
  const [categories, setCategories] = useState([]);
  const [categorySelect, setCategorySelect] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) =>
    handleNewsImputChange(
      e,
      news,
      setNews,
      setCategorySelect,
      categories,
      "name",
      "content",
      "image",
      "category_id"
    );
  // handleNewsImputChange(e,news,setNews,setCategorySelect,categories,"name","content","image","category_id");
  const handleSubmit = (e) => {
    e.preventDefault();
    sendNews();
  };

  const sendNews = async () => {
    dispatch(newsActions.createOrUpdate({ newsid, news }));
    dispatch(newsActions.cleanCurrentState());
    setTimeout(() => {
      history.push("/backoffice/news");
    }, 1500);
  };

  useEffect(async () => {
    const { data } = await getCategories();
    setCategories(data);
  }, []);

  useEffect(() => {
    newsid && dispatch(newsActions.getById(newsid));
    setNews(currentNews);
  }, [newsid]);
  useEffect(() => {}, [news.image]);
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="name">Title</label>
      <input
        className="input-field"
        type="text"
        name="name"
        value={news.name || ""}
        onChange={handleChange}
        minLength="5"
        required
      ></input>
      <InputEditor news={news} setNews={setNews} />
      <label htmlFor="category_id">Category</label>
      <select
        className="select-field"
        name="category_id"
        value={categorySelect || ""}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select Category
        </option>
        {categories?.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>
      <input
        className="input-image"
        type="file"
        accept="image/jpeg, image/jpg, image/png"
        id="image"
        name="image"
        value={undefined}
        onChange={handleChange}
        style={{ color: "white" }}
      />
      {news.image && (
        <img style={{ width: "100px" }} src={news.image} alt="img" />
      )}

      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default NewsForm;
