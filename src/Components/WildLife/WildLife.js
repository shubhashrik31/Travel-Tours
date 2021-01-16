import React, {useEffect, useState} from "react";
import Card from "../CardUI/CardUi.js";
import Bhimashankar from "../../Assets/WildLife/Bhimashankar.jpg";
import GirGJ from "../../Assets/WildLife/GirGJ.jpg";
import Kaziranga from "../../Assets/WildLife/Kaziranga.jpg";
import axios from "axios";

const WildLife = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios.get('/toursInfo', {
      params: {
        type: 'Wildlife'
      }
    }).then(response => {
      const descriptions = {};
      response.data.forEach(data => {
        descriptions[data.title] = data.info;
      })
      setInfo(descriptions);
    })
  }, []);

  const tourData = [
    {
      imageSrc: Bhimashankar,
      name: "Bhimashankar",
      info: info['Bhimashankar']
    },
    {
      imageSrc: GirGJ,
      name: "GirGJ",
      info: info['GirGJ']
    },
    {
      imageSrc: Kaziranga,
      name: "Kaziranga",
      info: info['Kaziranga']
    },
  ];
  const data = tourData.map((item) => (
    <div className="col-md-4  col-sm-12" key={item.name}>
      <Card imgsrc={item.imageSrc} title={item.name} info={item.info} index={item.name}/>
    </div>
  ));
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">{data}</div>
      </div>
    </div>
  );
};
export default WildLife;
