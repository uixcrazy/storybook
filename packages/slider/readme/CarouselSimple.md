# 🐾 🐾 🐾    CarouselSimple    🐾 🐾 🐾

## Usage

1. Default

  ```import Carousel from '../src/CarouselSimple';```

2. Custom styles

   At first, we have to prepare a custom style (example _yourStyles_)

  ```
  import { CarouselSimple, withStyles } from '../src/CarouselSimple';
  const CustomCarousel = withStyles(yourStyles, CarouselSimple);
  ```
3. Add options:

  ```
  <Carousel data={bannerEl} infiniteLoop autoplay={false}/>
  ```

  **data** is necessary, a react component. It means you must prepare UI for all slide before.

## Props:

| Name | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| data | react.Element<*> |
| speed | int | 500 | Slide transition duration (in ms) |
| infiniteLoop | bool | false | If _true_, clicking **"Next"** while on the last slide will transition to the first slide and vice-versa |
| swipeEnabled | bool | true | If true, slider will allow touch swipe transitions |
| easing _(linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n))_| string | linear | 	The type of _"easing"_ to use during transitions. In CSS transitions, include a value for the transition-timing-function property |
| showDots| bool | true | show dots/bullets/indicators |
| showBtnNextPrev | bool | true | show Next/Previous controls |
| autoplay | bool | true | Enables Autoplay |
| autoplaySpeed | int | 4500 | Autoplay Speed (in ms) |

## Core Concepts

![carousel](https://raw.githubusercontent.com/uixcrazy/storybook/master/packages/slider/readme/images/carousel.png)

## ... and more

  - [ ] **handleClick** so sánh activeIndev với index → tăng speed, để bớt giựt
  - [x] còn phần **startAuto**
  - [x] support casoursel với styles mới (đã làm → **chưa tạo demo**)
  - [x] chưa test cho mobile (đã test một phần, tạm thời ổn định)
