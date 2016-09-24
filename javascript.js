//Coded By Hasan_Sh
$(document).ready(function(){
	$("#getArticle").submit(function(event){
		event.preventDefault();
		var submit = $('#submit').val();//to get the value of input field
		var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ submit +"&format=json&callback=?";
        //the wikipedia API
		//console.log(api);
		$.ajax({
			type: "GET",
			url: api,
			contentType: "application/json; charset=utf-8",
			async: false,
			dataType: "json",
			success: function(data){
				// console.log(data[1][1]+' '+data[3][0])
				$('#wikiResult').html('');//to stop repeating the result..
				for (var i =0; i <data[1].length; i++) {
					$('#wikiResult').append('<h2 class="headResult">'+data[1][i]+'<br><a id="anchorTag" href="'+data[3][i]+'" target="_blank">'+data[2][i]+'</a></h2>')
				}
				$('#submit').val('');//here to delete the text after applying the function(after getting the result)
			},
			error: function(errorMessage){
				alert('you have an error');
			}
		})

	});
});
				// console.log(data[1][0]);

				// Description
				// console.log(data[2][0]);

				// Link
				// console.log(data[3][0]);

				// Log the url
				// console.log(url);