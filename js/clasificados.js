function changeStat(value)
{
    $(".box a").attr("style","");
    $("#"+ value + "Txt").attr("style","color: red; text-decoration: underline");
}
