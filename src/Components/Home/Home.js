import React, {useEffect, useState} from "react";
import Card from "../CardUI/CardUi.js";
import NorthGoa from "../../Assets/Beaches/NorthGoa.jpg";
import Ratnagiri from "../../Assets/Beaches/Ratnagiri.jpg";
import Tarkarli from "../../Assets/Beaches/Tarkarli.jpg";
import hawamahal from "../../Assets/Historical/hawamahal.jpg";
import MysorePalace from "../../Assets/Historical/MysorePalace.jpg";
import Tajmahal from "../../Assets/Historical/Tajmahal.jpg";
import Bhimashankar from "../../Assets/WildLife/Bhimashankar.jpg";
import GirGJ from "../../Assets/WildLife/GirGJ.jpg";
import Kaziranga from "../../Assets/WildLife/Kaziranga.jpg";
import ImageSlider from "../Slider/ImageSlider";
import {SliderData} from "../Slider/SliderData";
import TravelCard from "../TravelCard/TravelCard";
import axios from "axios";
import {setToursInfoState} from "../../redux-utilities/actions";
import {connect} from "react-redux";

const Home = (props) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('/toursInfo').then(response => {
            const toursInfo = response.data;
            const info = [
                {
                    imageSrc: MysorePalace,
                    tourInfo: toursInfo[0]
                },
                {
                    imageSrc: NorthGoa,
                    tourInfo: toursInfo[1]
                },
                {
                    imageSrc: Tajmahal,
                    tourInfo: toursInfo[2]
                },
                {
                    imageSrc: GirGJ,
                    tourInfo: toursInfo[3]
                },
                {
                    imageSrc: Kaziranga,
                    tourInfo: toursInfo[4]
                },
                {
                    imageSrc: Bhimashankar,
                    tourInfo: toursInfo[5]
                },
                {
                    imageSrc: Tarkarli,
                    tourInfo: toursInfo[6]
                },
                {
                    imageSrc: hawamahal,
                    tourInfo: toursInfo[7]
                },
                {
                    imageSrc: Ratnagiri,
                    tourInfo: toursInfo[8]
                },
            ]
            props.saveToursInfo(info);
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
        })
    }, [props.saveToursInfo]);

    const data = props.toursInfo.map((item, index) => (
        <div className="col-md-6  col-sm-12 col-lg-4" key={item.tourInfo.title}>
            <Card
                imgsrc={item.imageSrc}
                title={item.tourInfo.title}
                info={item.tourInfo.info}
                index={item.tourInfo.title}
            />
        </div>
    ));
    return !isLoading ? (
        <div>
            <ImageSlider slides={SliderData}></ImageSlider>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">{data}</div>
            </div>
            <TravelCard/>
        </div>
    ) : null;
};

const mapStateToProps = (state) => {
    return {
        toursInfo: state.toursInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveToursInfo: (toursInfo) => {
            return dispatch(setToursInfoState(toursInfo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
