/**
 * Ref: https://javascript.info/js-animation#summary
 * @param {timing, draw, duration}
 *   timing – the function to calculate animation progress.
 *        Gets a time fraction from 0 to 1,
 *        returns the animation progress, usually from 0 to 1.
 *   draw – the function to draw the animation.
 *   duration – the total animation time in ms.
 */

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

export default animate;
