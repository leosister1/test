import { useState, useEffect } from "react";

import PlacesMap from "../../components/PlacesMap";
import Place from "../../components/Place";

const dummyData = [
  {
    _id: 0,
    placeName: "한국타이어",
    desc: "정품 품질 보장", 
  },
  {
    _id: 1,
    placeName: "현대모비스",
    desc: "합리적 가격", 
  },
  {
    _id: 2,
    placeName: "티스테이션",
    desc: "안전과 최적화된 주행을 우선", 
  },
  {
    _id: 3,
    placeName: "오토팜",
    desc: "엔진 오일 교환", 
  },
  {
    _id: 4,
    placeName: "현대블루핸즈",
    desc: "10년째 운영중", 
  },
  {
    _id: 5,
    placeName: "태성카센터",
    desc: "10년째 운영중", 
  }
];

const Plcaes = () => {
  const [data] = useState(dummyData);

  useEffect(() => {
  }, []);

  return (
    <div>
    <div className="container w-[85%] xl:max-w-10xl grid grid-cols-1 lg:grid-cols-3 flex">
      <div className="col-span-2 min-h-[30vh]">
        <PlacesMap height="85%" data={data} />
      </div>
      <div className="places col-span-1 mt-2 mb-12 lg:mr-1 overflow-y-scroll">
        {data.map((item) => {
          return <Place key={item._id} {...item} />;
        })}
    </div>
    </div>
        <div className="flex">
          <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">AD</div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">AD</div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">news</div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-200 rounded-box place-items-center">news</div>
        </div>    
    </div>
  );
};

export default Plcaes;
