<template>
    <div class="share">
      <div class="share--open-close" @click="toggleSharingButtons">
        <svg class="share--open" xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20">
          <path fill="#2D2D2D" fill-rule="nonzero" d="M14.063 14.78c-.533 0-1.022.178-1.419.476l-7.33-4.548a2.385 2.385 0 0 0-.028-1.495l7.058-4.735a2.365 2.365 0 0 0 1.719.742 2.387 2.387 0 0 0 2.378-2.39A2.387 2.387 0 0 0 14.063.44a2.387 2.387 0 0 0-2.3 2.99L4.625 8.22a2.358 2.358 0 0 0-1.582-.61A2.387 2.387 0 0 0 .665 10a2.387 2.387 0 0 0 2.378 2.39c.638 0 1.217-.256 1.644-.668l7.206 4.472a2.39 2.39 0 0 0 2.17 3.365 2.387 2.387 0 0 0 2.378-2.39 2.387 2.387 0 0 0-2.378-2.39z"/>
        </svg>
        <svg class="share--close" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
            <path fill="#2D2D2D" fill-rule="evenodd" d="M7.071 4.95L12.021 0l2.121 2.121-4.95 4.95 4.95 4.95-2.121 2.121-4.95-4.95-4.95 4.95L0 12.021l4.95-4.95L0 2.121 2.121 0l4.95 4.95z"/>
        </svg>
      </div>
      <div class="share__button">
        <!-- TODO: intégrer le texte prérempli pour le partage -->
        <social-sharing :url="getURL" inline-template>
          <div>
            <network network="facebook" class="share--facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="19" viewBox="0 0 9 19">
                <path fill="#3B5998" fill-rule="evenodd" d="M5.793 0c-.596 0-1.168.072-1.836.334-1.358.548-2.05 1.835-2.05 3.838v1.955H0v3.266h1.907v9.417h3.886V9.393H8.44l.358-3.266H5.793V4.649c0-.453.048-.787.167-.978.167-.286.5-.429 1.025-.429H8.75V0H5.793z"/>
              </svg>
            </network>
            <network network="twitter" class="share--twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18">
                <path fill="#00ACED" fill-rule="nonzero" d="M20.558 2.021a8.272 8.272 0 0 1-1.44.486A4.491 4.491 0 0 0 20.302.62a.236.236 0 0 0-.345-.274 8.311 8.311 0 0 1-2.202.91.584.584 0 0 1-.523-.13A4.504 4.504 0 0 0 14.253 0c-.475 0-.955.074-1.427.22a4.363 4.363 0 0 0-2.94 3.144 4.804 4.804 0 0 0-.107 1.658.167.167 0 0 1-.18.182A11.81 11.81 0 0 1 1.481.868a.235.235 0 0 0-.386.03 4.5 4.5 0 0 0-.61 2.264c0 1.221.49 2.372 1.342 3.21a4.036 4.036 0 0 1-1.027-.397.235.235 0 0 0-.35.203 4.51 4.51 0 0 0 2.63 4.154 4.032 4.032 0 0 1-.854-.07.236.236 0 0 0-.269.302 4.514 4.514 0 0 0 3.566 3.07 8.31 8.31 0 0 1-4.655 1.414h-.52a.345.345 0 0 0-.338.26.357.357 0 0 0 .17.394 12.361 12.361 0 0 0 6.212 1.675c1.91 0 3.695-.38 5.308-1.126a11.722 11.722 0 0 0 3.884-2.91 12.76 12.76 0 0 0 2.378-3.984c.529-1.412.808-2.92.808-4.359V4.93c0-.232.105-.449.287-.597a8.902 8.902 0 0 0 1.791-1.965c.131-.197-.076-.442-.291-.347z"/>
              </svg>
            </network>
          </div>
        </social-sharing>
      </div>
    </div>
</template>

<script>
import { TimelineMax } from 'gsap'
import SocialSharing from 'vue-social-sharing'

export default {
  name: 'Share',
  data () {
    return {
      animation: new TimelineMax({ paused: true }),
      time: 0.3,
      isOpen: false
    }
  },
  components: {
    SocialSharing
  },
  mounted () {
    this.animation
      .to('.share__button', this.time, { x: -150, width: '150px' }, 'start')
      .fromTo('.share--open', this.time, { autoAlpha: 1 }, { autoAlpha: 0 }, 'start')
      .fromTo('.share--close', this.time, { autoAlpha: 0 }, { autoAlpha: 1 }, 'start')
    console.log(window.location.href)
  },
  methods: {
    toggleSharingButtons () {
      if (!this.isOpen) {
        this.isOpen = true
        this.animation.play()
      } else {
        this.isOpen = false
        this.animation.reverse()
      }
    }
  },
  computed: {
    getURL () {
      return window.location.href
    }
  }
}
</script>

<style lang="scss">
    .share {
      margin-left: auto;
      position: relative;
      width: 75px;
      height: 75px;
      background: $white;
    }
    .share__button {
      position: absolute;
      top: 0;
      left: 0;
      width: 75px;
      height: 75px;
      background: $white;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .share--open-close {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      height: 75px;
      width: 75px;
      background: $white;
    }
    .share--close {
      position: absolute;
    }
    .share--open {
      position: absolute;
    }
    .share--twitter {
      margin: 0 0 0 50px;
    }
</style>