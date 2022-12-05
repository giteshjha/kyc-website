import {HomeCarousel} from "./home_carousel";
import {Events} from "../events/events";
import './home.css'


export const Home = () => {
    return (
        <div className={"home-container"}>
           <HomeCarousel/>
            <div className={"events-header"}>
                <span>Events</span>
            </div>
            <Events/>
        </div>
    )
}