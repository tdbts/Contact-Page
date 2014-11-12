$(document).ready(function() {

	$('.needs_tooltip').tooltip();

	$('.ch-item').delay(1000).fadeIn(1500, function() {
		
		$('#quote').fadeIn(1000);
	});

	$('#openEmailModal').on('click', function() {
		
		$('#emailModal').modal();
	});

	function getVal(selector) {

		return $(selector).val();
	}

	function clearField(selectors) {

		selectors.forEach(function(fieldID) {
			
			$(fieldID).val("");
		});
	}

	function emailModalAJAX() {

		$('#send_email_btn').on('click', function(event) {

			var firstName = getVal('#first_name');
			var lastName = getVal('#last_name');
			var email = getVal('#email');
			var comments = getVal('#comments');
			var url = '/shared/send_form_email.php';

			var request = $.ajax({

				type: "POST",
				url: url,
				data: {
					first_name: firstName,
					last_name: lastName,
					email: email,
					comments: comments
				}
			});

			request.done(function() {
				
				clearField(['#first_name', '#last_name', '#email', '#comments']);
				$('#send_email_btn').popover('hide');
				$('#emailModal').modal('hide');
			});

			request.fail(function() {
				
				alert('Sorry, AJAX was unable to process that request!');
			});

			event.preventDefault();
		});
	}

	emailModalAJAX();

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

	$('#send_email_btn').popover({content: 'Thanks for reaching out!'}, 'click');

	function adjustForSmallerScreens() {

		if (window.screen.availWidth >= 950 && window.screen.availWidth <= 1500) {

			$('.circle_container').css({height: '180px', width: '180px'});
			$('.ch-info h3').css({fontSize: '1.5em', paddingTop: '7px', height: '40px'});
			$('.ch-info-back p').css({fontSize: '0.65em'});
		}
	}
	adjustForSmallerScreens();

	function adjustBackground() {

		$(document).scroll(function() {
			
			$('#wallpaper').css({height: (screen.availHeight + $(document).scrollTop()).toString() + 'px',
				maxHeight: '1750px'});
		});
	}
	adjustBackground();
});