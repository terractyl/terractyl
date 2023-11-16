import { AppProps } from "next/app";
import { AppPropsWithLayout } from "@/utils/types/_app";

export default function App({ Component, pageProps }: AppPropsWithLayout<any>) {
    // Getting the layouts if there are any
    const getLayout = Component.getLayout ?? ((page) => page);

    // Returning the layout and page
    return (
        <>
            {getLayout(<Component {...pageProps} />)}
        </>
    )
}