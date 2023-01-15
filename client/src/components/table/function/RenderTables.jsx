import UserTable from "../UserTable";

const RenderTables = ({ nameTable }) => {
  switch (nameTable) {
    case "CLIENT_NAMECOLUMNE":
      return <UserTable />;

    default:
      return null;
  }
};

export default RenderTables;
