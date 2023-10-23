import GoToApp from "./[lang]/components/GoToApp/GoToApp";
import { i18n } from "../i18n-config";

export default function Home() {
    return (
        <main>
            <nav>
                <a href="/ru">ru</a>
                <a href="/en">en</a>
            </nav>
            <GoToApp path={i18n.defaultLocale} />
        </main>
    );
}
