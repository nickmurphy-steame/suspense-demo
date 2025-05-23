import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";
import { Skeleton } from "../../../components/ui/skeleton";

function ContentCardLoading() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-10 w-full" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-20 w-full" />
      </CardContent>
    </Card>
  );
}

export default function ContentLoading({ count }: { count: number }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      {Array.from({ length: count }, (_, i) => (
        <ContentCardLoading key={i} />
      ))}
    </div>
  );
}
