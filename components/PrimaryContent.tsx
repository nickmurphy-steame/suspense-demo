import Card from "./ContentCard";

export function PrimaryContent({ count }: { count: number }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4">
      {Array.from({ length: count }, (_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
