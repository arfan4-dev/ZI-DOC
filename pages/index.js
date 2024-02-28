import Head from 'next/head'
import ZI_Doc from '../components/ZI_Doc'
import Drawer from '../components/MobileScreen'


export default function Home() {


  return (
    <div>
      <Head>
        <title>ZI-DOC@ZIMOGROUP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <main >
     <ZI_Doc/>
    <Drawer/>
      </main>

    
    </div>
  )
}
