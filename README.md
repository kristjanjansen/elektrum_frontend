## Elektrum frontend

### About

This projects implements a modern CSS + JS workflow but considers the legacy implications so all existing Boostrap styling and jQuery/Backbone based code is preserved.

The project uses [Laravel Mix](https://laravel.com/docs/5.4/mix) a simple Webpack wrapper.

All CSS/JS dependencies are listed in `package.json` and merged and minified in `webpack.mix.js`. 

### Installation

It's assumed you have NodeJS installed and optionally Yarn https://yarnpkg.com/en/docs/install

```sh
git clone https://github.com/kristjanjansen/elektrum_frontend
cd elektrum_frontend
yarn

# If you do not have Yarn:

# npm install
```

### Compiling the scripts for dev

```sh
npm run dev
```

### Compiling the scripts for production

```sh
npm run build
```

