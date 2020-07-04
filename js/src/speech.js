const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export function supportsSpeechRecognition() {
  return SpeechRecognition != null;
}

// 사용자의 목소리를 분석해서 가져옴
export function recognizeSpeech(words, callback) {
  let recognition = new SpeechRecognition();

  // Start speech recognition
  recognition.start();

  recognition.onresult = event => {
    const { results } = event;

    try {
      const transcript = results[0][0].transcript.toLowerCase().replace(/\s/g, '');
      const correct = words.some(x => transcript.indexOf(x) > -1);
      console.log(transcript, correct);

      if (correct) {
        recognition.stop();
        recognition = null;
      }

      callback(null, correct);
    } catch (error) {
      //
    }
  };

  recognition.onend = () => {
    if (recognition != null) {
      recognition.start();
    }
  };

  recognition.onerror = event => {
    recognition.stop();
    recognition = null;
    callback(event.error);
  };

  return () => {
    if (recognition != null) {
      recognition.stop();
      recognition = null;
    }
  };
}

export class SpeechController {
  constructor($container) {
    this.$container = $container;

    this._clickCallbacks = [];
    this.clickEventListener = (event) => {
      this._clickCallbacks.forEach(callback => {
        callback(event);
      });
    };

    this.$container.addEventListener('click', this.clickEventListener);
  }

  destroy() {
    this.clear();
    this.$container.style.opacity = '0';
    this.$container.classList.remove('clickable');
    this.$container.removeAttribute('tabindex');
    this.$container.innerHTML = '';
  }

  clear() {
    this._clickCallbacks = [];
  }

  onClick(callback) {
    this._clickCallbacks.push(callback);
  }

  clickMode() {
    this.$container.classList.add('clickable');
    this.$container.setAttribute('tabindex', '0');
    this.$container.innerHTML = `
    <div class="soundbars-text">Click</div>
    `;
  }

  speechMode() {
    this.$container.classList.remove('clickable');
    this.$container.removeAttribute('tabindex');
    this.$container.innerHTML = `
    <div class="soundbars-bar"></div>
    <div class="soundbars-bar"></div>
    <div class="soundbars-bar"></div>
    <div class="soundbars-bar"></div>
    <div class="soundbars-bar"></div>
    <div class="soundbars-bar"></div>
    <div class="soundbars-bar"></div>
    <div class="soundbars-bar"></div>
    `;
  }
}
