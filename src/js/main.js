$( document ).ready(function() {
  $(".view-content").hide();
    $("#view-more").on("click", function () {
        var txt = $(".view-content").is(':visible') ? 'View More Features' : 'View Less';
        $("#view-more").text(txt);
        $(this).next('.view-content').slideToggle(200);
        return false;
    });
});
