import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-w-screen-lg w-full justify-between mx-auto h-full items-center">
      <Link className="underline" href="/slow" prefetch={false}>
        Take me there slowly
      </Link>
      <Link className="underline" href="/fast">
        Take me there fast
      </Link>
    </div>
  );
}
