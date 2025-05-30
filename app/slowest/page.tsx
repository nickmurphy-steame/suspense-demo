import { PrimaryContent } from "@/components/PrimaryContent";
import { PAGE_DELAY } from "../constants";
import {
  getPrimaryContentCount,
  getSecondaryContentCount,
} from "@/data/loaders";
import { SecondaryContent } from "@/components/SecondaryContent";

export default async function SlowPage() {
  await new Promise((resolve) => setTimeout(resolve, PAGE_DELAY));
  const primaryCount = await getPrimaryContentCount();
  const secondaryCount = await getSecondaryContentCount();

  return (
    <div className="w-full max-w-screen-lg mx-auto grid grid-cols-3 gap-3 items-start">
      <header className="col-span-3">
        <h1>Slowest Page</h1>
        <p>This is the slowest page.</p>
      </header>
      <div className="col-span-2">
        <PrimaryContent count={primaryCount} />
      </div>
      <div className="col-span-1">
        <SecondaryContent count={secondaryCount} />
      </div>
    </div>
  );
}
