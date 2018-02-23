<template>
  <div class="portrait">
    <div class="portrait__intro-bg portrait-jeremiasz">
      <img class="portrait__intro-gif" src="../assets/img/mask-j.gif" alt="masque de super héro de Michael">
      <div class="portrait__intro-bg-overlay"></div>
    </div>
    <div class="portrait-container">
      <div class="portrait__intro is-scrolling">
        <div class="portrait__slider-title">
          <div class="portrait__slider-nickname-container">
            <div class="dash"></div>
            <span class="portrait__slider-nickname">&laquo; Le militant &raquo;</span>
          </div>
          <h1>Michael Jeremiasz</h1>
          <div class="portrait-quote">« Je ne me limite pas aux limites que la société me fixe »</div>
          <div class="dash dash-under"></div>
        </div>
        <div class="portrait__slider-subtitle">
          <p>Tennis</p>
        </div>
        <div class="portrait__medal">
          <h3>médailles mondiales</h3>
          <div class="portrait__medal-medals">
            <div class="portrait__medal-medals-group">
              <p class="medals-nb">1</p>
              <img src="../assets/img/m-daille-gold.svg" alt="1 médaille d'or">
            </div>
            <div class="portrait__medal-medals-group">
              <p class="medals-nb">1</p>
              <img src="../assets/img/m-daille-silver.svg" alt="1 médaille d'argent">
            </div>
            <div class="portrait__medal-medals-group">
              <p class="medals-nb">2</p>
              <img src="../assets/img/m-daille-bronze.svg" alt="2 médailles de bronze">
            </div>
          </div>
        </div>
        <div class="portrait__titles">
          <h3>8 titres</h3>
          <p class="portrait__titles-title">Victoire à l’Open d’Australie en double messieurs</p>
          <p class="portrait__titles-title">Victoire à l’US Open en double messieurs</p>
          <p class="portrait__titles-title">Victoire à Wimbledon en double messieurs</p>
          <p class="portrait__titles-title">Victoire à Rolland-Garros en double messieurs</p>
          <p class="portrait__titles-title">Victoire à Wimbledon en double messieurs</p>
          <p class="portrait__titles-title">Victoire à Rolland-Garros en double messieurs</p>
          <p class="portrait__titles-title">Victoire à l’US Open en double messieurs</p>
          <p class="portrait__titles-title">Victoire à l’US Open en double messieurs</p>
        </div>
      </div>
    </div>
    <div class="portrait-container">
      <div class="portrait__part1">
        <h3>La victoire</h3>
        <p>
          En 2005, à 24 ans, Michaël Jérémiasz est le nouveau numéro un mondial du tennis handisport lors sa victoire de l'US Open après seulement cinq années de pratique du tennis en fauteuil.
          Jérémiasz est devenu le meilleur de son sport «qui n'a rien à voir avec l'autre
          tennis ».
        </p>
      </div>
      </div>
    <div class="portrait__part1-image"></div>
    <div class="portrait-container">
        <div class="portrait__part-text-block">
          <p class="portrait__part-text">Numéro 1 mondial en double en 2004 et simple en 2005.
Il remporte quatre médailles lors des Jeux Paralympiques de 2004, 2008 et 2012, dont une en OR en double ainsi que 7 titres du Grand Chelem en double.
          </p>
          <p class="portrait__part-text">
          En 2007, il remporte avec Stéphane Houdet son premier Roland-Garros ainsi que le Masters de double.
