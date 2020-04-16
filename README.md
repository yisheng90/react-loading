<div align="center">

# React Loading

<img src="https://media1.tenor.com/images/3afe6a6b40c4ed1c2ad273286b087e0f/tenor.gif?itemid=16905458" height="100"> 

[![Build Status](https://travis-ci.org/yisheng90/react-loading.png?branch=master)](https://travis-ci.org/yisheng90/react-loading)
[![codecov](https://codecov.io/gh/yisheng90/react-loading/branch/master/graph/badge.svg)](https://codecov.io/gh/yisheng90/react-loading)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
![Publish NPM](https://github.com/yisheng90/react-loading/workflows/Publish%20NPM/badge.svg)

A loading skeleton component built on React
</div>


## Installation

Use the package manager `npm` or `yarn` to install React Loading

```bash
npm install @yisheng90/react-loading --save
```

or

```bash
yarn add react-loading
```

## Usage

```jsx
import Skeleton from '@yisheng90/react-loading';

<Skeleton/>

```

### Width


<img src="https://i.imgur.com/8wAUZX4.gif" height="100">

```jsx
    <Skeleton width={250}/>
    <Skeleton width="250px"/>
    <Skeleton width="5rem"/>
```

### Height

<img src="https://i.imgur.com/k7LDwjD.gif" height="100">

```jsx
    <Skeleton height={25} />
    <Skeleton height="25px" />
    <Skeleton height="3rem" />
```

### Rows

<img src="https://i.imgur.com/bA5LKdJ.gif" height="100">

```jsx
    <Skeleton width={250} row={6} />
```

### Circle

<img src="https://media.tenor.com/images/1def707702cd55ef88a6fb56ca85ed32/tenor.gif" height="100">

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
   <Skeleton color="black" width={250} height={30} translucent/>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
