$(document).ready(function() {

	$('.needs_tooltip').tooltip();

	$('.ch-item').delay(250).fadeIn(1500, function() {
		
		$('#quote').fadeIn(1000);
	});

	$('#openEmailModal').on('click', function() {
		
		$('#emailModal').modal();
	});

	function attachLinks(selectorsAndURLs) {
		selectorsAndURLs.forEach(function(obj) {
			
			$(obj.selector).on('click', function() {
				
				window.open(obj.url);
			});
		});
	}

	var linkData = [
		{selector: "#contactLink-1", url: "https://github.com/tdbts"}, 
		{selector: "#contactLink-2", url: "https://www.linkedin.com/pub/vincent-r-sanchez/50/7b0/895"}, 
		{selector: "#contactLink-3", url: "https://twitter.com/vrsanchez8717"}, 
		{selector: "#contactLink-4", url: "https://www.facebook.com/VinnyFromTheQ"} 
		];

	attachLinks(linkData);

});