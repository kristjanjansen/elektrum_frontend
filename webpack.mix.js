var mix = require('laravel-mix');


// Custom CSS and JS

mix.styles([
    'src/custom/cuthere.css',
    'src/custom/reiven.css'
], 'dist/custom.css');

// Customized Bootstrap CSS

mix.less(
    'src/theme/theme.less',
    'dist/theme.css'
);

// Vendor CSS and JS

mix.styles([
    'node_modules/jquery-ui-dist/jquery-ui.css',
    'node_modules/select2/dist/css/select2.css',
    'node_modules/datatables/media/css/jquery.dataTables.css',
    'node_modules/daterangepicker/daterangepicker-bs3.css',
    'node_modules/jquery-ui-dist/jquery-ui.css',
    'node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.css',
    'node_modules/fancybox/dist/css/jquery.fancybox.css',
    'node_modules/bootstrap-tokenfield/dist/css/bootstrap-tokenfield.css',
    'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
], 'dist/vendor.css');

mix.scripts([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/select2/dist/js/select2.full.js',
    'node_modules/datatables/media/js/jquery.dataTables.js',
    'node_modules/moment/moment.js',
    'node_modules/daterangepicker/daterangepicker.js',
    'node_modules/jquery-ui-dist/jquery-ui.js',
    'node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.js',
    'node_modules/fancybox/dist/js/jquery.fancybox.js',
    'node_modules/bootstrap-tokenfield/dist/bootstrap-tokenfield.js',
    'node_modules/jquery-form/src/jquery.form.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/underscore/underscore.js',
    'node_modules/backbone/backbone.js',
    'node_modules/bootbox/bootbox.js',
    'node_modules/jquery-masked-input/dist/jquery.masked-input.js',
    'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
], 'dist/vendor.js');

/*

Possible additions:

    yarn add html5shiv excanvas jquery-placeholder

    'node_modules/html5shiv/dist/html5shiv.js',
    'node_modules/excanvas/excanvas.js',
    'node_modules/jquery-placeholder/jquery.placeholder.js',

*/