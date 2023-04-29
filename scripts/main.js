$(Document).ready(function(){
    $("#tabla").DataTable({
        "language": {
            "lengthMenu": "Display _MENU_ records per page",
            "zeroRecords": "No hay nah",
            "info": "Showing page _PAGE_ of _PAGES_",
            "infoEmpty": "No records available",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }

    });
});