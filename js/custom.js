// Select2


$(function() {

    $('#datatable').DataTable();

    $('#select2').select2()

    // jQuery daterange

    //$('#daterange').daterangepicker()

    // jQuery masked input 

    //    It's autoloaded

    // Bootstrap datepicker

    $('#datepicker').datepicker()

    // jQuery UI datetimepicker

    //$('#datetimepicker').datetimepicker()

    // Bootstrap bootbox

    $('#bootbox').on('click', function() {
        bootbox.alert("This is Bootbox")
    })

});
