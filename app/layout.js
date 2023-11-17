import { GoogleAnalytics } from "./analytics/GoogleAnalytics";
import SuperModalBox from "@/components/SuperModalBox/SuperModalBox"

export const metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
};

export default async function RootLayout({ children, params }) {
    return (
        <html lang={params.lang ? params.lang : "ru"}>
            <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
            <body className="page">
                {/* <SuperModalBox /> */}
                {children}
            </body>
        </html>
    );
}
