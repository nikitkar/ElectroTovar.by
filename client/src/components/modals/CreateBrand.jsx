import { useEffect, useState } from "react";
import { createBrand } from "../../http/BrandAPI";

const CreateBrand = ({ stateModal, onClick }) => {
  const [classModal, setClassModal] = useState("createBrand");
  const [value, setValue] = useState("");

  useEffect(() =>
    setClassModal(stateModal ? "createBrand is_active" : "createBrand")
  , [stateModal]);

  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      data.err ? alert(data.err) : setValue("");
      onClick();
    });
  };

  return (
    <div
      className={classModal}
      onClick={(e) => {
        const className = e.target.classList[0];

        if (className === "createBrand" || className === "createBrand-close")
          onClick();
      }}>
      <div className="createBrand-body">
        <span className="createBrand-close"></span>

        <h4 className="createBrand-title">Добавить бренд</h4>

        <div className="createBrand-form">
          <input
            className="createBrand-input"
            type="text"
            placeholder="Введите название бренда"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <input
            className="createBrand-button btn-text"
            type="submit"
            value="Добавить бренд"
            onClick={addBrand}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateBrand;
