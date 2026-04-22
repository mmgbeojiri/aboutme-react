import "./App.css"
import {Table} from "./Table.jsx"
import {List} from "./List.jsx"
import { NinthGrade, TenthGrade, EleventhGrade } from "./Grades.jsx"
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
      <NinthGrade />
      <TenthGrade />
      <EleventhGrade />

    </div>

   
    </main>
    )
}