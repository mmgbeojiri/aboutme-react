export function SlideshowContainer1() {
    return (<div class="slideshow-container">
    
          <div class="mySlides1 fade">
            <div class="numbertext">1 / 6</div>
            <img src="TaikoTitle.png" />
            <div class="text">Title Of Taiko No Tatsujin</div>
          </div>
    
          <div class="mySlides1 fade">
            <div class="numbertext">2 / 6</div>
            <img src="Taiko.png" />
            <div class="text">Gameplay of Taiko No Tatsujin</div>
          </div>
    
    
          <div class="mySlides1 fade">
            <div class="numbertext">3 / 6</div>
            <img src="Taiko2.png" />
            <div class="text">Game Over</div>
          </div>
    
          <div class="mySlides1 fade">
            <div class="numbertext">4 / 6</div>
            <img src="FlappyTitle.png" />
            <div class="text">Flappy Bird Widescreen Project</div>
          </div>
          <div class="mySlides1 fade">
            <div class="numbertext">5 / 6</div>
            <img src="Flappy.png" />
            <div class="text">Flappy Bird Gameplay</div>
          </div>
          <div class="mySlides1 fade">
            <div class="numbertext">6 / 6</div>
            <img src="FlappyDeath.png" />
            <div class="text">Flappy Bird Game Over</div>
          </div>
    
          <a class="prev" onclick="plusSlides(-1,0)">&#10094;</a>
          <a class="next" onclick="plusSlides(1,0)">&#10095;</a>
        </div>
        )
}