import { SlideshowContainer1, SlideshowContainer2, SlideshowContainer3 } from "./SlideshowContainer.jsx"


export function NinthGrade() {
    return (<div class="subdiv" id="9thGrade">
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
        
    
      </div>)
}

export function TenthGrade() {
    return (<div class="subdiv" id="10thGrade">
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
        <SlideshowContainer2 />
      </div>)}

export function EleventhGrade() {
        return (<div class="subdiv" id="11thGrade">
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
        <SlideshowContainer3 />

    </div>)
      }