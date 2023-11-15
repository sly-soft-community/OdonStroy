'use client'
import Hero from "../Hero/Hero";
import AboutCompany from "../AboutCompany/AboutCompany";
import Services from "../Services/Services";
import StagesOfWork from "../StagesOfWork/StagesOfWork";
import Partners from "../Partners/Partners";
import Reviews from "../Reviews/Reviews";
import Docs from "../Docs/Docs";
import Сontacts from "../Сontacts/Сontacts";
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";
import Header from "../../../components/Header/Header";


const pluginWrapper = () => {
    /*
    * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
    */
};




export default function LandingContant() {
    const [isFirstBlock, setIsFirstBlock] = useState(true)

    const onLeave = (origin, destination, direction) => {
        console.log("onLeave", { origin, destination, direction });
        if (origin.isFirst) {
            setIsFirstBlock(false)
        }
        if (destination.isFirst) {
            setIsFirstBlock(true)
        }
    }
    const originalPages = [
        { component: <Hero goTo={(key) => fullpage_api.moveTo(key + 2)} /> },
        { component: <AboutCompany /> },
        { component: <Services  /> },
        { component: <StagesOfWork /> },
        {
            component: <>
                <Reviews />
                <Partners />
            </>
        },
        { component: <Docs /> },
        { component: <Сontacts /> },
    ];



    return (
        <main>
            <Header goTo={(key) => fullpage_api.moveTo(key + 2)} isFirstBlock={isFirstBlock} />
            <ReactFullpage
                navigation
                pluginWrapper={pluginWrapper}
                onLeave={onLeave}
                scrollHorizontally={true}
                render={() =>
                    console.log("render prop change") || (
                        <ReactFullpage.Wrapper>
                            {originalPages.map((item, key) => (
                                <div key={key} className="section">
                                    {item.component}
                                </div>
                            ))}
                        </ReactFullpage.Wrapper>
                    )
                }
            />
        </main>
    );
}





