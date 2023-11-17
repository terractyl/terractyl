import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server';

/*export default withAuth(
    async (req, res) => console.log("authenticated?"),
    {
        callbacks: {
            authorized: ({ token }) => {
                console.log(token)
                return token ? true : false
            }
        },
    },
);*/

// TODO: ADD get session token endpoint
// TODO: CAuse we use database instead of just JWT tokens

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/auth") return NextResponse.redirect("/auth/login") 
}

export const config = { matcher: ["/dashboard"] }; 