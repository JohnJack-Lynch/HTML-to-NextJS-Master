import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container">
      <header>
        <div className="container">
          <div id="branding">
            <h1>John "Jack" Lynch</h1>
          </div>
          <nav>
            <u1>
              <li><Link href="/">Home</Link></li>
              <li className="current"><Link href="/about">About</Link></li>
              <li><Link href="/work">Work</Link></li>
            </u1>
          </nav>
        </div>
      </header>

      <section id="main">
        <div className="container">
          <article id="main-col">
            <h1 class="page-title">About</h1>
            <p>John "Jack" Lynch is a Computer Science student at Roger Williams University with Minors in Film, Animation, & Video and Graphic Design.</p>
        
            <p>
              Integer nibh libero, aliquet eu lorem tincidunt, finibus semper diam. In id tellus nulla. Fusce vitae erat eleifend, ullamcorper nunc non, dapibus neque. Duis consequat dignissim egestas. Maecenas sollicitudin feugiat tristique. Nulla nec mauris ornare nisl gravida egestas. Vestibulum condimentum sapien suscipit nisi vehicula dapibus. In hac habitasse platea dictumst.
            </p>
          </article>
        </div>
      </section>

      <footer>
        <p>Jack Lynch, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default About;