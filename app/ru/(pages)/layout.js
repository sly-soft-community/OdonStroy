import "../globals.scss";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";

import { getDictionary } from "../../../get-dictionary";

const inter = Inter({ subsets: ["latin"] });




export default async function RootLayout({ children, params }) {
    return (
        <div className={`${inter.className} page`}>
            {children}
        </div>
    );
}
