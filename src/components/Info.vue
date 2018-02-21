<template>
  <div class="info-container">
    <div class="info-container__content" v-bind:class="{ active : isActive }">
      <p class="info-container-title">La résilience</p>
      <p class="info-container-text">Boris Cyrulnik, Neuropsychiatre :</p>
      <p class="info-container-text">Renoncer puis accepter pour se reconstruire : c’est la résilience. J’ai subi un coup, que faire ? Avouer être vaincu, que sa vie est terminée ?</p>
      <p class="info-container-text">Je veux me venger et passer le reste de mes jours dans l’amertume ? Ou se remettre à vivre, mais pas comme avant. Le handicap est présent dans le cerveau, le corps et la mémoire de soi.</p>
    </div>
    <div class="info-container__button" @click="showMore">
      <div class="info__button-asset" v-bind:class="{ active : isActive }">
        <span class='span-1'></span>
        <span class='span-2'></span>
        <span class='span-3'></span>
      </div>
        <!-- <svg width="19px" height="12px" viewBox="0 0 19 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>30E5B1B3-1F15-40F5-9FA4-585AC91B690A</title>
            <desc>Created with sketchtool.</desc>
            <defs></defs>
            <g id="01.1.13_Lefur_Obstacle" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-198.000000, -624.000000)">
                <g id="Nav" transform="translate(168.000000, 592.000000)" fill="#090909" fill-rule="nonzero">
                    <g id="CTA-Right">
                        <g id="Group" transform="translate(39.500000, 38.000000) scale(-1, 1) translate(-39.500000, -38.000000) translate(30.000000, 32.000000)">
                            <path d="M1,0 L18,0 C18.5522847,-1.01453063e-16 19,0.44771525 19,1 L19,1 C19,1.55228475 18.5522847,2 18,2 L1,2 C0.44771525,2 6.76353751e-17,1.55228475 0,1 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z M1,5 L13,5 C13.5522847,5 14,5.44771525 14,6 C14,6.55228475 13.5522847,7 13,7 L1,7 C0.44771525,7 6.76353751e-17,6.55228475 0,6 C-6.76353751e-17,5.44771525 0.44771525,5 1,5 Z M1,10 L8,10 C8.55228475,10 9,10.4477153 9,11 C9,11.5522847 8.55228475,12 8,12 L1,12 C0.44771525,12 6.76353751e-17,11.5522847 0,11 C-6.76353751e-17,10.4477153 0.44771525,10 1,10 Z" id="En-savoir-plus"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg> -->
        <p class="info-button__word">Résilience</p>
      </div>
    </div>
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Info',
  data () {
    return {
      animation: new TimelineMax({ paused: true }),
      isActive: false
    }
  },
  mounted () {
    this.animation
      .fromTo('.info-container__content', 0.75, { right: -277 }, { right: 0 }, 'start')
    console.log('hello')
  },
  methods: {
    showMore () {
      console.log('showMore')
      if (!this.isActive) {
        this.isActive = true
        this.animation.play()
      } else {
        this.isActive = false
        this.animation.reverse()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.info-container {
  box-sizing: border-box; 
  position: fixed;
  z-index: $z-index-info;
  color: $black;
  width: 100%;
  height: 100vh;
}

.info-container__content {
  position: absolute;
  box-sizing: border-box; 
  padding: 30px;
  right: -277px;
  height: 100%;
  width: 277px;
  font-size: 18px;
  line-height: 1.3;
  background-color: $white;
}

.info-container-title {
  margin-bottom: 25px;
	font-weight: bold;
}

.info-container-text {
  margin-bottom: 25px;
}

.info-container__button {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  box-sizing: border-box;
  width: 207px;
	height: 75px;
  background-color: $white;
  cursor: pointer;
}
.info-button__word {
  color: $black;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3.5px;
}

.info__button-asset {
  padding: 0 15px;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.info__button-asset span{
  background-color: $black; 
  display: block;
  width: 19px;
  height: 2px;
  border-radius: 2px;
  margin-bottom: 4px;
  transition: 0.3s;
  &.span-2 {
    width: 14px;
  }
  &.span-3 {
    width: 9px;
  }
}
.info__button-asset:last-child{
  margin-bottom: 0;
}
/* .active .hmenu__main-button span{width: 30px; border-radius: 2px; transition: 0.2s}
.active .hmenu__main-button span + span{width: 38px; transition: 0.3s}
.active .hmenu__main-button span + span + span{width: 23px; transition: 0.1s} */
.info__button-asset.active span{width: 20px; height: 3px; border-radius: 2px; transition: 0.2s; transform: rotate(-45deg); transform-origin: right;}
.info__button-asset.active  span + span{width: 0px; transform: rotate(-45deg); margin-right: 8px;}
.info__button-asset.active  span + span + span{width: 20px; transform: rotate(45deg); transform-origin: right; margin-right: 0;}

</style>
