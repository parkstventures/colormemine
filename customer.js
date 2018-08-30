var API_ENDPOINT = "https://11pwvwz0zl.execute-api.us-east-1.amazonaws.com/prod"

document.getElementById("searchButton").onclick = function(){

	var cust = $('#cust').val();
    
	$.ajax({
				url: API_ENDPOINT + '?cust='+cust,
				type: 'GET',
				success: function (response) {

					$('#posts tr').slice(1).remove();

	        jQuery.each(response, function(i,data) {

					

						$("#posts").append("<tr> \
								<td>" + data['createdate'] + "</td> \
								<td>" + data['firstname'] + "</td> \
								<td>" + data['lastname'] + "</td> \
								<td>" + data['phonenum'] + "</td> \
                                      <td>" + data['email'] + "</td> \
                                      <td>" + data['zipcode'] + "</td> \
								</tr>");
	        });
				},
				error: function () {
						alert("error");
				}
		});
}

