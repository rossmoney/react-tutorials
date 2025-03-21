import type { ReactElement } from "react";
import Layout from "../../src/layouts/tutorials";
import type { NextPageWithLayout } from "../_app";

import Game from "../../src/noughts-and-crosses/Game";

const Page: NextPageWithLayout = () => {
  return <Game />;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;