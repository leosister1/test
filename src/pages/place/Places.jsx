import { useState, useEffect } from "react";

import axios from "axios";
import PlacesMap from "../../components/PlacesMap";
import Place from "../../components/Place";

const dummyData = [
  {
    
  },
];

const Plcaes = () => {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios
      .get("/api/place")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container w-[85%] xl:max-w-10xl grid grid-cols-1 lg:grid-cols-3 absolute top-20 bottom-0 left-20.0 right-10">
      <div className="col-span-2 min-h-[30vh]">
        <PlacesMap height="85%" data={data} />
      </div>
      <div className="places col-span-1 mt-10 mb-5 mx-auto lg:mr-5 overflow-y-scroll">
        {data.map((item) => {
          return <Place key={item._id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Plcaes;