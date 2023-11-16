import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page not Found",
  description: "404 - Page not Found",
};

export default function NotFound() {
  return (
    <div>
      {" "}
      <div className="content-center">
        <Link href="/">
          <h1 className="content-center">404 - Page not Found</h1>
          <h3>Click here to get back to the homepage</h3>
        </Link>
      </div>
    </div>
  );
}

// TODO: Make the 404 Page better
