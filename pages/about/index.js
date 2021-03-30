import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import MainLayout from '../../components/mainLayout';

const linkClickHandler = () =>{
    Router.push('/')
}

function About(){
    return (
        <MainLayout>
            <Head>
                <title> my page Title </title>
                <meta name='keywords' content='next,javascript' />
                <meta charSet='utf-8' />
            </Head>
            <div>
                <h1>About Page</h1>
                <button onClick={linkClickHandler}>Go back to Home</button>
                <button onClick={()=> Router.push('/posts')}>Go to Posts</button>
            </div>
        </MainLayout>
    )
}

export default About