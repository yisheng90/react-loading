# ![Skleton](https://res.cloudinary.com/duuqqcc3z/image/upload/v1587462403/react-loading/skull_1.svg) React Loading

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Build Status](https://travis-ci.org/yisheng90/react-loading.png?branch=master)](https://travis-ci.org/yisheng90/react-loading)
[![codecov](https://codecov.io/gh/yisheng90/react-loading/branch/master/graph/badge.svg)](https://codecov.io/gh/yisheng90/react-loading)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
![Publish NPM](https://github.com/yisheng90/react-loading/workflows/Publish%20NPM/badge.svg)

Loading Skleton component building block to easily create placholder loadings.

![Example](https://res.cloudinary.com/duuqqcc3z/image/upload/v1587462782/react-loading/Screen-Recording-2020-04-21-at-5.gif)

### Features

🎨 **Customizable** - You can change the color, size and shape of the skeleton

🎮 **Plug and Play** - You can just import the component and start using it

🏠 **Building block** - You can use it as a building block to build complex loading component

🧸 **Easy to adapt** - It is a react component.

### Docs

[Storybook](https://yisheng90.github.io/react-loading/?path=/docs/react-loading-welcome--page)

### Getting Started

Install via `yarn` or `npm`

```bash
npm install @yisheng90/react-loading --save
```

or

```bash
yarn add  @yisheng90/react-loading
```

### Usage

There are two ways to use it.

**1. Use it as a component**

```jsx
import Skeleton from "@yisheng90/react-loading";

<Skeleton />;
```

**2. Use it as a building block**

```jsx
import Skeleton from "@yisheng90/react-loading";

const CardSkleton = () => (
  <div style={{ display: "flex", padding: "20px" }}>
    <Skeleton width={45} circle color="pink" />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "100%",
        marginLeft: "20px",
      }}
    >
      <Skeleton color="pink" />
      <Skeleton width="50%" color="pink" />
    </div>
  </div>
);
```

### Props

**`rows?: number`**

Defaults to 1. It is used to determine the number of rows to be display.

_notes: This option will be ignored if `circle` is set as true_

**`width?: number | string`**

Defaults to 100%. It is used to set the width of the skeleton. You can set it using `%`, `rem` or `px`.

**`height?: number | string`**

Defaults to 100%. It is used to set the height of the skeleton. You can set it using `%`, `rem` or `px`.

**`circle?: boolean`**

Defaults to false. It is used to set shape of the skleton.

**`color?: string`**

It is used to set the color of the skleton. You can set it using `hex`, `rgb` or `rgba`.

**`translucent?: boolean`**

Defaults to false. It is used to set the opacity of the skleton.

**`radius?: number`**

Defaults to 4px. It is used to determine the border radius of the rows. The unit is in `px`.

_notes: This option will be ignored if `circle` is set as true_

### Examples

#### Rows

<img src="https://i.imgur.com/bA5LKdJ.gif" width="500">

```jsx
<Skeleton width={250} rows={6} />
```

#### Width

<img src="https://i.imgur.com/8wAUZX4.gif" width="500">

```jsx
    <Skeleton width={250}/>
    <Skeleton width="250px"/>
    <Skeleton width="5rem"/>
```

#### Height

<img src="https://i.imgur.com/k7LDwjD.gif"  width="500">

```jsx
    <Skeleton height={25} />
    <Skeleton height="25px" />
    <Skeleton height="3rem" />
```

### Circle

<img src="https://media.tenor.com/images/1def707702cd55ef88a6fb56ca85ed32/tenor.gif" width="500">

```jsx
    <Skeleton circle width={35} />
    <Skeleton circle width={55} />
    <Skeleton circle width={75} />
    <Skeleton circle width={95} />
    <Skeleton circle width={115} />
```

### Color

<img src="https://media1.tenor.com/images/864728696b8974c3b7ddb69985982dee/tenor.gif?itemid=16905339">

```jsx
    <Skeleton color="pink" circle width={35}/>
    <Skeleton color="#F8B195" circle width={35}/>
    <Skeleton color="#2A363B" circle width={35}/>
    <Skeleton color="rgb(25,67,89)" circle width={35}/>
    <Skeleton color="rgba(25,67,89, 0.3)" circle width={35}/>
```

### Translucent

<img src="https://media.tenor.com/images/b4889c52dff909fcc84a6038b466f8ae/tenor.gif">

```jsx
<Skeleton color="black" width={250} height={30} translucent />
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
