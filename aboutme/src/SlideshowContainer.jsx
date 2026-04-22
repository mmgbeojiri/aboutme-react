import TaikoTitle from "./assets/TaikoTitle.png"
import Taiko from "./assets/Taiko.png"
import Taiko2 from "./assets/Taiko2.png"
import FlappyTitle from "./assets/FlappyTitle.png"
import Flappy from "./assets/Flappy.png"
import FlappyDeath from "./assets/FlappyDeath.png"
import Opendata from "./assets/Opendata.png"
import OpendataResponsive from "./assets/OpendataResponsive.png"
import OpendataInfo from "./assets/OpendataInfo.png"
import OpendataPie from "./assets/OpendataPie.png"
import Japan from "./assets/Japan.png"
import JapanStats from "./assets/JapanStats.png"
import JapanVisit from "./assets/JapanVisit.png"
import DJMLSpawn from "./assets/DJMLSpawn.png"
import DJMLEditor from "./assets/DJMLEditor.png"
import DJMLWater from "./assets/DJMLWater.png"
import DJMLLukas from "./assets/DJMLLukas.png"
import DJMLLukas2 from "./assets/DJMLLukas2.png"
import DJMLEnemy from "./assets/DJMLEnemy.png"
import DJMLUnderGround from "./assets/DJMLUnderGround.png"
import Nightcord from "./assets/Nightcord.png"
import NightcordEdit from "./assets/NightcordEdit.png"

import { useEffect } from "react";



export function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
export function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}
export function showSlides(n, no) {
  let i;
  
  let x = document.getElementsByClassName(slideId[no]);

  if (x.length === 0) {
    console.error("No slides found for slideshow " + slideId[no]);
    return;
  }
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].classList.add("hidden");  
  }
  x[slideIndex[no]-1].classList.remove("hidden");  
}

export function SlideshowContainer1() {
    return (
    <><div className="slideshow-container">
    
          <div className="mySlides1 fade">
            <div className="numbertext">1 / 6</div>
            <img src={TaikoTitle} />
            <div className="text">Title Of Taiko No Tatsujin</div>
          </div>
    
          <div className="mySlides1 fade">
            <div className="numbertext">2 / 6</div>
            <img src={Taiko} />
            <div className="text">Gameplay of Taiko No Tatsujin</div>
          </div>
    
    
          <div className="mySlides1 fade">
            <div className="numbertext">3 / 6</div>
            <img src={Taiko2} />
            <div className="text">Game Over</div>
          </div>
    
          <div className="mySlides1 fade">
            <div className="numbertext">4 / 6</div>
            <img src={FlappyTitle} />
            <div className="text">Flappy Bird Widescreen Project</div>
          </div>
          <div className="mySlides1 fade">
            <div className="numbertext">5 / 6</div>
            <img src={Flappy} />
            <div className="text">Flappy Bird Gameplay</div>
          </div>
          <div className="mySlides1 fade">
            <div className="numbertext">6 / 6</div>
            <img src={FlappyDeath} />
            <div className="text">Flappy Bird Game Over</div>
          </div>
    
          <a className="prev" onClick={plusSlides(-1,0)}>&#10094;</a>
          <a className="next" onClick={plusSlides(1,0)}>&#10095;</a>
        </div>
        <br/>
        <div className="dots">
          <span className="dot" onClick={currentSlide(1, 0)}></span>
          <span className="dot" onClick={currentSlide(2, 0)}></span>
          <span className="dot" onClick={currentSlide(3, 0)}></span>
          <span className="dot" onClick={currentSlide(4, 0)}></span>
          <span className="dot" onClick={currentSlide(5, 0)}></span>
          <span className="dot" onClick={currentSlide(6, 0)}></span>
        </div>
        </>
        )
}

