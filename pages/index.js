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
import moment from 'moment';
import RelatedPost from '../components/related_post';


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
        <div id="post-content" className="col-span-5 md:col-span-3 grid grid-cols-1 gap-8 text-xl text-gray-900 leading-loose" dangerouslySetInnerHTML={{ __html: markup ?? '' }}>
        </div>
      )
      +
      ReactDOMServer.renderToString(
        <div className="col-start-1 col-end-6 md:col-start-2 md:col-end-5 mx-auto">
          <Reactions className="my-5 mx-auto" />
        </div>
      )
      +
      ReactDOMServer.renderToString(
        <div className="col-start-1 col-end-6 md:col-start-2 md:col-end-5">
          <AuthorAd />
        </div>
      )

  }

  const getProfileInfo = () => {
    return <div className="col-span-5 md:col-span-1 flex flex-col items-start text-sm">
      <img className="w-12 h-12 ring-4 ring-gray-300" src={post?.profile?.avatar} />
      <a className="mt-5 font-mono font-semibold border-b-4 border-limegreen-300 hover:border-0 hover:border-brand hover:bg-brand" href="#">@{post?.profile?.handle}</a>
      <span className="text-gray-700 font-mono font-semibold mt-1">{post?.profile?.displayName}</span>
      <p className="mt-5 text-base">{post?.profile?.bio}</p>
      <div className="flex flex-row space-x-2 mt-4">
        {post?.profile?.twitter && <a className="text-limegreen-600" href={`https://twitter.com/${post.profile.twitter}`}><i className="fab fa-twitter fa-lg"></i></a>}
        {post?.profile?.github && <a className="text-limegreen-600" href={`https://github.com/${post.profile.github}`}><i className="fab fa-github fa-lg"></i></a>}
        {post?.profile?.youtube && <a className="text-limegreen-600" href={`https://www.youtube.com/channel/${post.profile.youtube}`}><i className="fab fa-youtube fa-lg"></i></a>}
      </div>
    </div>
  }

  return (
    <div>
      <Head>
        <title>{post?.title ? `${post.title} | Hacker Noon` : 'Hacker Noon'}</title>
        <link href="/assets/css/styles.css" rel="stylesheet" />
        <link href="/assets/fa/css/all.css" rel="stylesheet" />
      </Head>
      <NavBar postTitle={post?.title} postAuthor={post?.profile?.handle} />

      {isLoading
        ?
        <div className="w-screen h-screen flex items-center justify-center">
          <ClipLoader size={45} color='#02FE01' />
        </div>
        :
        //post &&
        <div className="flex flex-col pt-5 px-4 mx-auto max-w-screen-xl">
          <h1 className="leading-normal font-mono text-4xl font-semibold text-gray-800 sm:text-center">{post?.title}</h1>
          <div className="flex flex-wrap">
            <div className="flex flex-row  w-full sm:w-auto items-center mt-6">
              <div className="flex flex-row flex-1 space-x-3 items-center text-sm">
                <p>{moment.unix(post?.publishedAt).format('MMMM Do YYYY')}</p>
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
            <Reactions total={post?.reactions?.total} className="w-full sm:w-auto mt-6 justify-end sm:flex-1" />
            <img className="w-full h-auto mt-5" src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-g6aq337h.jpeg" />
            <div className="w-full grid grid-cols-5 gap-10 mt-10" dangerouslySetInnerHTML={{ __html: injectProfileInfo(post?.markup) }}></div>
          </div>
          <LineTitle className="mt-10" title="RELATED" />
          <div className="grid grid-cols-3 gap-8 mt-8">
            {post?.relatedStories && post?.relatedStories.map((post) => <RelatedPost post={post} />)}
          </div>
          <LineTitle className="mt-10 max-w-2xl mx-auto" title="TAGS" />
          <div className="flex flex-wrap justify-center mt-8 max-w-2xl mx-auto">
            {
              post?.tags && post.tags.map((tag) => <TagItem title={`#${tag}`} />)
            }
          </div>
          <div className="flex flex-col items-center mt-20 text-center">
            <a href="#" className="bg-gray-900 hover:bg-gray-800 py-3 px-5 text-brand text-3xl hover:text-4xl font-bold font-mono border-4 border-brand">Join Hacker Noon</a>
            <p className="text-gray-600 mt-5 font-mono text-sm">Create your free account to unlock your custom reading experience.</p>
          </div>
        </div>}
      <Footer />
    </div>
  )
}
