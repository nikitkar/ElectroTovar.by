import { useContext } from "react";

import { Context } from "../../../index";

import { searchData } from "../../../http/GetDataTableAPI";
import { observer } from "mobx-react-lite";

const SearchData = observer(({ nameTable, nameColumn, content }) => {
  const { dataTables } = useContext(Context);

  setTimeout(() => {
    searchData(nameTable, nameColumn, content).then((data) => {
      if (data.err) return;

      dataTables.setDataUser(data);
      dataTables.setSelectedInputs([]);
    });
  }, 600);
  return <div></div>;
});

export default SearchData;
