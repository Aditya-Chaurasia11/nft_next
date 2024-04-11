import React, { useEffect, useState } from "react";
import axios from "axios";

const Create = () => {
  const [data, setData] = useState();
  const [repoList, setRepoList] = useState();
  const [selectedOption, setSelectedOption] = useState("");

  // Event handler for option selection
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getAllData = async () => {
    try {
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
        const res = await axios.get(
          `https://api.github.com/users/${parsedData?.user_metadata.user_name}/repos`,
          {
            params: { per_page: 100 }, // Adjust per_page as needed (max is 100)
          }
        );

        console.log(res.data);
        setRepoList(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      {/* <div>{name?.email}</div> */}
      {/* <Temp /> */}
      {/* {data?.email} */}
      <input type="text" placeholder="{dataArray}"></input>
      <input type="text" placeholder="description of challenge"></input>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {/* Map through the array to generate options */}
        {repoList?.map((item) => (
          <option key={item.id} value={item.label}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Create;
