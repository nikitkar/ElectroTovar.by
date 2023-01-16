import { observer } from "mobx-react-lite";

import UniversalTables from "../UniversalTables";
import UserTable from "../UserTable";

const RenderTables = observer(({ nameTable }) => {
  switch (nameTable) {
    case "CLIENT_NAMECOLUMNE":
      return <UserTable />;

    default:
      return <UniversalTables nameTable={nameTable} />;
  }
});

export default RenderTables;
