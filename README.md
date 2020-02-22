# React Loading

[![Build Status](https://travis-ci.org/yisheng90/react-loading.png?branch=master)](https://travis-ci.org/yisheng90/react-loading)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

A loading skeleton component built on React

[![NPM](https://nodei.co/npm/@yisheng90/react-loading.png)](https://nodei.co/npm/@yisheng90/react-loading/)

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

```bash
import Skeleton from '@yisheng90/react-loading';

<Skeleton/>

```

### Width

![width](https://i.imgur.com/8wAUZX4.gif)

```bash
    <Skeleton width={250}/>
    <Skeleton width="250px"/>
    <Skeleton width="5rem"/>
```

### Height

![width](https://i.imgur.com/k7LDwjD.gif)

```bash
    <Skeleton height={25} />
    <Skeleton height="25px" />
    <Skeleton height="3rem" />
```

### Rows

![width](https://i.imgur.com/bA5LKdJ.gif)

```bash
    <Skeleton width={250} row={6} />
```

### Circle

![width](https://i.imgur.com/kFLU9Pn.gif)

```bash
    <Skeleton width={250} circle />
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
