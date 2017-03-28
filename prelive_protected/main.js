// import theme from './theme/theme.less'

import jQuery from 'jquery'

import jQueryUiCss from 'jquery-ui-dist/jquery-ui.css'
import jQueryUiJs from 'jquery-ui-dist/jquery-ui.js'

import jQueryUiTimepickerCss from 'jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.css'
import jQueryUiTimepickerJs from 'jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.js'

import select2Css from 'select2/dist/css/select2.css'
import select2Js from 'select2'

import bootstrap from 'bootstrap'
import bootstrapCss from 'bootstrap/less/bootstrap.less'

import bootstrapTokenfield from 'bootstrap-tokenfield'
import bootstrapTokenfieldCss from 'bootstrap-tokenfield/dist/css/bootstrap-tokenfield.css'

import bootbox from 'bootbox'

import daterangepicker from 'daterangepicker'
import daterangepickerCss from 'daterangepicker/daterangepicker-bs3.css'

$(() => {

    $('#datetimepicker').datetimepicker()
    
    $('#select2').select2()

    // $('#tokenfield').tokenfield()

    $('#bootbox').on('click', () => bootbox.alert("This is Bootbox"))

    $('#daterange').daterangepicker()

})