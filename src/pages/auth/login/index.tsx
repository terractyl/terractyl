import { useRouter } from "next/router"
import { useSession } from "next-auth/react";

export default function LoginPage() {
    const router = useRouter();
    
    // Getting the session
    const { data: session } = useSession()

    // If the user is looged in redirect him to the dashboard
    if (session) return router.push("/dashboard")

    return <div onClick={() => {
        router.push("/api/auth/login")
    }}>
        <h1 className="sm-50">Login using Discord</h1>
    </div>
}