// Next & React Imports
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export type AppPropsWithLayout<T> = AppProps & {
  Component: NextPageWithLayout<T>;
};

export type NextPageWithLayout<T> = NextPage<T> & {
  getLayout: (page: ReactElement) => ReactNode;
};
