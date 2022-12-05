import {Carousel} from "antd";
import './home_carousel.css'
import one from './../../assets/home_carousel/1.jpeg';
import two from './../../assets/home_carousel/2.jpeg';
import three from './../../assets/home_carousel/3.jpeg';
import four from './../../assets/home_carousel/4.jpeg';
import five from './../../assets/home_carousel/5.jpeg';

export const HomeCarousel = () => {
    return (
        <div className={"home-carousel-container"}>
            <Carousel autoplay autoplaySpeed={4000}>
                <div>
                   <img src={one} alt={""}/>
                </div>
                <div>
                    <img src={two} alt={""}/>
                </div>
                <div>
                    <img src={three} alt={""}/>
                </div>
                <div>
                    <img src={four} alt={""}/>
                </div>
                <div>
                    <img src={five} alt={""}/>
                </div>
            </Carousel>

            {/*<Carousel autoplay>*/}
            {/*    <div>*/}
            {/*        <h3 style={contentStyle}>1</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3 style={contentStyle}>2</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3 style={contentStyle}>3</h3>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h3 style={contentStyle}>4</h3>*/}
            {/*    </div>*/}
            {/*</Carousel>*/}
        </div>
    )
}