Sa saison 2008 ressemble beaucoup à la précédente, il devient cependant médaillé d'or aux Jeux paralympiques de Pékin avec Houdet, soit le titre le plus important de sa carrière.
          </p>
        </div>
      </div>
        <div class="portrait__part-video">
          <youtube :video-id="videoId1" ref="youtube" :player-vars="playerVars" @playing="playing"></youtube>
          <!-- <div class="portrait__part1-video-youtube">
            <img class="portrait__part1-video-youtube-controls" src="../assets/img/play.svg" alt="play video">
          </div> -->
        </div>
      <div class="portrait-container">
        <div class="portrait__part-text-block">
          <p class="portrait__part-text">
            En 2016, il annonce qu'il dispute son dernier Roland-Garros et ses derniers Jeux paralympiques et qu'il mettra un terme à sa carrière au mois de novembre.
          </p>
        </div>
      </div>

    <div class="portrait-container">
      <div class="portrait__part2">
        <h3>L'obstacle</h3>
        <p class="portrait__part-text">
          Le 7 février 2000, alors qu'il est en vacances  sauter à Avoriaz avec son frère et leur meilleur ami, il est victime d'un accident de ski. Après avoir pris beaucoup de vitesse, il prend une bosse très raide et décolle de 6 à 8m de haut. Il perd connaissance en vol et chute une dizaine de mètres plus bas.
        </p>
        <p class="portrait__part-text">
          Transporté à l’hôpital international de Genêves, il est opéré durant 9h de la colonne vertébrale et du fémur, le verdict : une paraplégie incomplète.
        </p>
      </div>
    </div>

    <div class="portrait__part2-image"></div>

    <div class="portrait-container">
      <div class="portrait__part-text-block">
        <p class="portrait__part-text">
          « À la suite d’un accident de la vie, le sport peut aider les personnes handicapées dans leurs parcours de reconstruction physique, psychologique et sociale »
        </p>
        <p class="portrait__part-text">
          À peine un an après sa sortie du centre de rééducation, il devient champion de France…
        </p>
        <p class="portrait__part-text">
          Il ne supporte pas les approches compassionnelles de certains reportages sur son histoire ou celles des autres sportifs paralympiques. "Moi, je ne chiale jamais sur mon handicap", assène-t-il.
        </p>
      </div>

      <div class="portrait__part3">
        <h3>Le militant</h3>
        <div class="portrait__part-text-block">
          <p class="portrait__part-text">
            Michaël Jérémiasz est aussi un citoyen engagé. Titulaire du certificat préparatoire pour sportifs de haut niveau délivré par Sciences Po Paris, il fonde l’association « Comme les autres »  qui propose à des personnes handicapées suite à un accident de la vie un accompagnement global.
          </p>
        </div>
      </div>
    </div>

    <div class="portrait__part3-image">
      <img class="portrait__part3-gif" src="../assets/img/mask-j.gif" alt="masque de super héro de Michael">
    </div>

    <div class="portrait-container">
      <div class="portrait__part-text-block">
        <p class="portrait__part-text">
          Il a également créé  Handiamo!, une entreprise sociale agréée solidaire spécialisée dans la gestion de carrières de sportifs de haut niveau en situation de handicap et l’organisation d’événements et de conférences de sensibilisation au handicap.
        </p>
      </div>
    </div>

    <div class="portrait__part-video">
        <youtube :video-id="videoId2" ref="youtube" :player-vars="playerVars" @playing="playing"></youtube>
          <!-- <div class="portrait__part2-video-youtube">
            <img class="portrait__part1-video-youtube-controls" src="../assets/img/play.svg" alt="play video">
          </div> -->
    </div>

    <div class="portrait-container">
      <div class="portrait__part-text-block">
        <p class="portrait__part-text">
          Sa mission : professionnaliser le Handisport et contribuer à changer le regard des gens sur le handicap.Il soutient la première édition des Débats du Sport personnes handicapées Solidaire, organisés par la Fondation FDJ et le Think tank Sport et Citoyenneté.
        </p>
        <p class="portrait__part-text">
          « Tout au long de l’année, je me rends dans des écoles, des collèges et des lycées pour échanger sur mon parcours, mon engagement et leur vision du handicap. En complément de mes activités, j’interviens régulièrement dans les médias avec un objectif : faire changer de regard sur le handicap. Nous sommes aujourd’hui sous-représentés et peu visibles, même dans des lieux publiques : sortir de chez soi est parfois déjà un acte militant lorsque nous sommes confrontés aux problèmes d’infrastructures type escalier, trottoir élevé ,… »
        </p>
      </div>
    </div>

    <div class="portrait__part4-image"></div>
  </div>
</template>

