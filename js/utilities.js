
getBroadbandInfo("CO30RG");

//Gets broadband information for a postcode
function getBroadbandInfo(postcode){
    // $.ajax({ 
    //     url : "https://api-proxy.ofcom.org.uk/broadband/coverage/"+postcode, 
    //     type : "get", 
    //     crossDomain: true,
    //     //dataType: "jsonp",
    //     dataType: 'application/json',
    //     beforeSend: function(xhr){xhr.setRequestHeader('Ocp-Apim-Subscription-Key', BROADBAND_KEY);},
    //     success : function(result) { 
    //         console.log(result);
    //         //set your variable to the result 
    //     }, 
    //     error : function(result) {
    //         console.log("ERROR"); 
    //         console.log(result);
    //     } 
    // }); 
    
    $.ajaxSetup({
        headers : {
            "Ocp-Apim-Subscription-Key": BROADBAND_KEY
        }
    });

    var url = "https://api-proxy.ofcom.org.uk/broadband/coverage/CO30RG";
    $.getJSON(url, function(data) {
        console.log(data);
    });
}
