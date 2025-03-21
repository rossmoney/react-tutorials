import type { ReactElement } from "react";
import SidebarLayout from "../../src/layouts/sidebar";
import type { NextPageWithLayout } from "../_app";
import routes from "../../src/routes/tutorials";

import Game from "../../src/tutorials/noughts-and-crosses/Game";

const Page: NextPageWithLayout = () => {
  return <Game />;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout links={routes}>{page}</SidebarLayout>;
};

export default Page;