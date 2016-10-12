/**
 * Created by antoniohernandez on 10/11/16.
 */

$(document).ready(function(){
    $("#demosMenu").change(function(){
        window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });


});