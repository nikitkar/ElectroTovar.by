import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { createProduct } from "../../http/ProductAPI";

import DropDownMenu from "../dropDownMenu/DropDownMenu";
import { Context } from "../../index";

const CreateProduct = observer(({ stateModal, onClick }) => {
  const { dataTables, categories } = useContext(Context);
  const [classModal, setClassModal] = useState("createProduct");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [img, setImg] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(
    () =>
      setClassModal(stateModal ? "createProduct is_active" : "createProduct"),
    [stateModal]
  );

  const addInfo = () =>
    setInfo([
      ...info,
      { titleProduct: "", descriptionProduct: "", number: Date.now() },
    ]);

  const removeInfo = (number) =>
    setInfo(info.filter((i) => i.number !== number));

  const addProduct = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("count", count);
    formData.append("img", img);
    formData.append("idCategory", categories.selectedCategory.idCategory);
    formData.append("info", JSON.stringify(info));

    createProduct(formData).then((data) => {
      if (data.err) return alert(data.err);

      setName("");
      setPrice(0);
      setCount(0);
      setImg(null);
      setInfo([]);

      onClick();
      dataTables.refresh();
    });
  };

  const selectedFile = (e) => setImg(e.target.files[0]);

  const changeInfo = (key, value, number) =>
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );

  return (
    <div
      className={classModal}
      onClick={(e) => {
        const className = e.target.classList[0];

        if (
          className === "createProduct" ||
          className === "createProduct-close"
        )
          onClick();
      }}>
      <div className="createProduct-body">
        <span className="createProduct-close"></span>

        <h4 className="createProduct-title">Добавить товар</h4>

        <div className="createProduct-form">
          <DropDownMenu title="Выберите категорию товара" store="categories" />

          <div className="createProduct-box">
            <label className="createProduct-box__text">Название товара</label>
            <input
              className="createProduct-input"
              type="text"
              placeholder="Название товара"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="createProduct-box">
            <label className="createProduct-box__text">Цена товара</label>
            <input
              className="createProduct-input"
              type="text"
              placeholder="Цена товара"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <div className="createProduct-box">
            <label className="createProduct-box__text">Количество товара</label>
            <input
              className="createProduct-input"
              type="text"
              placeholder="Количество товара"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </div>

          <div className="createProduct-box">
            <label className="createProduct-box__text">
              Изображение товара
            </label>
            <input
              className="createProduct-input"
              type="file"
              placeholder="Изображение товара"
              onChange={selectedFile}
            />
          </div>

          <button
            className="createProduct-btn-info  btn-text"
            onClick={addInfo}
            type="button">
            Добавить свойство товара
          </button>

          {info.map((i) => (
            <div className="info" key={i.number}>
              <input
                className="createProduct-input"
                type="text"
                placeholder="Введите название свойства"
                value={i.titleProduct}
                onChange={(e) =>
                  changeInfo("titleProduct", e.target.value, i.number)
                }
              />
              <input
                className="createProduct-input"
                type="text"
                placeholder="Введите описание свойства"
                value={i.descriptionProduct}
                onChange={(e) =>
                  changeInfo("descriptionProduct", e.target.value, i.number)
                }
              />
              <button
                className="btn-text"
                type="button"
                onClick={() => removeInfo(i.number)}>
                Удалить
              </button>
            </div>
          ))}

          <button
            className="createProduct-button btn-text"
            type="button"
            onClick={() => addProduct()}>
            Добавить товар
          </button>
        </div>
      </div>
    </div>
  );
});

export default CreateProduct;
