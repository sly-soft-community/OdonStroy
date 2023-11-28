import "../globals.scss";
import Header from "../components/Header/Header";

import { getDictionary } from "../../../get-dictionary";





export default async function RootLayout({ children, params }) {
    return (
        <div className={` page`}>
            {children}
        </div>
    );
}
