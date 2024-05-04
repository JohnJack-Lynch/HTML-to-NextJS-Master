import React from 'react';
/* import './index.css'; */
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="container">
            <header>
              <div className="container">
                <div id="branding">
                  <h1>John "Jack" Lynch</h1>
                </div>
                <nav>
                  <u1>
                    <li className="current"><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/work">Work</Link></li>
                  </u1>
                </nav>
              </div>
            </header>

      <section id="showcase">
        <div className="container">
          <h1>Yup, that's me.</h1>
          <p>Video Editor - Artist - Programmer</p>
        </div>
      </section>


      <section id="boxes">
        <div className="container">
                    <div className="box">
                      <Image src="/img/randimg/sophie-mandi.jpg" alt="Photography" width={400} height={250}/>  {/* Added alt text for accessibility */}
                      <h3>Photography</h3>
                      <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
                    </div>

          <div className="box">
          <Image src="/img/randimg/logo.jpg" alt="Graphic Design" width={400} height={75} />  {/* Added alt text for accessibility */}
            <h3>Graphic Design</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>

          <div className="box">
            <Image src="/img/randimg/JaySunset (0-00-00-00).jpg" alt="Animation & Compositing" width={400} height={225} />  {/* Added alt text for accessibility */}
            <h3>Animation & Compositing</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Jack Lynch, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Home;
