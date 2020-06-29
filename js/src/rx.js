import { animationFrameScheduler, defer, range } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

/** Observable이 구독된 이후 지난 시간을 rAF 마다 반환합니다. */
export function timeElapsed() {
  return defer(() => {
    const start = animationFrameScheduler.now();

    return range(0, Number.POSITIVE_INFINITY, animationFrameScheduler)
      .pipe(map(() => animationFrameScheduler.now() - start));
  });
}

/** 지정된 시간(단위: ms)동안 0-1 까지 반환합니다. */
export function duration(milliseconds, scheduler = animationFrameScheduler) {
  return timeElapsed(scheduler).pipe(
    map(elapsedMilliseconds => elapsedMilliseconds / milliseconds),
    takeWhile(timing => timing <= 1),
  );
}

export const easing = {
  quarticInOut: t => (t < 0.5 ? +8.0 * Math.pow(t, 4.0) : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0),
};

export function getScrollYOffset() {
  const documentElement = document.documentElement;
  const documentRect = documentElement.getBoundingClientRect();

  /**
   * 보통의 경우 scrollLeft, scrollTop으로 스크롤 위치를 구할 수 있습니다. 하지만 크롬과 파이어폭스의 경우
   * 'document.body' 또는 'document.documentElement' 중 스크롤 위치를 구하는 곳이 다릅니다. 따라서 'scrollTop'
   * 값이 다를 수 있습니다. 'document.documentElement'의 Bounding Rect를 구하는 것은 일관성이 있습니다.
   *
   * 자세한 내용은 아래를 참조해 주세요:
   *  https://github.com/angular/material2/blob/master/src/cdk/scrolling/viewport-ruler.ts#L102
   */
  return (
    -documentRect.top ||
    document.body.scrollTop ||
    window.scrollY ||
    documentElement.scrollTop ||
    0
  );
}

export function scrollDownAnimation(options) {
  const startOffset = getScrollYOffset();
  const direction = options.distanceOffset > startOffset ? 1 : -1;
  const distance = Math.abs(options.distanceOffset - startOffset);

  return duration(options.durationTime).pipe(
    map(easing.quarticInOut),
    map(timing => timing * distance),
    tap(frame => {
      window.scrollTo(0, startOffset + frame * direction);
    }),
  );
}
