var API_ENDPOINT = "https://11pwvwz0zl.execute-api.us-east-1.amazonaws.com/prod"

document.getElementById("searchButton").onclick = function(){
    
    var inputData = {
        "firstname" : $('#f1').val(),
        "lastname" : $('#f2').val(),
        "phonenumber" : $('#f4').val(),
        "email" : $('#f3').val(),
        "zipcode" : $('#f7').val()
    };
    
    
    $.ajax({
           url: API_ENDPOINT,
           type: 'POST',
           data:  JSON.stringify(inputData)  ,
           contentType: 'application/json; charset=utf-8',
           success: function (response) {
           window.location.href = "thankyou.html";
           //document.getElementById("responseReturned").textContent=response + " some one will assist you soon";
           },
           error: function () {
           document.getElementById("responseReturned").textContent="sorry. something went wrong. please try again";
           }
           });
}


