import { AppPropsWithLayout } from "@/utils/types/_app";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps} }: AppPropsWithLayout<any>) {
  // Getting the layouts if there are any, else just the page
  const getLayout = Component.getLayout ?? ((page) => page);

  console.log(session)

  // Returning the layout and page
  return (
    <SessionProvider session={session}>
      {/* Important for Layouts. If we do not have any Layouts then just remove that and just use pagePros i think */}
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
