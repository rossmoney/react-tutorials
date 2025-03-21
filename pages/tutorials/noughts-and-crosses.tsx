import type { ReactElement } from "react";
import Layout from "../../src/layouts/sidebar";
import type { NextPageWithLayout } from "../_app";
import routes from "../../src/routes/tutorials";

import Game from "../../src/noughts-and-crosses/Game";

const Page: NextPageWithLayout = () => {
  return <Game />;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout links={routes}>{page}</Layout>;
};

export default Page;