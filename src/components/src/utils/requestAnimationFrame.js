(function(){
  let lastTime = 0;
  ['webkit', 'moz'].forEach(
    (i) => {
      window.requestAnimationFrame = window[`${i}RequestAnimationFrame`];
      window.cancelAnimationFrame = window[`${i}CancelAnimationFrame`] ||
        window[`${i}CancelRequestAnimationFrame`];
    }
  );
  if(!window.requestAnimationFrame) {
    window.requestAnimationFrame = (j) => {
      let currTime = Date.now();
      let timeToCall = Math.max(0, 16.7-(currTime - lastTime));
      let id = window.setTimeout(() => j(), timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    }
  }
  if(!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (id) => {
      window.clearTimeout(id);
    }
  }
})()