// Wrap every letter in a span
var textWrapper = document.querySelector('.published .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.published .marker',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 1000
  })
  .add({
    targets: '.published .marker',
    translateX: [0, document.querySelector('.published .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 800,
    delay: 100
  })
  .add({
    targets: '.published .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  })
  .add({
    targets: '.published',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });