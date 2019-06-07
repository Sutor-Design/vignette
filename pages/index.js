import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Link href="/about">
        <button>About</button>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
}
