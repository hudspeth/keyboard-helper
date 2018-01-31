<template>
  <div>
    <div class="big-screen">
      <span class="big-text" @inputStr="update">{{ inputStr }}</span>
    </div>
    <div class="keys">
      <div class="top-row">
        <div v-for="key in topRowKeys">
          <div v-bind:data-key="key" class="key">
            <kbd>{{ key }}</kbd>
            <span class="sound">{{ key }}</span>
          </div>
        </div>
      </div>
      <div class="middle-row">
        <div v-for="key in middleRowKeys">
          <div v-bind:data-key="key" class="key">
            <kbd>{{ key }}</kbd>
            <span class="sound">{{ key }}</span>
          </div>
        </div>
      </div>
      <div class="bottom-row">
        <div v-for="key in bottomRowKeys">
          <div v-bind:data-key="key" class="key">
            <kbd>{{ key }}</kbd>
            <span class="sound">{{ key }}</span>
          </div>
        </div>
      </div>
    </div>
    <audio id="audio" ref="audio" src="static/keystroke.mp3" type="audio/wav"></audio>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data: function (){
    return {
      topRowKeys: ['Q','W','E','R','T','Y','U','I','O','P'],
      middleRowKeys: ['A','S','D','F','G','H','J','K','L'],
      bottomRowKeys: ['Z','X','C','V','B','N','M'],
      inputStr: ''
    }
  },
  created: function() {
    window.addEventListener('keyup', this.getInput);
  },
  methods: {
    textToSpeech: function(input) {
      const utterance = new SpeechSynthesisUtterance(input);
      window.speechSynthesis.speak(utterance);
      this.inputStr = '';
    },
    getInput: function(e) {
      let keyPressed =`${e.key}`;
      let elem = this.$el.querySelector(`[data-key="${keyPressed.toUpperCase()}"]`)
      this.highlightKey(elem);
      this.playKeyStroke();
      this.inputStr += keyPressed;
      this.update();
    },
    update: _.debounce(function() {
      let formattedStr = this.inputStr.charAt(0).toUpperCase() + this.inputStr.slice(1).toLowerCase();
      this.textToSpeech(formattedStr);
    }, 2000),
    highlightKey: function(key) {
      try {
        key.classList.add('highlight');
        setTimeout(function() {
          key.classList.remove('highlight');
        }, 100)
      } catch(e){
        // do nothing, this will just make it so you can hit space bar and keys that don't have a div
      }
    },
    playKeyStroke: function() {
      let audio = document.getElementById('audio');
      audio.currentTime = 0;
      audio.play();
    }
  }
}
</script>


<style scoped>

.keys{
  position: absolute;
  bottom:0%;
}

.top-row {
  display: flex;
  flex: 1;
  min-height: 10px;
  align-items: center;
  justify-content: center;
}

.middle-row {
  display: flex;
  flex: 1;
  min-height: 10px;
  align-items: center;
  justify-content: center;
}

.bottom-row {
  display: flex;
  flex: 1;
  min-height: 10px;
  align-items: center;
  justify-content: center;
}

.key {
  border: .4rem solid black;
  border-radius: .5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
}

.highlight {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}

kbd {
  display: block;
  font-size: 4rem;
}

.sound {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  color: #ffc600;
}


.big-screen {
  position: absolute;
  top: 10%;
  left: 10%;
  height: 30%;
  width: 65%;
  transition: all 1s ease;
  color: white;
  font-size: 50px;
  background: black;
  text-shadow: 0 0 .5rem black;

}

.big-text {
  transform: scale(2.1);
  margin-left: 10px;
  margin-top: 10px;
}
</style>
