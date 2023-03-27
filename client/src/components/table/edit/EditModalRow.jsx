import { useState } from "react";

const EditModalRow = () => {
  const [valueInput, setValueInput] = useState("");

  return (
    <div className="editModal">
      <div className="editModal-body">
        <span className="editModal-close"></span>

        <h4 className="editModal-title">Изменить данные</h4>

        <div className="editModal-form">
          <div className="editModal-box">
            <label className="editModal-box__label">id</label>
            <input
              type="text"
              disabled
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
            />
          </div>
          <div className="editModal-box">
            <label className="editModal-box__label">text</label>
            <input
              type="text"
              disabled
              value={valueInput}
              onChange={(e) => setValueInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModalRow;
