// Select2


$(function() {

    $('#datatable').DataTable();

    $('#select2').select2()

    $('#tokenfield').tokenfield()

    // jQuery daterange

    //$('#daterange').daterangepicker()

    // jQuery masked input 

    //    It's autoloaded

    // Bootstrap datepicker

    $('#datepicker').datepicker()

    // jQuery UI datetimepicker

    //$('#datetimepicker').datetimepicker()

    $('#fancybox').fancybox()

    // Bootstrap bootbox

    $('#bootbox').on('click', function() {
        bootbox.alert("This is Bootbox")
    })

});
