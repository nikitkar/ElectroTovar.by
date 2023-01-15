import { observer } from "mobx-react-lite";
import UserTable from "../UserTable";

const RenderTables = observer(({ nameTable }) => {
  switch (nameTable) {
    case "CLIENT_NAMECOLUMNE":
      return <UserTable />;

    default:
      return null;
  }
});

export default RenderTables;