export function SlideshowContainer2() {
    return (
    <><div className="slideshow-container">
    
          <div className="mySlides2 fade">
            <div className="numbertext">1 / 6</div>
            <img src={Opendata} />
            <div className="text">Homepage of Opendata</div>
          </div>
    
          <div className="mySlides2 fade">
            <div className="numbertext">2 / 6</div>
            <img src={OpendataResponsive} />
            <div className="text">Opendata's responsive layout on small devices.</div>
          </div>
    
    
          <div className="mySlides2 fade">
            <div className="numbertext">3 / 7</div>
            <img src={OpendataInfo} />
            <div className="text">Detailed CSS in cards</div>
          </div>
    
          <div className="mySlides2 fade">
            <div className="numbertext">4 / 7</div>
            <img src={OpendataPie} />
            <div className="text">Pie Charts of Opendata</div>
          </div>
          <div className="mySlides2 fade">
            <div className="numbertext">5 / 7</div>
            <img src={Japan} />
            <div className="text">Country Project - Japan</div>
          </div>
          <div className="mySlides2 fade">
            <div className="numbertext">6 / 7</div>
            <img src={JapanStats} />
            <div className="text">Japan Stats</div>
          </div>
  
        <div className="mySlides2 fade">
          <div className="numbertext">7 / 7</div>
          <img src={JapanVisit} />
          <div className="text">Visit Japan</div>
        </div>
    
        <a className="prev" onClick={plusSlides(-1, 1)}>&#10094;</a>
        <a className="next" onClick={plusSlides(1, 1)}>&#10095;</a>
         </div>
      <br/>
    
      <div className="dots">
        <span className="dot" onClick={currentSlide(1, 1)}></span>
        <span className="dot" onClick={currentSlide(2, 1)}></span>
        <span className="dot" onClick={currentSlide(3, 1)}></span>
        <span className="dot" onClick={currentSlide(4, 1)}></span>
        <span className="dot" onClick={currentSlide(5, 1)}></span>
        <span className="dot" onClick={currentSlide(6, 1)}></span>
        <span className="dot" onClick={currentSlide(7, 1)}></span>
      </div>
      </>)
}

export function SlideshowContainer3() {
    

    
    return(<>
    <div className="slideshow-container">
            
              <div className="mySlides3 fade">
                <div className="numbertext">1 / 9</div>
                <img src={DJMLSpawn} />
                <div className="text">Don't Jump In Lava - Spawn</div>
              </div>
              <div className="mySlides3 fade">
                <div className="numbertext">2 / 9</div>
                <img src={DJMLEditor} />
                <div className="text">Features 8 different types of blocks and a Level Editor</div>
              </div>
              <div className="mySlides3 fade">
                <div className="numbertext">3 / 9</div>
                <img src={DJMLWater} />
                <div className="text">Don't Jump In Lava - Animated Water</div>
              </div>
              <div className="mySlides3 fade">
                <div className="numbertext">4 / 9</div>
                <img src={DJMLLukas} />
                <div className="text">One of my own friends designed a level.</div>
              </div>
              <div className="mySlides3 fade">
                <div className="numbertext">5 / 9</div>
                <img src={DJMLLukas2} />
                <div className="text">His Level Continued</div>
              </div>
              <div className="mySlides3 fade">
                <div className="numbertext">6 / 9</div>
                <img src={DJMLEnemy} />
                <div className="text">Don't Jump In Lava - Enemies</div>
              </div>
              <div className="mySlides3 fade">
                <div className="numbertext">7 / 9</div>
                <img src={DJMLUnderGround} />
                <div className="text">Don't Jump In Lava - Underground</div>
              </div>
              <div className="mySlides3 fade">
                <div className="numbertext">8 / 9</div>
                <img src={Nightcord} />
                <div className="text">Nightcord - Messaging Service</div>
              </div>
              <div className="mySlides3 fade">
                <div className="numbertext">9 / 9</div>
                <img src={NightcordEdit} />
                <div className="text">Nightcord - Supports Editing</div>
              </div>
            
            
            
              <a className="prev" onClick={plusSlides(-1, 2)}>&#10094;</a>
              <a className="next" onClick={plusSlides(1, 2)}>&#10095;</a>
            </div>
      <br/>
    
      <div className="dots">
        <span className="dot" onClick={currentSlide(1, 2)}></span>
        <span className="dot" onClick={currentSlide(2, 2)}></span>
        <span className="dot" onClick={currentSlide(3, 2)}></span>
        <span className="dot" onClick={currentSlide(4, 2)}></span>
        <span className="dot" onClick={currentSlide(5, 2)}></span>
        <span className="dot" onClick={currentSlide(6, 2)}></span>
        <span className="dot" onClick={currentSlide(7, 2)}></span>
        <span className="dot" onClick={currentSlide(8, 2)}></span>
        <span className="dot" onClick={currentSlide(9, 2)}></span>
      </div>
      </>)
}

let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"]

