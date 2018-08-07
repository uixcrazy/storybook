# SliderSimple

## How to use

1. Default

  ```import Slider from '../src/SliderSimple';```

2. Custom styles

   At first, we have to prepare a custom style (example _yourStyles_)

  ```
  import { SliderSimple, withStyles } from '../src/SliderSimple';
  const CustomSlider = withStyles(SliderSimple, yourStyles);
  ```
3. Add options:

  ```
  <Slider data={bannerEl} infiniteLoop autoplay={false}/>
  ```

## Options:

| Name | Default | Description |
| ------ | ------ | ------ |
| speed _(int)_| 500 | Slide transition duration (in ms) |
| infiniteLoop _(boolean)_| false | If _true_, clicking **"Next"** while on the last slide will transition to the first slide and vice-versa |
| easing _(linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n))_| linear | 	The type of "easing" to use during transitions. In CSS transitions, include a value for the transition-timing-function property |
| showDots _(boolean)_| true | show dots/bullets/indicators |
| showBtnNextPrev _(boolean)_| true | show Next/previous controls |
| autoplay _(boolean)_| true | enables Autoplay |
| autoplaySpeed _(int)_| 4500 | Autoplay Speed in milliseconds |

