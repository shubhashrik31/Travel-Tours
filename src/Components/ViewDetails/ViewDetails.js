import React, {useEffect, useState} from "react";

import "./ViewDetails.css";
import NorthGoa from "../../Assets/Beaches/NorthGoa.jpg";
import Ratnagiri from "../../Assets/Beaches/Ratnagiri.jpg";
import Tarkarli from "../../Assets/Beaches/Tarkarli.jpg";
import hawamahal from "../../Assets/Historical/hawamahal.jpg";
import MysorePalace from "../../Assets/Historical/MysorePalace.jpg";
import Tajmahal from "../../Assets/Historical/Tajmahal.jpg";
import Bhimashankar from "../../Assets/WildLife/Bhimashankar.jpg";
import GirGJ from "../../Assets/WildLife/GirGJ.jpg";
import Kaziranga from "../../Assets/WildLife/Kaziranga.jpg";
import axios from "axios";
import * as jwt from "jsonwebtoken";

function ViewDetails(props) {

    const imageSrcs = [
        {
            name: 'NorthGoa',
            src: NorthGoa
        },
        {
            name: 'Ratnagiri',
            src: Ratnagiri
        },
        {
            name: 'Tarkarli',
            src: Tarkarli
        },
        {
            name: 'Hawamahal',
            src: hawamahal
        },
        {
            name: 'MysorePalace',
            src: MysorePalace
        },
        {
            name: 'Tajmahal',
            src: Tajmahal
        },
        {
            name: 'Bhimashankar',
            src: Bhimashankar
        },
        {
            name: 'GirGJ',
            src: GirGJ
        },
        {
            name: 'Kaziranga',
            src: Kaziranga
        },
    ];
    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get('/tourInfo', {
                params: {
                    place: props.match.params.id
                }
            }
        ).then((response) => {
            const src = imageSrcs.filter(imageSrc => imageSrc.name === response.data.title.replace(' ', ''))[0].src;
            setInfo({...response.data, src: src});
        })
    }, [setInfo]);

    const bookNowHandler = () => {
        const token = localStorage.getItem('authToken');
        jwt.verify(token, 'secretKey', function (err, decoded) {
            if (err) {
                props.history.push('/Login');
            } else {
                const departDate = info.departureDate.replaceAll('/', '-');
                const pathname = "/BookNow/" + info.adultPrice + "/" + info.childPrice + "/" + info.location + "/" + departDate;
                props.history.push({pathname});
            }
        });
    };

    return (
        <div>
            <h1 className="viewHeading">Tour Details</h1>
            <br></br>
            <div className="viewContainer">
                <div>
                    <img
                        src={info.src}
                        alt="North goa"
                        className="viewImage"
                    />
                </div>

                <div className="viewData">
                    <h2 className="viewDetails">Details...</h2>
                    <br/>
                    <h5>Travel type : {info.type}</h5>
                    <h5>Location : {info.location}</h5>
                    <h5>Price for a adult :{info.adultPrice}</h5>
                    <h5>Price for a child : {info.childPrice}</h5>
                    <h5>Departure date : {info.departureDate}</h5>
                    <h5>Number of days : {info.noOfDays}</h5>
                    <br/>
                    <button className="btn btn-dark" onClick={bookNowHandler}>
                        BOOK NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViewDetails;
