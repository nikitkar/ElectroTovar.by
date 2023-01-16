import { useContext } from "react";
import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";

import { Context } from "../../../index";

import UniversalTables from "../UniversalTables";
import UserTable from "../UserTable";

const RenderTables = observer(({ nameTable }) => {
  const { dataTables } = useContext(Context);

  switch (nameTable) {
    case "CLIENT_NAMECOLUMNE": {
      runInAction(() => dataTables.setActiveTable("CLIENT_NAMECOLUMNE"));

      return <UserTable />;
    }

    default:
      return <UniversalTables nameTable={nameTable} />;
  }
});

export default RenderTables;
