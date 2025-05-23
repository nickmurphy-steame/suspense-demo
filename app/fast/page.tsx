import { Suspense } from "react";
import { PAGE_DELAY } from "../constants";
import AsyncPrimaryContent from "./components/AsyncPrimaryContent";
import ContentLoading from "./components/ContentLoading";
import AsyncSecondaryContent from "./components/AsyncSecondaryContent";

export default async function FastPage() {
  await new Promise((resolve) => setTimeout(resolve, PAGE_DELAY));

  return (
    <div className="w-full max-w-screen-lg mx-auto grid grid-cols-3 gap-3 items-start">
      <header className="col-span-3">
        <h1>Fast Page</h1>
        <p>This is the fast page.</p>
      </header>
      <div className="col-span-2">
        <Suspense fallback={<ContentLoading count={5} />}>
          <AsyncPrimaryContent />
        </Suspense>
      </div>
      <div className="col-span-1">
        <Suspense fallback={<ContentLoading count={2} />}>
          <AsyncSecondaryContent />
        </Suspense>
      </div>
    </div>
  );
}
