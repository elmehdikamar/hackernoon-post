import Head from 'next/head'
import { useEffect, useState } from 'react';
import "tailwindcss/tailwind.css";
import NavBar from '../components/navbar';
import { ClipLoader } from 'react-spinners'
import ReactDOMServer from 'react-dom/server'
import Reactions from '../components/reactions';
import AuthorAd from '../components/author_ad';
import LineTitle from '../components/line_title';
import TagItem from '../components/tag_item';
import FooterLink from '../components/footer_link';
import Footer from '../components/footer';


export default function Home() {

  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(async () => {
    setIsLoading(true)
    const response = await fetch('/api/article')
    if (response.status == 200) {
      const data = await response.json()
      setPost(data)
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [])

  const injectProfileInfo = (markup) => {
    return ReactDOMServer.renderToString(getProfileInfo())
      +
      ReactDOMServer.renderToString(
        <div id="post-content" className="col-span-5 md:col-span-3 grid gap-8 text-xl text-gray-900 leading-loose" dangerouslySetInnerHTML={{ __html: markup ?? '' }}>
        </div>
      )
      +
      ReactDOMServer.renderToString(
        <div className="col-start-2 col-end-5">
          <AuthorAd />
        </div>
      )

  }

  const getProfileInfo = () => {
    return <div className="col-span-5 md:col-span-1 flex flex-col items-start text-sm">
      <img className="w-12 h-12 ring-4 ring-gray-300" src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg" />
      <a className="mt-5 font-mono font-semibold border-b-4 border-limegreen-300 hover:border-0 hover:border-brand hover:bg-brand" href="#">@codebucks</a>
      <span className="text-gray-700 font-mono font-semibold mt-1">CodeBucks</span>
      <p className="mt-5 text-base">Helping you to learn code! here you'll find tutorials around web development. Keep Coding...😜</p>
      <div className="flex flex-row space-x-2 mt-4">
        <a className="w-5 h-5 text-limegreen-600" href="#">
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a className="w-5 h-5 text-limegreen-600" href="#">
          <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
      </div>
    </div>
  }

  return (
    <div>
      <Head>
        <title>Hacker Noon</title>
        <link href="/assets/css/styles.css" rel="stylesheet" />
        <link href="/assets/fa/css/all.css" rel="stylesheet" />
      </Head>
      <NavBar />

      {isLoading
        ?
        <div className="w-screen h-screen flex items-center justify-center">
          <ClipLoader size={45} color='#02FE01' />
        </div>
        :
        //post &&
        <div className="flex flex-col pt-5 px-4 mx-auto max-w-screen-xl">
          <h1 className="leading-normal font-mono text-4xl font-semibold text-gray-800 sm:text-center">Step by Step Guide to Create 3 Different Types of Loading Screens in React</h1>
          <div className="flex flex-wrap">
            <div className="flex flex-row  w-full sm:w-auto items-center mt-6">
              <div className="flex flex-row flex-1 space-x-3 items-center text-sm">
                <p>February 21st 2021</p>
                <button className="flex flex-row items-center bg-gray-100 py-1 px-2 space-x-1" type="button">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>323 reads</span>
                </button>
              </div>
              <button className="w-5 h-5 text-black ml-2" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
            <Reactions className="w-full sm:w-auto mt-6 justify-end sm:flex-1" />
            <img className="w-full h-auto mt-5" src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-g6aq337h.jpeg" />
            <div className="w-full grid grid-cols-5 gap-10 mt-10" dangerouslySetInnerHTML={{ __html: injectProfileInfo(post?.markup) }}></div>
          </div>
          <Reactions className="mt-5 mx-auto" />
          <LineTitle className="mt-10" title="RELATED" />
          <LineTitle className="mt-10" title="TAGS" />
          <div className="flex flex-wrap justify-center mt-8">
            <TagItem title='#react' />
            <TagItem title='#react' />
            <TagItem title='#react' />
            <TagItem title='#react' />
            <TagItem title='#react' />
            <TagItem title='#react' />
          </div>
          <div className="flex flex-col items-center mt-10 text-center">
            <a href="#" className="bg-gray-900 hover:bg-gray-800 py-3 px-5 text-brand text-3xl hover:text-4xl font-bold font-mono border-4 border-brand">Join Hacker Noon</a>
            <p className="text-gray-600 mt-5 font-mono text-sm">Create your free account to unlock your custom reading experience.</p>
          </div>
        </div>}
      <Footer />
    </div>
  )
}
