export function safeScrollTo(element, options) {
  if (!element) {
    return;
  }
  if (isWindow(element)) {
    element.scrollTo(
      options.left !== undefined ? options.left : element.scrollX,
      options.top !== undefined ? options.top : element.scrollY,
    );
  } else if (element.scrollTo) {
    element.scrollTo(options);
  } else {
    const { left, top } = options;

    if (top !== undefined) {
      element.scrollTop = top;
    }

    if (left !== undefined) {
      element.scrollLeft = left;
    }
  }
}

export function safeSmoothScrollTo(
  element,
  options,
  speed = 2000,
) {
  const { top: scrollTargetY } = options;

  const scrollY = isWindow(element) ? element.scrollY : element.scrollTop;
  const totalAnimatingTime = Math.max(
    0.1,
    Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
  );

  function ease(animationProgress) {
    return -0.5 * (Math.cos(Math.PI * animationProgress) - 1);
  }

  function tick(currentTime) {
    const progress = currentTime / totalAnimatingTime;
    const easedProgress = ease(progress);

    if (progress < 1) {
      window.requestAnimationFrame(() => tick(currentTime + 1 / 60));
      safeScrollTo(element, {
        top: scrollY + (scrollTargetY - scrollY) * easedProgress,
      });
    } else {
      safeScrollTo(element, { top: scrollTargetY });
    }
  }

  tick(0);
}

function isWindow(el) {
  return el === window;
}
