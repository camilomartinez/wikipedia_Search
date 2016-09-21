$(document).ready(function () {
	// body...
	$('#result').click(function(){

		var result = $('#submit').val(); //the value of the input 
		var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ result +"&format=json&callback=?"; // the api to search on wikipedia
		console.log(api);

		$.ajax({
			type:'GET',
			url:api,
			async:false,
			dataType: "json",
			success: function(data){
				console.log(data)
				for (var i =0; i <data[1].length; i++) {
					
					$('#wikiResult').html(' <a href="'+data[3][i]+'"><h2>'+data[1][i]+'</h2></a>'+'<p>'+data[2][i]+'</p>')
				}

			},
			error: function(errorMessage){
				alert('there is some Error..!')
			}
		})






	});

})


// Heading
				// console.log(data[1][0]);

				// Description
				// console.log(data[2][0]);

				// Link
				// console.log(data[3][0]);

				// Log the url
				// console.log(url);