import { observer } from "mobx-react-lite";

import ThHeadUniversal from "../ThHeadUniversal";

import { CLIENT_NAMECOLUMNE } from "../../../utils/consts_nameColumnE";

const RenderUniversalTables = observer((nameTable) => {
  switch (nameTable) {
    case "CLIENT_NAMECOLUMN":
      return CLIENT_NAMECOLUMNE.map((nameColumn, index) => (
        <ThHeadUniversal index={index} name={nameColumn} />
      ));

    default:
      return null;
  }
});

export default RenderUniversalTables;
