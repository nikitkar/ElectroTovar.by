import { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Confirm } from "semantic-ui-react";

import { Context } from "../index";

import RenderTables from "../components/table/function/RenderTables";
import RenderSelectOption from "../components/table/function/RenderSelectOption";

import CreateCategory from "../components/modals/CreateCategory";
import CreateProduct from "../components/modals/CreateProduct";

import { deletedRow } from "../http/GetDataTableAPI";

const TablesPage = observer(({ nameTable }) => {
  const { dataTables } = useContext(Context);

  const nameTabel_split = nameTable.split("_")[0].toLowerCase();

  const [productVisible, setProductVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [state, setState] = useState({ open: false });

  const open = () => setState({ open: true });
  const close = () => setState({ open: false });

  const addRow = () => {
    switch (nameTabel_split) {
      case "product":
        return setProductVisible(true);

      case "category":
        return setCategoryVisible(true);

      default:
        return null;
    }
  };

  const deleteRow = () => {
    dataTables.selectedInputs.map((selectedInput) => {
      console.log(selectedInput, nameTabel_split, "idClient");
      //   deletedRow(selectedInput, nameTable.split("_")[0].toLowerCase(), "idClient").then((data) => {});
    });

    close();
  };

  return (
    <div className="mui-main">
      <div className="mui-toolbar">
        {dataTables.selectedInputs.length === 0 ? null : (
          <div className="mui-toolbar-delete-wrap">
            <p className="mui-toolbar-delete-text">
              Элементов выделено -{" "}
              <span>{dataTables.selectedInputs.length}</span>
            </p>
            <button className="btn-text" onClick={open}>
              Удалить
            </button>
            <Confirm
              content="Уверены, что хотите удалить?"
              open={state.open}
              onCancel={close}
              onConfirm={deleteRow}
            />
          </div>
        )}

        {nameTabel_split === "product" ? (
          <button className="btn-text" onClick={() => addRow()}>
            Добавить товар
          </button>
        ) : nameTabel_split === "category" ? (
          <button className="btn-text" onClick={() => addRow()}>
            Добавить категорию
          </button>
        ) : null}

        {
          <div className="mui-toolbar-search-wrap">
            <div className="mui-toolbar-search-column">
              <label className="mui-toolbar-search-label">
                Поиск по столбцу -{" "}
              </label>
              <select className="mui-toolbar-search-select">
                <RenderSelectOption nameTable={nameTable} />
              </select>
            </div>
            <input
              className="mui-toolbar-search-input"
              type="text"
              placeholder="Поиск"
            />
          </div>
        }
      </div>
      <div className="mui-paper">
        <div className="mui-paper-data_grid">
          <table className="datagrid-table">
            <RenderTables nameTable={nameTable} />
          </table>
        </div>

        <CreateCategory
          stateModal={categoryVisible}
          onClick={() => setCategoryVisible(false)}
        />
        <CreateProduct
          stateModal={productVisible}
          onClick={() => setProductVisible(false)}
        />
      </div>
      {/* <div className="mui-navigation"></div> */}
    </div>
  );
});

export default TablesPage;
