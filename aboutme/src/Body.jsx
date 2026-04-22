import "./App.css"
import {Table} from "./Table.jsx"
import {List} from "./List.jsx"
import { SlideshowContainer1 } from "./SlideshowContainer.jsx"
export function Body() {
    return (
    <main>
    <div id="music">
      <h1>Music</h1>
      <p>I've grown passionate of not only making music using digital audio workstations (DAWs) but playing instruments as well.</p>
      <p>I play the bass guitar, piano, and guitar.</p>
      <p>I use LMMS (Linux Multimedia Studio) as my audio workstation to make my music. I tend to create rock and pop songs that are well energized and I have been inspired by the Japanese genre in my works.</p>
      <p>I own a 37-key AKAI MPK midi controller to create my music. I do like to test out riffs and create solos using it.</p>
      <p>My favorite genre is J-rock, and I usually listen to classic rock from the 80s and 90s. I also like pop classics.</p>
    </div>

    <div id="games">
      <h1>Games</h1>
      <p>I love games. I play them all the time. I have Steam, Epic Games, Battle.net, as well as a Xbox and Playstation network.</p>
      <p>Currently, I love playing Resident Evil and Call of Duty: Zombies</p>
      <p>My favorite game is The Last Of Us Part 1.</p>
      <p>I do love collecting videogames. Once I get one entry in a series, I feel compelled to get them all.</p>
      <p>I even spent the months of September and October 2024 saving up to build my own gaming computer. I spent 800 dollars on it.</p>
      <Table />
      
    </div>

    <div id="computers">
      <h1>Computers</h1>
      <p>Ever since 2016, I've been facinated with computers at a young age and always yearned to learn more information about them.</p>
    
    <p>I am proficent in the following languages.</p>
    <List />
    </div>
    <div id="projects">
      <h1>Projects</h1>
      <div class="subdiv" id="9thGrade">
        <h2>9th Grade</h2>
        <p>In ninth grade, I created many projects using Python.</p>
        <p>By the early days, I had trouble picking up the language due to my background in C++ already, but I began to pick
          up on game development very quick.</p>
        <p>A big project that I made was a port of the game Taiko No Tatsujin, a japanese rhythm game primarily played in
          arcades on the drums.</p>
        <p>The most impressive thing about this project is the fact that it is compatible with exiting Taiko maps.</p>
        <p>I also made a 4-player version of Flappy Bird, where birds can jump in by pressing "Q", "P", "Z", and "M".</p>
        <p>It was my first interaction with multiplayer technology and was the time when I didn't know about object oriented
          programming, so I had to add every bird myself.</p>
        <p>There are 4 different colors, Yellow, Blue, Pink, and Green to differeniate between the four players.</p>
        <SlideshowContainer1 />
        <br/>
        <div class="dots">
          <span class="dot" onclick="currentSlide(1, 0)"></span>
          <span class="dot" onclick="currentSlide(2, 0)"></span>
          <span class="dot" onclick="currentSlide(3, 0)"></span>
          <span class="dot" onclick="currentSlide(4, 0)"></span>
          <span class="dot" onclick="currentSlide(5, 0)"></span>
          <span class="dot" onclick="currentSlide(6, 0)"></span>
        </div>
    
      </div>
    
      <div class="subdiv" id="10thGrade">
        <h2>10th Grade</h2>
        <p>In tenth grade, I created projects using HTML, and this was the first time I dabbled in full stack development.
        </p>
        <p>By this time, I selftaught myself React, Tailwind, and Typescript to build my tech stack to create visually
          appealing websites.</p>
        <p>I used vite to create the boilerplate and wrote my servers using Express.js. I was a large fan of the "MERN"
          stack during this time. (MongoDB, Express, React, Node.js)</p>
        <p>A project I made was called "Opendata.com", which sorted 311 Service Requests from 2010 to Present.</p>
        <p>It was written in React and taught me a lot about deployment, and responsive web design. I could easily access
          this website on my phone using Github Pages.</p>
        <p>This was also the first time I made a messaging service internally called "yappingdb" as a project.</p>
        <p>It was nothing special to look at, but it was very influential and my first time using a database in production.
        </p>
        <p>This project taught me about the full stack a client and server sends to each other.</p>
        <p>The client sends a post request to the server which adds to the database, and the server sends back a response
          that the client obtains.</p>
          <p>I also made a project about Japan and its culture. This was really more of a CSS challenge than anything else.</p>
        <div class="slideshow-container">
    
          <div class="mySlides2 fade">
            <div class="numbertext">1 / 6</div>
            <img src="Opendata.png" />
            <div class="text">Homepage of Opendata</div>
          </div>
    
          <div class="mySlides2 fade">
            <div class="numbertext">2 / 6</div>
            <img src="OpendataResponsive.png" />
            <div class="text">Opendata's responsive layout on small devices.</div>
          </div>
    
    
          <div class="mySlides2 fade">
            <div class="numbertext">3 / 7</div>
            <img src="OpendataInfo.png" />
            <div class="text">Detailed CSS in cards</div>
          </div>
    
          <div class="mySlides2 fade">
            <div class="numbertext">4 / 7</div>
            <img src="OpendataPie.png" />
            <div class="text">Pie Charts of Opendata</div>
          </div>
          <div class="mySlides2 fade">
            <div class="numbertext">5 / 7</div>
            <img src="Japan.png" />
            <div class="text">Country Project - Japan</div>
          </div>
          <div class="mySlides2 fade">
            <div class="numbertext">6 / 7</div>
            <img src="JapanStats.png" />
            <div class="text">Japan Stats</div>
          </div>
  
        <div class="mySlides2 fade">
          <div class="numbertext">7 / 7</div>
          <img src="JapanVisit.png" />
          <div class="text">Visit Japan</div>
        </div>
    
        <a class="prev" onclick="plusSlides(-1, 1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1, 1)">&#10095;</a>
         </div>
      <br/>
    
      <div class="dots">
        <span class="dot" onclick="currentSlide(1, 1)"></span>
        <span class="dot" onclick="currentSlide(2, 1)"></span>
        <span class="dot" onclick="currentSlide(3, 1)"></span>
        <span class="dot" onclick="currentSlide(4, 1)"></span>
        <span class="dot" onclick="currentSlide(5, 1)"></span>
        <span class="dot" onclick="currentSlide(6, 1)"></span>
        <span class="dot" onclick="currentSlide(7, 1)"></span>
      </div>
      </div>
      
    

   
    
    <div class="subdiv" id="11thGrade">
      <h2>11th Grade</h2>
      <p>In eleventh grade, I created projects using Java.</p>
      <p>I had experience with the syntax since it was similar to C++, so I was able to make great projects.</p>
      <p>A passion project I worked on while still in school from October 23rd to Feburary 11th was a game called "Don't Jump In Lava".</p>
      <p>It's an platformer with a level editor and many different types of blocks I drew myself.</p>
      <p>It was a port of a scratch tutorial made by Griffpatch called the "Tile Scrolling Platformer", but I made the
        entire graphics myself, including the basics of what is drawn on the screen.</p>
      <p>Some assets were reused from an eariler project I made back before highschool where I was trying to make a <a href="https://scratch.mit.edu/projects/818095183/">Sonic fan game.</a></p>
      <p>The game was a homage to the first game I ever made of the same name and premise, but very choppy and laggy over 8
        years ago.</p>
      <p>I primarily worked on it for the first semester of the year, familiarizing myself with translation, object oriented
        programming, graphical pipelines, and debugging.</p>
      <p>The next project I made in 11th Grade is an app called "Nightcord".</p>
      <p>It's essentially another messaging service with the backend in Java.</p>
      <p>Similar to yappingdb, it uses CRUD methods, but it uses an SQL database instead.</p>
      <p>This project was made without React because originally it was going to be displayed from the server itself, meaning
        I needed to make everything in one file.</p>
      <p>Currently, the project is now seperated into a client section and a server section, but I do not wish to refactor
        everything espeically at this completion.</p>
      <p>It supports sending, auto-recieving messages, editing with a notifer, and the deleting of messages.</p>
            <div class="slideshow-container">
            
              <div class="mySlides3 fade">
                <div class="numbertext">1 / 9</div>
                <img src="DJMLSpawn.png" />
                <div class="text">Don't Jump In Lava - Spawn</div>
              </div>
              <div class="mySlides3 fade">
                <div class="numbertext">2 / 9</div>
                <img src="DJMLEditor.png" />
                <div class="text">Features 8 different types of blocks and a Level Editor</div>
              </div>
              <div class="mySlides3 fade">
                <div class="numbertext">3 / 9</div>
                <img src="DJMLWater.png" />
                <div class="text">Don't Jump In Lava - Animated Water</div>
              </div>
              <div class="mySlides3 fade">
                <div class="numbertext">4 / 9</div>
                <img src="DJMLLukas.png" />
                <div class="text">One of my own friends designed a level.</div>
              </div>
              <div class="mySlides3 fade">
                <div class="numbertext">5 / 9</div>
                <img src="DJMLLukas2.png" />
                <div class="text">His Level Continued</div>
              </div>
              <div class="mySlides3 fade">
                <div class="numbertext">6 / 9</div>
                <img src="DJMLEnemy.png" />
                <div class="text">Don't Jump In Lava - Enemies</div>
              </div>
              <div class="mySlides3 fade">
                <div class="numbertext">7 / 9</div>
                <img src="DJMLUnderGround.png" />
                <div class="text">Don't Jump In Lava - Underground</div>
              </div>
              <div class="mySlides3 fade">
                <div class="numbertext">8 / 9</div>
                <img src="Nightcord.png" />
                <div class="text">Nightcord - Messaging Service</div>
              </div>
              <div class="mySlides3 fade">
                <div class="numbertext">9 / 9</div>
                <img src="NightcordEdit.png" />
                <div class="text">Nightcord - Supports Editing</div>
              </div>
            
            
            
              <a class="prev" onclick="plusSlides(-1, 2)">&#10094;</a>
              <a class="next" onclick="plusSlides(1, 2)">&#10095;</a>
            </div>
      <br/>
    
      <div class="dots">
        <span class="dot" onclick="currentSlide(1, 2)"></span>
        <span class="dot" onclick="currentSlide(2, 2)"></span>
        <span class="dot" onclick="currentSlide(3, 2)"></span>
        <span class="dot" onclick="currentSlide(4, 2)"></span>
        <span class="dot" onclick="currentSlide(5, 2)"></span>
        <span class="dot" onclick="currentSlide(6, 2)"></span>
        <span class="dot" onclick="currentSlide(7, 2)"></span>
        <span class="dot" onclick="currentSlide(8, 2)"></span>
        <span class="dot" onclick="currentSlide(9, 2)"></span>
      </div>

    </div>
    </div>

   
    </main>
    )
}