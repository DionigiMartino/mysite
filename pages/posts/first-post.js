import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../Component/Layout/layout'

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>Dionigi Martino de Carles - Post1</title>
            </Head>
            <h1 className="titolo">First Post</h1>
            <Link href="/"><a className="link">Torna indietro</a></Link> 

            {/* <style jsx>{
            `
                .titolo {
                    color: #cc2a41;
                    font-size: 24px;
                }  

                .link {
                    text-decoration: none;
                    color: #3e576b;
                    transition: all .6s;
                }

                .link:hover {
                    color: yellow;
                }
            `
            }</style> */}
        </Layout>
    )
}