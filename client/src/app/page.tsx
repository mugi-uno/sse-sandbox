import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>
        <Link href="/eventsource" target="_blank">
          EventSource
        </Link>
      </div>
      <div>
        <Link href="/fetch" target="_blank">
          fetch
        </Link>
      </div>
    </>
  );
}
