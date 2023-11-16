import { withAuth } from 'next-auth/middleware'

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

export const config = { matcher: ["/dashboard"] }; 