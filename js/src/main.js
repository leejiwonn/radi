import { recognizeSpeech, SpeechController, supportsSpeechRecognition } from './speech';
import { playAudioWhenAvailable } from './audio';
import { sleep } from './util';
import { unlockBodyScroll } from './body-scroll';
import { scrollDownAnimation } from './rx';
import { exhaustMap, share, takeUntil } from 'rxjs/operators';
import { fromEvent, merge, Subject } from 'rxjs';
import { scrollAnimation } from './scroll-animation';

const $voice1 = document.getElementById('radi-voice-1');
const $voice2 = document.getElementById('radi-voice-2');
const $speechControlButton = document.getElementById('speech-control-button');
const $mainTitle = document.getElementById('main-title');
const $mainTitleError = document.getElementById('main-title-error');
const $page1 = document.querySelector('.page.page-1');
const $page1SkipButton = document.getElementById('page1-skipbutton');
const $page1ScrollButton = document.getElementById('page1-scrollbutton');
const page1Scroll$ = new Subject();
const mouseWheel$ = merge(
  fromEvent(window, 'wheel'),
  fromEvent(window, 'touchstart')
).pipe(share());

scrollAnimation();

page1Scroll$.asObservable().pipe(
  exhaustMap(() =>
    scrollDownAnimation({
      distanceOffset: $page1.getBoundingClientRect().height,
      durationTime: 1500,
    }).pipe(
      takeUntil(mouseWheel$),
    )
  )
).subscribe();

function page1Scroll() {
  page1Scroll$.next();
}

async function main() {
  if (!supportsSpeechRecognition()) {
    return;
  }

  // 이거 주석처리 안하면 스크롤 안되게 막을 수 있음
  // lockBodyScroll();

  const speechController = new SpeechController($speechControlButton);
  let clicked = false;
  let firstError = true;
  let skipped = false;
  let stopSpeech;

  speechController.clickMode();
  speechController.onClick(async () => {
    if (clicked) {
      return;
    }

    clicked = true;
    speechController.speechMode();
    await sleep(700);
    $mainTitle.style.opacity = '1';
    $page1SkipButton.classList.add('clickable');

    playAudioWhenAvailable($voice1, () => {
      if (skipped) {
        return;
      }

      stopSpeech = recognizeSpeech([
        '안녕라디야',
        '안녕라디아',
        '안녕나비야',
        '안녕나비야',
        '안녕나디야',
      ], async (error, correct) => {
        if (skipped) {
          return;
        }

        if (error != null) {
          alert(error);
          return;
        }

        if (correct) {
          speechController.destroy();
          unlockBodyScroll();

          $page1SkipButton.classList.remove('clickable');
          $mainTitle.style.opacity = '0';
          $mainTitleError.classList.remove('wiggle');
          $mainTitleError.style.opacity = '0';

          await sleep(1500);
          $mainTitle.innerHTML = '반가워! 내 이름은 라디야. 지금부터 나를 소개할게!';
          $mainTitle.style.opacity = '1';

          playAudioWhenAvailable($voice2, () => {
            $page1ScrollButton.classList.add('clickable');
            $page1ScrollButton.addEventListener('click', () => {
              page1Scroll();
            });
          });
        } else {
          $mainTitleError.style.opacity = '1';

          if (!firstError) {
            $mainTitleError.classList.add('wiggle');
            $mainTitleError.addEventListener('animationend', () => {
              $mainTitleError.classList.remove('wiggle');
            }, { once: true });
          }

          firstError = false;
        }
      });
    });
  });

  $page1SkipButton.addEventListener('click', async () => {
    page1Scroll();

    $voice1.pause();
    $voice2.pause();
    if (typeof stopSpeech === 'function') {
      stopSpeech();
    }
    speechController.destroy();
    unlockBodyScroll();

    skipped = true;
    $page1SkipButton.classList.remove('clickable');

    $page1ScrollButton.classList.add('clickable');
    $page1ScrollButton.addEventListener('click', () => {
      page1Scroll();
    });

    $mainTitle.style.opacity = '0';
    await sleep(1500);

    $mainTitle.innerHTML = '반가워! 내 이름은 라디야. 지금부터 나를 소개할게!';
    $mainTitle.style.opacity = '1';
  }, { once: true });

  // 테스트 애니메이션은 여기서 작업하기 !!!

}

main().catch(error => {
  console.error(error);
});
