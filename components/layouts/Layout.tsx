import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';

type Props = {
    children?: React.ReactNode,
    title?: string
  };

export const Layout: FC<Props>= ({ children, title }) => {
  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'} </title>
        <meta name='author' content='Stéfano Aymar'/>
        <meta name='description' content={`Información sobre el pokemón ${ title }`}/>
        <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>
    </Head>

    <Navbar />

    <main style={{
        padding:'0px 20px'
    }}>
        { children }
    </main>

    </>
  )
}
