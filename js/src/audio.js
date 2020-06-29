export function playAudioWhenAvailable(audio$, onEnd) {
  // 재생 중이라면 무시한다.
  if (!audio$.paused) {
    return;
  }

  if (typeof onEnd === 'function') {
    audio$.addEventListener('ended', onEnd, { once: true });
  }

  if (audio$.readyState >= HTMLAudioElement.HAVE_CURRENT_DATA) {
    audio$.play();
  } else {
    audio$.addEventListener('canplaythrough', () => {
      audio$.play();
    }, { once: true });
  }
}
