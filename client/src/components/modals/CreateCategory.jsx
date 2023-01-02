import { useEffect, useState } from "react";
import { createCategory } from "../../http/CategoryAPI";

const CreateCategory = ({ stateModal, onClick }) => {
  const [classModal, setClassModal] = useState("createCategory");
  const [value, setValue] = useState("");

  useEffect(() =>
    setClassModal(stateModal ? "createCategory is_active" : "createCategory")
  , [stateModal]);

  const addCategory = () => {
    createCategory({ name: value }).then((data) => {
      data.err ? alert(data.err) : setValue("");
      onClick();
    });
  };

  return (
    <div
      className={classModal}
      onClick={(e) => {
        const className = e.target.classList[0];

        if (
          className === "createCategory" ||
          className === "createCategory-close"
        )
          onClick();
      }}>
      <div className="createCategory-body">
        <span className="createCategory-close" onClick={() => onClick()}></span>

        <h4 className="createCategory-title">Добавить категорию</h4>

        <div className="createCategory-form">
          <input
            className="createCategory-input"
            type="text"
            placeholder="Введите название категории"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <input
            className="createCategory-button btn-text"
            type="submit"
            value="Добавить категорию"
            onClick={addCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
