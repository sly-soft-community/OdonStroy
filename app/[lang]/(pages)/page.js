'use client'
import Hero from "./components/Hero/Hero";
import styles from "./page.module.scss";
import { getDictionary } from "../../../get-dictionary";
import { i18n } from "../../../i18n-config";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Services from "./components/Services/Services";
import StagesOfWork from "./components/StagesOfWork/StagesOfWork";
import Partners from "./components/Partners/Partners";
import Reviews from "./components/Reviews/Reviews";
import Docs from "./components/Docs/Docs";
import Сontacts from "./components/Сontacts/Сontacts";
import Footer from "@/components/Footer/Footer";
import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";
import Header from "../components/Header/Header";


const pluginWrapper = () => {
    /*
    * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
    */
};


export default function Home({ params: { lang } }) {
    const dictionary = getDictionary(lang);
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
        { component: <Hero goTo={(key) => fullpage_api.moveTo(key + 2)} dictionary={dictionary} /> },
        { component: <AboutCompany /> },
        { component: <Services dictionary={dictionary} /> },
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
        <main className={styles.main}>
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
            {/* <Footer dictionary={dictionary} /> */}
        </main>
    );
}






