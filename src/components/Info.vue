<template>
  <div class="info-container">
    <div class="info-container__content">
      <p class="info-container-title">La résilience</p>
      <p class="info-container-text">Boris Cyrulnik, Neuropsychiatre :</p>
      <p class="info-container-text">Renoncer puis accepter pour se reconstruire : c’est la résilience. J’ai subi un coup, que faire ? Avouer être vaincu, que sa vie est terminée ?</p>
      <p class="info-container-text">Je veux me venger et passer le reste de mes jours dans l’amertume ? Ou se remettre à vivre, mais pas comme avant. Le handicap est présent dans le cerveau, le corps et la mémoire de soi.</p>
    </div>
    <div class="info-container__button">
      <img src="../assets/img/en-savoir-plus.svg" alt="en savoir plus">
      <p class="info-button__word">Résilience</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {}
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
  height: 100%;
}

.info-container__content {
  position: absolute;
  box-sizing: border-box; 
  padding: 30px;
  right: 0;
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
}
.info-button__word {
  color: $black;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 3.5px;
}

</style>
