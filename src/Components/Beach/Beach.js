import React, {useEffect, useState} from "react";
import Card from "../CardUI/CardUi.js";
import NorthGoa from "../../Assets/Beaches/NorthGoa.jpg";
import Ratnagiri from "../../Assets/Beaches/Ratnagiri.jpg";
import Tarkarli from "../../Assets/Beaches/Tarkarli.jpg";
import axios from "axios";

const Beach = () => {

  const [info, setInfo] = useState({});
  useEffect(() => {
    axios.get('/toursInfo', {
      params: {
        type: 'Beach'
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
      imageSrc: NorthGoa,
      name: "North Goa",
      info: info['North Goa']
    },
    {
      imageSrc: Ratnagiri,
      name: "Ratnagiri",
      info: info['Ratnagiri']
    },
    {
      imageSrc: Tarkarli,
      name: "Tarkarli",
      info: info['Tarkarli']
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
export default Beach;
