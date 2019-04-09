
getBroadbandInfo("CO30RG");

//Gets broadband information for a postcode
function getBroadbandInfo(postcode){
    $.ajax({ 
        type : "GET", 
        url : "https://api-proxy.ofcom.org.uk/broadband/coverage/"+postcode, 
        beforeSend: function(xhr){xhr.setRequestHeader('Ocp-Apim-Subscription-Key', "key");},
        success : function(result) { 
            console.log(result);
            //set your variable to the result 
        }, 
        error : function(result) {
            console.log("ERROR"); 
            console.log(result);
        } 
    }); 
}
