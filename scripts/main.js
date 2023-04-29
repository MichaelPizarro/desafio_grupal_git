$(Document).ready(function(){
    $("#tabla").DataTable({
        "language": {
            "lengthMenu": "Desplegar _MENU_ elementos por página",
            "zeroRecords": "No hay nah",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay elementos disponibles",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }

    });
});