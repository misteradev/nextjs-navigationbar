import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/navbar'

export default function index() {
  return (
    <>
    <Head>
        <title>Homepage | misteradev</title>
        <meta name='homepage' content='my home page'/>
    </Head>
    <div>
        <Navbar />
    </div>
    </>
  )
}
