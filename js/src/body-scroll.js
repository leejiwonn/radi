export function lockBodyScroll() {
  if (!document.body.classList.contains('scroll-lock')) {
    document.body.classList.add('scroll-lock');
  }
}

export function unlockBodyScroll() {
  document.body.classList.remove('scroll-lock');
}
