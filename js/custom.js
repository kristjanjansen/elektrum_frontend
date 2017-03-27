// Select2


$(function() {

    // Datatable

    $('#datatable').DataTable();

    // Select2

    $('#select2').select2()

    // Tokenfield

    $('#tokenfield').tokenfield()

    // jQuery masked input 

    //    It's autoloaded

    // Fancybox

    $('#fancybox').fancybox()

    // Bootbox

    $('#bootbox').on('click', function() {
        bootbox.alert("This is Bootbox")
    })

    // jQuery daterange

    $('#daterange').daterangepicker()

    // jQuery UI datetimepicker

    $('#datetimepicker').datetimepicker()

    // Bootstrap datepicker

    $('#datepicker').datepicker()

});
