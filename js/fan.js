// angular.bind(self, function)

		var element = document.getElementById("FadeBox");
var duration = 3000;  /* fade duration in millisecond */
var hidtime = 2000; /* time to stay hidden */
var showtime = 2000; /* time to stay visible */

function SetOpa(Opa) {
  element.style.opacity = Opa;
  element.style.MozOpacity = Opa;
  element.style.KhtmlOpacity = Opa;
  element.style.filter = 'alpha(opacity=' + (Opa * 100) + ');';
}

function fadeOut() {
  for (i = 0; i <= 1; i += 0.01) {
    setTimeout("SetOpa(" + (1 - i) +")", i * duration);
  }
   setTimeout("FadeIn()", (duration + hidtime));
}
function FadeIn() {
  for (i = 0; i <= 1; i += 0.01) {
    setTimeout("SetOpa(" + i +")", i * duration);
  }
   setTimeout("fadeOut()", (duration + showtime));
}


		var images = document.getElementById("thumbs").getElementsByTagName("img");

		for(var i = 0; i < images.length; i++) {
			images[i].onmouseover = function() {
				this.style.cursor = 'hand';
				this.style.borderColor = 'red';
			}
			images[i].onmouseout = function() {
				this.style.cursor = 'pointer';
				this.style.borderColor = 'grey';

		}
	}

	function changeImage(event) {
		event = event || window.event;

		var targetElement = event.target || event.srcElement;

		if(targetElement.tagName == "IMG")
		{

			document.getElementById("mainImage").src = targetElement.getAttribute("src");
		}
	}
