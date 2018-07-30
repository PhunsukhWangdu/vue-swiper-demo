(function(){
  let lastTime = 0;
  ['webkit', 'moz'].forEach(
    (i) => {
      window.requestAnimationFrame = window[`${i}RequestAnimationFrame`];
      window.cancelAnimationFrame = window[`${i}CancelAnimationFrame`] ||
        window[`${i}CancelRequestAnimationFrame`];
    }
  );
  !window.requestAnimationFrame && window.requestAnimationFrame = (j) => {
      let currTime = Date.now();
      let timeToCall = Math.max(0, 16.7-(currTime - lastTime));
      let id = window.setTimeout(() => j(), timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    }
  !window.cancleAnimationFrame && window.cancleAnimationFrame = (id) => {
    window.clearTimeout(id);
  }
})()