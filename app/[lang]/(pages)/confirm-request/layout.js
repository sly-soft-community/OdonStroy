import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export default async function RootLayout({ children, params }) {
    return (
        <div className={`${inter.className} page`}>
            {children}
        </div>
    );
}
