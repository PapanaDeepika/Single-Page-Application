import React, { useEffect , useState} from "react";
import axios from "axios";
import  CustomerTable from "./CustomerTable";
import Top  from "./Top";
import Bottom from "./Bottom";
//import "./middle.css"
const Middle = () => {
  //states
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState('');
  const [page, setPage] = useState(1);
  //fetch data
  useEffect(() => {
    async function fetch() {
      const response = await axios.get("http://localhost:5000/api/customers", {
        params: {
          searchData: search,
          sortData: sortBy,
          pageData: page,
        },
      });
      setData(response.data.results);
    }
    fetch();
  }, [search, sortBy, page]);
  return (
    <div>
      <Top
        search={search}
        sortBy={sortBy}
        handleSearch={(e) => setSearch(e.target.value)}
        const handleSort = {(col) => {
                
                if(sortBy===''){
                  const sorted = [...data].sort((a,b) =>
                  a[col] > b[col] ? 1:-1);
                  setData(sorted);
                  }
                setSortBy(sortBy);
              }}
      />
      <CustomerTable data={data} />
      <Bottom
        handleprevPage={() => setPage((prevPage) => prevPage - 1)}
        handlenextPage={() => setPage((prevPage) => prevPage + 1)}
        page={page}
        data={data}
      />
    </div>
  );
};
export default Middle;