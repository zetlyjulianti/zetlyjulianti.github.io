function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}
var mengundang = GetURLParameter('mengundang');
var mengundang = mengundang.replace("%20"," ");
var mengundang = mengundang.replace("%20"," ");
var mengundang = mengundang.replace("%20"," ");
var mengundang = mengundang.replace("%20"," ");
var mengundang = mengundang.replace("%20"," ");
document.getElementById("mengundang").innerHTML = mengundang;