<script>
  import PortraitHeader from '@/components/PortraitHeader'
  export default {
    name: 'Jeremiasz',
    components: {
      PortraitHeader
    },
    data () {
      return {
        videoId1: '-mYIJKhOXAw',
        videoId2: '-sbx3qccwnU',
        playerVars: {
          controls: 1
        }
      }
    },
    methods: {
      playVideo () {
        this.player.playVideo()
      },
      playing () {
        console.log('we are watching!!!')
      }
    },
    computed: {
      player () {
        return this.$refs.youtube.player
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  h1, h2, h3, p {
    margin: 0;
  }
  h1 {
    line-height: 0.91;
  }
  h3 {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 20px 0 10px;
  }

  .link-bold {
    font-weight: bold;
  }

  .is-hidden {
    display: none;
  }
  .portrait__intro-bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background: url("../assets/img/portrait_jeremiasz.png") 0 50px no-repeat;
    background-size: cover;
    z-index: $z-index-portrait-bg;
    transition: 0.5s;
    box-shadow: 0 -20px 90px black inset;
     @media #{$desktop} {
      background: url("../assets/img/portrait_jeremiasz@2x.png") top right no-repeat;
      background-size: 700px !important;
      height: 1524px;
    }
  }

  .portrait__intro-gif {
    position: absolute;
    width: 130%;
    top: 50px;
    left: -30px;
      @media #{$tablet} {
      opacity: 0;
    }
  }

  .portrait__part3-gif {
    position: relative;
    width: 130%;
    top: 50px;
    left: -30px;
    @media #{$tablet} {
      opacity: 0;
    }
  }


  .portrait__intro-bg-overlay {
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.3;
  }

  .portrait {
    height: 100%;
  }

  .portrait__intro {
    margin-bottom: 50px;
    &.is-scrolling {
      margin-top: 80px;
      transition: 0.5s;
    }
     @media #{$desktop} {
      max-width: 455px;
    }
  }

  .portrait__intro-bg {
    overflow: hidden;
  }

  .portrait-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    color: $white;
    font-size: 22px;
    font-weight: 200;
    line-height: 1.6;
    z-index: $z-index-portrait-container;
    @media #{$desktop} {
      margin: 0 auto;
      max-width: 946px;
    }
  }

  .portrait__part1,
  .portrait__part2,
  .portrait__part-text-block {
    @media #{$desktop} {
      max-width: 598px;
    }
  }

  .portrait__slider-nickname-container {
    display: flex;
    align-items: center;
    margin-bottom: 3px;
    max-height: 0px;
    opacity: 0;
    transition: 0.5s;
       @media #{$desktop} {
        margin-top: 100px;
        }
  }
  .portrait__slider-nickname {
    font-size: 25px;
    text-align: left;
    font-weight: 200;
  }
  .dash {
    width: 18px;
    height: 2px;
    margin: 20px 20px 20px 0;
    background-color: $white;
  }
  .dash-under{
    transition: 0.5s;
  }
  .portrait__slider-subtitle {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }

  .portrait-quote {
    color: $white;
    font-size: 24px;
    font-weight: 200;
    font-style: italic;
    text-align: left;
    transition: 0.5s;
    opacity: 1;
    max-height: 65px;
  }

  .portrait__medal-medals {
    display: flex;
  }
  .portrait__medal-medals-group {
    display: flex;
    align-items: flex-end;
    margin-right: 15px;
  }
  .medals-nb {
    font-size: 14px;
    font-weight: 600;
    margin-right: 2px;
    margin-bottom: 2px;
  }

  .portrait__titles-title,
  .portrait__records-record{
    font-size: 14px;
    font-weight: 300;
    line-height: 1.4;
  }

  /* Portrait intro transition */
  .selected .portrait__intro{}

  .selected .portrait__intro.is-scrolling{
      margin-top: 250px;
  }

  .selected .portrait__slider-nickname-container{
    max-height: 45px;
    opacity: 1;
  }

  .selected .portrait-quote {
    opacity: 0;
    max-height: 0;
  }
  .selected .portrait__medal{
    opacity: 0;
  }
  .selected .portrait__titles{
    opacity: 0;
  }

  .selected .dash-under{
    opacity: 0;
    margin: 0;
  }

  .selected .portrait-jeremiasz.portrait__intro-bg{
    background-size: 135%;
  }


/* Part 1 */
  .portrait__part-video {
    margin-top: 20px;
    margin-bottom: 60px;
    display: flex;
    justify-content: flex-end;
    @media #{$desktop} {
      margin-top: 40px;
      margin-bottom: 40px;
      width: 724px;
      height: 408px;
      margin-left: 350px;
    }
  }

  .portrait__part1-video-youtube {
    position: relative;
    background-color: $white;
    right: 40px;
    width: 246px;
    height: 138px;
  }
  .portrait__part1-video-youtube-controls {
    position: absolute;
    left: -30px;
    bottom: -15px;
  }

  .portrait__part2-video-youtube {
    position: relative;
    background-color: $white;
    right: 70px;
    width: 248px;
    height: 139px;
  }

  .portrait__part-text {
    margin-bottom: 40px;
  }

  .portrait__part1-image {
    width: 100%;
    height: 500px;
    background: url('../assets/img/222138-1080p.png') top no-repeat;
    background-size: 200%;
    @media #{$tablet} {
      background: url('../assets/img/222138-1080p@2x.png') center no-repeat;
      background-size: 80%;
      height: 980px;
    }
  }

  .portrait__part2-image {
    width: 100%;
    height: 667px;
    background: url('../assets/img/mj-2.png') center no-repeat;
    background-size: 200%;
    @media #{$tablet} {
      height: 1024px;
      background: url('../assets/img/mj-2@2x.png') center no-repeat;
      background-size: 100%;
    }
  }

  .portrait__part3-image {
    width: 100%;
    height: 670px;
    background: url("../assets/img/portrait_jeremiasz.png") 0 50px no-repeat;
    background-size: cover;
    overflow: hidden;
      @media #{$tablet} {
      height: 980px;
      background: url('../assets/img/portrait_jeremiasz@2x.png') center no-repeat;
      background-size: 40%;
    }
  }

  .portrait__part-text-block-end {
    margin-top: 170px;
  }

  .portrait__part4-image {
    width: 100%;
    height: 667px;
    background: url('../assets/img/Michael-Jeremiasz-champion-de-tennis-fauteuil.png') center no-repeat;
    background-size: 300%;
    @media #{$tablet} {
      background: url('../assets/img/Michael-Jeremiasz-champion-de-tennis-fauteuil@2x.png') center no-repeat;
      background-size: 100%;
    }
  }
</style>
