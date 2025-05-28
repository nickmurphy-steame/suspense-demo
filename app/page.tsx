import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-w-screen-lg w-full justify-between mx-auto h-full items-center">
      <div className="space-y-2 border border-black/10 p-4 rounded-lg">
        <Link className="underline font-bold" href="/slowest" prefetch={false}>
          Take me there the slowest
        </Link>
        <p className="text-gray-700">7 seconds without Suspense</p>
        <p className="text-gray-700 text-sm">Data loading runs sequentially</p>
      </div>
      <div className="space-y-2 border border-black/10 p-4 rounded-lg">
        <Link className="underline font-bold" href="/slow" prefetch={false}>
          Take me there slowly
        </Link>
        <p className="text-gray-700">5 seconds without Suspense</p>
        <p className="text-gray-700 text-sm">Data loading runs in parallel</p>
      </div>
      <div className="space-y-2 border border-black/10 p-4 rounded-lg">
        <Link className="underline font-bold" href="/fast">
          Take me there quickly
        </Link>
        <p className="text-gray-700">5 seconds with Suspense</p>
        <p className="text-gray-700 text-sm">Data loading runs in parallel</p>
      </div>
    </div>
  );
}
