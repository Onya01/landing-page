import Rate from '../components/Rate'
import Head from 'next/head'
import Enroll from '../components/Enroll'
import Header from '../components/Header'
import Homepage from '../components/Homepage'
import Logo from '../components/Logo'
import Rated from '../components/Rated'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Bamyx - landing page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Logo />
        <Homepage />
        <Enroll />
        {/* <Rate /> */}
        <Rated />
      </main>

      <footer>
      </footer>
    </div>
  )
}
