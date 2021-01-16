import React, {useEffect, useState} from "react";
import Card from "../CardUI/CardUi.js";
import hawamahal from "../../Assets/Historical/hawamahal.jpg";
import MysorePalace from "../../Assets/Historical/MysorePalace.jpg";
import Tajmahal from "../../Assets/Historical/Tajmahal.jpg";
import axios from "axios";

const Historical = () => {

    const [info, setInfo] = useState({});
    useEffect(() => {
        axios.get('/toursInfo', {
            params: {
                type: 'Historical'
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
            imageSrc: MysorePalace,
            name: "MysorePalace",
            info: info['MysorePalace']
        },
        {
            imageSrc: Tajmahal,
            name: "Tajmahal",
            info: info['Tajmahal']
        },
        {
            imageSrc: hawamahal,
            name: "Hawamahal",
            info: info['Hwamahal']
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
export default Historical;
