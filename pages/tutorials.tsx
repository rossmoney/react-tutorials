import type { ReactElement } from "react";
import SidebarLayout from "../src/layouts/sidebar";
import type { NextPageWithLayout } from "./_app";
import routes from "../src/routes/tutorials";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Please select a tutorial from the left.</h1>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <SidebarLayout links={routes}>{page}</SidebarLayout>;
};

export default Page;
