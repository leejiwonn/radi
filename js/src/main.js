import { recognizeSpeech, SpeechController, supportsSpeechRecognition } from './speech';
import { playAudioWhenAvailable } from './audio';
import { sleep } from './util';
import { lockBodyScroll, unlockBodyScroll } from './body-scroll';
import { scrollDownAnimation } from './rx';
import { takeUntil } from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';

const voice1$ = document.getElementById('radi-voice-1');
const voice2$ = document.getElementById('radi-voice-2');
const speechControlButton$ = document.getElementById('speech-control-button');
const mainTitle$ = document.getElementById('main-title');
const mainTitleError$ = document.getElementById('main-title-error');
const page1$ = document.querySelector('.page.page-1');
const page1ScrollButton$ = document.getElementById('page1-scrollbutton');

async function main() {
  if (!supportsSpeechRecognition()) {
    return;
  }

  // 이거 주석처리 안하면 스크롤 안되게 막을 수 있음
  lockBodyScroll();

  const speechController = new SpeechController(speechControlButton$);
  let clicked = false;
  let firstError = true;

  speechController.clickMode();
  speechController.onClick(async () => {
    if (clicked) {
      return;
    }

    clicked = true;
    speechController.speechMode();
    await sleep(700);
    mainTitle$.style.opacity = '1';

    playAudioWhenAvailable(voice1$, () => {
      recognizeSpeech([
        '안녕라디야',
        '안녕라디아',
        '안녕나비야',
        '안녕나비야',
        '안녕나디야',
      ], async (error, correct) => {
        if (error != null) {
          alert(error);
          return;
        }

        if (correct) {
          speechController.destroy();
          unlockBodyScroll();

          mainTitle$.style.opacity = '0';
          mainTitleError$.classList.remove('wiggle');
          mainTitleError$.style.opacity = '0';

          await sleep(1500);
          mainTitle$.innerHTML = '반가워! 내이름은 라디야. 지금부터 나를 소개할게!';
          mainTitle$.style.opacity = '1';

          playAudioWhenAvailable(voice2$, () => {
            page1ScrollButton$.classList.add('clickable');
            page1ScrollButton$.addEventListener('click', () => {
              scrollDownAnimation({
                distanceOffset: page1$.getBoundingClientRect().height,
                durationTime: 1500,
              }).pipe(
                takeUntil(merge(fromEvent(window, 'wheel'), fromEvent(window, 'touchstart'))),
              ).subscribe();
            });
          });
        } else {
          mainTitleError$.style.opacity = '1';

          if (!firstError) {
            mainTitleError$.classList.add('wiggle');
            mainTitleError$.addEventListener('animationend', () => {
              mainTitleError$.classList.remove('wiggle');
            }, { once: true });
          }

          firstError = false;
        }
      });
    });
  });

  // 이지원 여기서 작업해라 !!!
  // (function () {
  //
  //   var controller = new ScrollMagic.Controller();
  //
  //   var tween1 = TweenMax.to('.big-title', 0.5, {
  //     scale: 2.5,
  //     rotation: 360,
  //     x: 130
  //   });
  //
  //   var scene1 = new ScrollMagic.Scene({
  //       triggerElement: ".left-box",
  //       duration: "100%"
  //   })
  //   .setTween(tween1)
  //   .addTo(controller)
  //   .addIndicators({
  //       name: "1"
  //   });
  //
  // }())

}

main().catch(error => {
  console.error(error);
});
