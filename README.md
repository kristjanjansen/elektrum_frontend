## About

This projects implements a modern CSS + JS workflow but considers the legacy implications so all existing Boostrap styling and jQuery/Backbone based code is preserved.

The project uses [Laravel Mix](https://laravel.com/docs/5.4/mix) a simple Webpack wrapper.

All CSS/JS dependencies are listed in `package.json` and merged and minified in `webpack.mix.js`. 

## Structure

### Source CSS files

```sh
# Bootstrap based .less theme files:
/prelive_protected/css/theme   

# Theme entrypoint that includes all neccessary .less files
/prelive_protected/css/theme/theme.less 

# Bootstrap and theme variables
/prelive_protected/css/theme/variables.less 

# Other theme files
/prelive_protected/css/theme/*.less 

# Stuff extracted out of original styles.css file. Contains
#   - Acceptance
#   - Workers-info-to-send
#   - Offer
#   - Misc overrides (forms, modals etc)
/prelive_protected/css/custom/cutthere.css 

# Additional CSS found in the codebase, reiven-styles.css Contains
#   - Workers
#   - Reports
#   - Followup
#   - Misc overrides (search, select2, navbar etc)
/prelive_protected/css/custom/reiven.css 
```

**TODO:**

* Split these files into logically grouped style files.
* It's recommended to keep all page-specific styles in separate files named after respective controllers / JS files.
* General theme/plugin CSS overrides can live in their own file
* Reach only to CSS overrides when you can not override certain theme styling using ```variables.less```

### Target CSS files

```sh
# Bootstrap + theme, compiled from .less files
# Previously the first part of styles.css
/prelive/css/theme.css 

# All jQuery plugin-specific CSS compiled together
# Previously injected to the page via controllers
/prelive/css/vendor.css 

# Custom CSS, compiled together
# Previously the second part of styles.css + reiven-styles.css
/prelive/css/custom.css
```

### Source JS files 

```sh
# Temporary demo JS file, should be ignored
/prelive_protected/custom/custom.js 
```

**TODO:**

* Include controller-based *.js files

### Target JS files

```sh
# All plugins JS files
# Previously included in main template 
# and injected to the page via controllers
/prelive/js/vendor.js 

# All custom js
# Previously injected to the page via controllers
/prelive/js/custom.js 
```

### Other target files

```sh
# jQuery UI sprites
/prelive/css/images 

# Glyphicons and Fontawesome icon fonts
# Renamed by Webpack 
/prelive/fonts/

# Fancybox images
/prelive/img
```

## Installation

It's assumed you have NodeJS installed and optionally Yarn https://yarnpkg.com/en/docs/install

```sh
git clone https://github.com/kristjanjansen/elektrum_frontend
cd elektrum_frontend
yarn

# If you do not have Yarn:

# npm install
```

## Compiling the scripts for dev

```sh
npm run dev
```

## Compiling the scripts for production

```sh
npm run build
```

