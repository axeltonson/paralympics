<template>
  <div>
    <div class="info-component">
      <info></info>
    </div>
    <div class="portrait__intro-bg">
      <div class="portrait__intro-bg-overlay"></div>
    </div>
    <div class="portrait-container">
      <div class="portrait__intro is-scrolling">
        <div class="portrait__slider-title">
          <div class="portrait__slider-nickname-container is-hidden">
            <div class="dash is-hidden"></div>
            <span class="portrait__slider-nickname is-hidden">&laquo; Le guépard &raquo;</span>
          </div>
          <h1>
            Marie-Amélie Le Fur
          </h1>
          <div class="portrait-quote">"« Fais de ta vie un rêve et d’un rêve une réalité »</div>
          <div class="dash"></div>
        </div>
        <div class="portrait__slider-subtitle">
          <p>Longueur, 100 m, 200 m, 400 m
            <p>
              <p>Athlétisme</p>
        </div>
        <div class="portrait__medal">
          <h3>médailles mondiales</h3>
          <div class="portrait__medal-medals">
            <div class="portrait__medal-medals-group">
              <p class="medals-nb">7</p>
              <img src="../assets/img/m-daille-gold.svg" alt="7 médailles d'or">
            </div>
            <div class="portrait__medal-medals-group">
              <p class="medals-nb">11</p>
              <img src="../assets/img/m-daille-silver.svg" alt="11 médailles d'argent">
            </div>
            <div class="portrait__medal-medals-group">
              <p class="medals-nb">2</p>
              <img src="../assets/img/m-daille-bronze.svg" alt="2 médailles de bronze">
            </div>
          </div>
        </div>
        <div class="portrait__titles">
          <h3>4 titres</h3>
          <p class="portrait__titles-title">JO de Pékin 2008, Médaille d’argent en Saut en longueur</p>
          <p class="portrait__titles-title">JO de Pékin 2008, Médaille d’argent au 100m</p>
          <p class="portrait__titles-title">JO de Londres 2012, Médaille D’or sur 100 mètres</p>
          <p class="portrait__titles-title">JO de Londres 2012, Médaille D’argent sur 200 mètres</p>
        </div>
        <div class="portrait__records">
          <h3>3 records mondiaux</h3>
          <p class="portrait__records-record">Record du monde du saut en longueur à Doha (5,74m)</p>
          <p class="portrait__records-record">Une médaille d’or au 400m en établissant un nouveau record (59"27)</p>
          <p class="portrait__records-record">Jeux paralympiques de Rio, record du monde sur 400 mètres</p>
        </div>
      </div>

      <div class="portrait__part1">
        <h3>La victoire</h3>
        <p>
          On dit qu’un jour peut faire basculer une vie pourtant il a suffit de quelques secondes pour que Marie-Amélie devienne la femme la plus rapide du monde, au Jeux Olympiques de Londres en 2012.
        </p>
        <div class="portrait__part1-video">
          <youtube :video-id="videoId" ref="youtube" :player-vars="playerVars" @playing="playing" width="246" height="138"></youtube>
          <!-- <div class="portrait__part1-video-youtube" @click="playVideo">
            <img class="portrait__part1-video-youtube-controls" src="../assets/img/play.svg" alt="play video">
          </div> -->
        </div>
        <div class="portrait__part-text-block">
          <p class="portrait__part-text">Ce jour là, elle n’entend plus que la Marseillaise, autour d’elle, le fourmillement, l’excitation, la pression. Elle atteint alors les 5 derniers mètres de la course. Elle sent les autres coureuses revenir sur ses talons, elle se penche pour atteindre
            la ligne d’arrivée mais est persuadée d’avoir fini en seconde position.</p>
          <p class="portrait__part-text">Elle retient son souffle…</p>
          <p class="portrait__part-text">Le tableau affiche le résultat…</p>
          <p class="portrait__part-text">Elle est première.</p>
        </div>
      </div>
    </div>

    <div class="portrait__part1-image"></div>

    <div class="portrait-container">
      <div class="portrait__part-text-block">
        <p class="portrait__part-text">Qu’est ce qui fait d’elle une femme hors du commun?</p>
        <p class="portrait__part-text">Le tableau affiche le résultat…</p>
      </div>

      <div class="portrait__part2">
        <h3>L'obstacle</h3>
        <p class="portrait__part-text">
          Le 31 mars 2004, elle a un accident de scooter qui lui vaudra d’être amputée de la jambe gauche sous le genou.
        </p>
        <p class="portrait__part-text">
          Pour Marie-Amélie c’est sa force mentale et son tempérament de battante qui la pousseront à faire preuve de
          <span class="link-bold">résilience</span> et à accepter malgré le traumatisme de la situation la transformation du temps.
        </p>
      </div>
    </div>

    <div class="portrait__part2-image"></div>

    <div class="portrait-container">
      <div class="portrait__part-text-block">
        <p class="portrait__part-text">Dès le lendemain de son amputation elle pense à la légèreté qu’elle ressentait avant dans l’athlétisme et recommence à courir 4 mois plus tard, le 31 juillet 2004 pour la première fois avec sa lame.
        </p>
        <p class="portrait__part-text">
          Le besoin de vivre, de rebondir chez Amélie est quasi immédiat.
        </p>
      </div>

      <div class="portrait__part3">
        <h3>Le guépard</h3>
        <div class="portrait__part-text-block">
          <p class="portrait__part-text">
            Les ressentis au niveau de la voûte plantaire, des flexions de la cheville, des tensions musculaires dans la jambe, des pressions au niveau du genou, n’existent plus d’un côté chez Amélie Le Fur.
          </p>
        </div>
      </div>
    </div>

    <div class="portrait__part3-image"></div>

    <div class="portrait-container">
      <div class="portrait__part-text-block">
        <p class="portrait__part-text">
          Depuis 13 ans elle apprivoise sa
          <span class="link-bold">lame en carbone</span> bien aiguisée.
        </p>
        <p class="portrait__part-text">
          <span class="link-bold">Dompter sa prothèse</span> est un combat quotidien.
        </p>
      </div>
    </div>

    <div class="portrait__instamoment">
      <instagram :url='"https://api.instagram.com/oembed?url=https://www.instagram.com/p/BQ0UzPRFvsE/"'></instagram>
    </div>

    <div class="portrait-container">
      <div class="portrait__part-text-block">
        <p class="portrait__part-text">
          À travers son histoire et ses réussites sportives, elle espère
          <span class="link-bold">promouvoir le handisport</span> afin que tout le monde connaisse ces pratiques et puissent y accéder plus librement et facilement.
        </p>
      </div>
      <div class="portrait__part-text-block-end">
        <p class="portrait__part-text">
          Marie-Amélie Le Fur n’a qu’une seule devise :
        </p>
        <p class="portrait__part-text">
          « Fais de ta vie un rêve et d’un rêve une réalité »
        </p>
      </div>
    </div>

    <div class="portrait__part4-image"></div>

    <div class="overlay__top"></div>
    <div class="overlay__bottom"></div>
    <div class="select__content-scroll">
      <p class="select__content-scroll-text">
        Scroll to
        <br> explore
      </p>
      <div class="select__content-scroll-line"></div>
    </div>
  </div>
</template>

<script>
  import Instagram from '@/components/Instagram'
  import Info from '@/components/Info'
  const basicScroll = require('basicscroll')

  export default {
    name: 'Le-fur',
    components: {
      Instagram,
      Info
    },
    data () {
      return {
        videoId: '2_vPxntIHI8',
        playerVars: {
          controls: 1
        }
      }
    },
    mounted: function () {
      const instance = basicScroll.create({
        elem: document.querySelector('.portrait__part2'),
        from: 'top-middle',
        to: 'bottom-top',
        inside: (instance, percentage, props) => {
        },
        outside: (instance, percentage, props) => {
          document.querySelector('.info-component').classList.remove('is-active')
        }
      })
      instance.start()
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

<style lang="scss" scoped>
  h1,
  h2,
  h3,
  p {
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

  .info-component {
    display: none;
    &.is-active {
      display: block;
    }
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
    background: url("../assets/img/Portrait_lefur4@2x.png") 30px 50px no-repeat;
    background-size: cover;
    z-index: $z-index-portrait-bg;
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
      margin-top: 50px;
    }
  }

  .portrait-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    color: $white;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.3;
    z-index: $z-index-portrait-container;
  }

  .portrait__slider-nickname-container {
    display: flex;
    align-items: center;
    margin-bottom: 3px;
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

  .portrait__slider-subtitle {
    font-size: 14px;
    font-style: normal;
    line-height: 1.5;
  }

  .select__content-scroll {
    box-sizing: border-box;
    z-index: $z-index-above-items;
    position: fixed;
    bottom: 0;
    padding-left: 40px;
    width: 100%;
    text-align: left;
  }

  .select__content-scroll-text {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2.8px;
    color: $white;
    margin-bottom: 12px;
  }

  .select__content-scroll-line {
    width: 2px;
    height: 75px;
    background-color: $white;
  }

  .portrait-quote {
    color: $white;
    font-size: 24px;
    font-weight: 200;
    font-style: italic;
    text-align: left;
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
  .portrait__records-record {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.4;
  }

  .overlay__top {
    z-index: $z-index-above-items - 1;
    position: fixed;
    top: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.0), #000000 65%, #000000);
  }

  .overlay__bottom {
    z-index: $z-index-above-items - 1;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 215px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.0), #000000 65%, #000000);
  }

  .portrait__part1-video {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 138px;
  }

  .portrait__part-text {
    margin-bottom: 40px;
  }

  .portrait__part1-image {
    width: 100%;
    height: 650px;
    background: url('../assets/img/malf-tpe-site2@2x.png') top no-repeat;
    background-size: 200%;
  }

  .portrait__part2-image {
    width: 100%;
    height: 767px;
    background: url('../assets/img/jo20161608@2x.png') center no-repeat;
    background-size: 320%;
  }

  .portrait__part3-image {
    width: 100%;
    height: 950px;
    background: url('../assets/img/7784838782_marie-amelie-le-fur-en-septembre-2016-a-rio@2x.png') 35% -100px no-repeat;
    background-size: 300%;
  }

  .portrait__instamoment {
    position: relative;
    z-index: $z-index-above-medias;
    width: 100%;
    height: auto;
  }

  .portrait__part-text-block-end {
    margin-top: 170px;
  }

  .portrait__part4-image {
    width: 100%;
    height: 867px;
    background: url('../assets/img/2016-rio-paralympics-day-5-2@2x.png') 45% 50px no-repeat;
    background-size: 250%;
  }
</style>
