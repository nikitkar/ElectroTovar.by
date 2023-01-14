import { observer } from "mobx-react-lite";

import UserTable from "../components/table/UserTable";

const TablesPage = observer(({ nameTable }) => {

  const renderSwitch = () => {
    switch (nameTable) {
      case "CLIENT_DATABASE":
        return <UserTable />;

      default:
        return null;
    }
  };

  return (
    <div className="mui-main">
      <div className="mui-toolbar"></div>
      <div className="mui-paper">
        <div className="mui-paper-data_grid">
          <table className="datagrid-table">{renderSwitch()}</table>
        </div>
      </div>
      {/* <div className="mui-navigation"></div> */}
    </div>
  );
});

export default TablesPage;
