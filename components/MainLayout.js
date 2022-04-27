import Link from "next/link";
import Head from "next/head";
import {reduxWrapper} from "../store/store";
import {getData, getRunningOperationPromises} from "../store/api-reducer";

export function MainLayout({children, title = 'Currency converter'}) {

    return (
        <>
            <Head>
                <title>{title} | converter</title>
                <meta name="keywords" content=""/>
                <meta name="description" content="Currency converter"/>
                <meta charSet="utf-8"/>
            </Head>
            <main>
                {children}
            </main>
        </>

    )
}
