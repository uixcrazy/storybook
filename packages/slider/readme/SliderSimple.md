# 🐾 🐾 🐾    SliderSimple    🐾 🐾 🐾

## Usage

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

  **data** is necessary, a react component. It means you must prepare UI for all slide before.

  [Options Ref](https://bxslider.com/options/)

## Props:

| Name | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| data | react.Element<*> |
| speed | int | 500 | Slide transition duration (in ms) |
| infiniteLoop | bool | false | If _true_, clicking **"Next"** while on the last slide will transition to the first slide and vice-versa |
| easing _(linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n))_| string | linear | 	The type of _"easing"_ to use during transitions. In CSS transitions, include a value for the transition-timing-function property |
| showDots| bool | true | show dots/bullets/indicators |
| showBtnNextPrev | bool | true | show Next/Previous controls |
| autoplay | bool | true | Enables Autoplay |
| autoplaySpeed | int | 4500 | Autoplay Speed (in ms) |

## Core Concepts

| Prev | Next |
| ------ | ------ |
| Right | Left |
| left to Right | right to Left |
| ![chuthich](https://raw.githubusercontent.com/uixcrazy/storybook/master/packages/slider/readme/images/chuthich.png) |
| ![left-to-right-prepare](https://raw.githubusercontent.com/uixcrazy/storybook/master/packages/slider/readme/images/left-to-right-prepare.png)  | ![right-to-left-prepare](https://raw.githubusercontent.com/uixcrazy/storybook/master/packages/slider/readme/images/right-to-left-prepare.png)  |
| ![left-to-right](https://raw.githubusercontent.com/uixcrazy/storybook/master/packages/slider/readme/images/left-to-right.png)  | ![right-to-left](https://raw.githubusercontent.com/uixcrazy/storybook/master/packages/slider/readme/images/right-to-left.png)  |

## ... and more

  - add HammerJS
  - chưa test cho mobile
