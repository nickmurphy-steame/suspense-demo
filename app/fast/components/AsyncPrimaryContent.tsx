import { PrimaryContent } from "@/components/PrimaryContent";
import { getPrimaryContentCount } from "@/data/loaders";

export default async function AsyncPrimaryContent() {
  const count = await getPrimaryContentCount();
  return <PrimaryContent count={count} />;
}
