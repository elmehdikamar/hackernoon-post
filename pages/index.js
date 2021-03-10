import Head from 'next/head'
import "tailwindcss/tailwind.css";
import NavBar from '../components/navbar';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hacker Noon</title>
      </Head>
      <NavBar />
    </div>
  )
}
