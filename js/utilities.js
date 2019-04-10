
getBroadbandInfo("CO30RG");

//Gets broadband information for a postcode
function getBroadbandInfo(postcode){
    var url = "http://127.0.0.1:5000/broadband?postcode="+postcode;
    $.getJSON(url, function(data) {
        console.log(data);
    });
}

//Gets broadband information for a postcode
function getMobileInfo(postcode){
    var url = "http://127.0.0.1:5000/mobile?postcode="+postcode;
    $.getJSON(url, function(data) {
        console.log(data);
    });
}
