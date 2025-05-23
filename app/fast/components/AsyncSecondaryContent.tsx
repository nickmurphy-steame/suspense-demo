import { SecondaryContent } from "@/components/SecondaryContent";
import { getSecondaryContentCount } from "@/data/primaryContent";

export default async function AsyncSecondaryContent() {
  const count = await getSecondaryContentCount();
  return <SecondaryContent count={count} />;
}
