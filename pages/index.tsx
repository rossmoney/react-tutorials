import * as React from "react";
import type { ReactElement } from "react";
import BaseLayout from "../src/layouts/base";
import type { NextPageWithLayout } from "./_app";
import routes from "../src/routes";
import LinkList from "../src/LinkList";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <div className="max-w-[300px] w-full space-y-6 px-4">
        <nav className="rounded-3xl border border-gray-200 p-6 space-y-4">
          <p className="leading-6 text-gray-700 text-center">
            What&apos;s next?
          </p>
          <LinkList links={routes} />
        </nav>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Page;
