import React from 'react';
import {
  About, Blog, Contacts, Education,
  Experience, Landing, Navbar, Projects, Skills
} from '../components';
import BackToTop from '../components/back-to-top/back-to-top';
import ChangeTheme from '../components/change-theme/change-theme';

function HomePage() {

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="./favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="This is Bijen Gurung's Portfolio Website" />
        <link rel="apple-touch-icon" href="./favicon.png" />
        <link rel="manifest" href="./manifest.json" />

        <meta
          name="description"
          content="My name is BIJEN GURUNG. I'm a Front-End Developer based in Kathmandu, Nepal.

          I'm a passionate front-end developer who brings designs to life using HTML, CSS, and JavaScript. With my skills, I create modern, user-friendly interfaces. Constantly learning and adapting to industry trends, I collaborate with designers to implement pixel-perfect layouts and optimize performance. My goal is to make every user interaction memorable and intuitive through clean code and creative problem-solving."
        />
        <meta property="og:image" content="https://i.ibb.co/7ntZk5f/bijen.png" />
        <meta property="og:site_name" content="BIJEN GURUNG's Portfolio" />
        <meta property="og:title" content="Portfolio of BIJEN GURUNG" />
        <meta property="og:url" content="https://bijengurung.com.np/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is BIJEN GURUNG. I'm a Front-End Developer based in Kathmandu, Nepal.

          I'm a passionate front-end developer who brings designs to life using HTML, CSS, and JavaScript. With my skills, I create modern, user-friendly interfaces. Constantly learning and adapting to industry trends, I collaborate with designers to implement pixel-perfect layouts and optimize performance. My goal is to make every user interaction memorable and intuitive through clean code and creative problem-solving."
        />

        <meta itemprop="name" content="Portfolio of BIJEN GURUNG" />
        <meta itemprop="url" content="https://bijengurung.com.np/" />
        <meta
          itemprop="description"
          content="My name is BIJEN GURUNG. I'm a Front-End Developer based in Kathmandu, Nepal.

          I'm a passionate front-end developer who brings designs to life using HTML, CSS, and JavaScript. With my skills, I create modern, user-friendly interfaces. Constantly learning and adapting to industry trends, I collaborate with designers to implement pixel-perfect layouts and optimize performance. My goal is to make every user interaction memorable and intuitive through clean code and creative problem-solving."
        />
        <meta itemprop="thumbnailUrl" content="" />

        <meta
          name="linkedin:url"
          content="https://www.linkedin.com/in/bijen-gurung-b1067618b/"
        />
        <meta name="twitter:title" content="BIJEN GURUNG" />
        <meta
          name="twitter:description"
          content="Hello!
          This is Bijen Gurung, a Front-End Developer working at I.T. Sansaar Pvt. Ltd., Kathmandu, Nepal. 
          I am a professional and passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and am Passionate about Problem Solving. 
          
          Love almost all the stacks of Software Engineering. My current stack includes Nodejs, Nestjs, React, NextJs, Redux, Bootstrap, Ant Design, Material UI, MongoDB, Mysql, PostgreSQL, Firebase, Cloudinary, etc.
          "
        />
        <meta name="twitter:card" content="summary" />

        <title>Portfolio of BIJEN GURUNG</title>
      </head>
      <>
        <BackToTop />
        <Navbar />
        <Landing />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contacts />
        </>
    </>
  )
}

{/*
export async function getStaticProps() {
  const res = await fetch('https://dev.to/api/articles?username=username');
  const data = await res.json();
  const filteredBlogs = data.sort(() => Math.random() - 0.5);

  return {
    props: {
      blogs: filteredBlogs
    },
  };
}
*/}

export default HomePage
