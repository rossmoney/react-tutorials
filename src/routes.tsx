import tutorials from "./routes/tutorials";
import { LinksSimple } from "./types"

interface Route {
    href: string;
    text: string;
}

const routes: Array<{ category: string; entries: LinksSimple }> = [
    { category: 'Tutorials', entries: tutorials },
    { category: 'Challenges', entries: [] },
];

export default routes;
