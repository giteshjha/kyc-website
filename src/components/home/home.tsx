import {HomeCarousel} from "./home_carousel";
import {Events} from "../events/events";


export const Home = () => {
    return (
        <div className={"home-container"}>
           <HomeCarousel/>
            <Events/>
        </div>
    )
}