var progress = document.createElement('progress');
progress.id = 'scrollPositionIndicator';
progress.style.position = 'fixed';
progress.style.bottom = '0px';
progress.style.width = '100%';
progress.value = 0;
progress.max = 100;

document.querySelector('body').append(progress);

document.scrollingElement.onscroll = function handleScroll() {
  document.querySelector('#scrollPositionIndicator').value = (document.scrollingElement.scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100;
}
