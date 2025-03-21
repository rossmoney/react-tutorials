import type { ReactElement } from "react";
import Layout from "../src/layouts/tutorials";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Please select a tutorial from the left.</h1>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
