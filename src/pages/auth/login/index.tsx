import "./index.css";

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  // Getting the session
  const { status } = useSession();

  if (typeof window !== "undefined") {
    if (status === "authenticated") {
      router.push("/dashboard");
    } else if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  } else {
    return (
      <div id="redirect-container" className="redirect-container">
        <h1 className="redirect-text">Redirecting you...</h1>
        <div className="pwfillme">
          <div className="pwfillme_line"></div>
        </div>
      </div>
    );
  }
}
