import Topo from "../components/topo"
import Service from "../components/service"
import About from "../components/about"
import Download from "../components/download"
import Head from "next/head"

export default function home(){
    return(
        <>

        <Head>
            <title> Projeto 1 - Landing page </title>
        </Head>

        <main>
            <Topo />
            <Service />
            <About />
            <Download />
        </main>

        </>
    )
}