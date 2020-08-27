var selectedVideo = null;
var selectedVideo2 = null;

var startSelect = document.querySelectorAll('[data-video-size-button="16-9"]')
  document.querySelectorAll('[data-video-size="16-9"]').forEach(item => {
    item.style.display = "none"
  })
  document.querySelectorAll('[data-video-size="1-1"]').forEach(item => {
    item.style.display = "none"
  })
  document.querySelectorAll('[data-video-size="4-5"]').forEach(item => {
    item.style.display = "none"
  })
  document.querySelectorAll('[data-video-size="9-16"]').forEach(item => {
    item.style.display = "none"
  })
  
  if (startSelect && startSelect.length) {
  	startSelect.forEach(item => {
      item.style.fontWeight = 900;
      item.style.color = 'white'
    })
    document.querySelectorAll('[data-video-size="16-9"]').forEach(item => {
	selectedVideo = "16-9"
      item.style.display = "block"
    })
  } else {
  	startSelect = document.querySelectorAll('[data-video-size-button="1-1"]')
    if (startSelect && startSelect.length) {
  		startSelect.forEach(item => {
        item.style.fontWeight = 900;
        item.style.color = 'white'
      })
      document.querySelectorAll('[data-video-size="1-1"]').forEach(item => {
	      selectedVideo = "1-1"
        item.style.display = "block"
      })
  	} else {
    	startSelect = document.querySelectorAll('[data-video-size-button="4-5"]')
      if (startSelect && startSelect.length) {
        startSelect.forEach(item => {
          item.style.fontWeight = 900;
          item.style.color = 'white'
        })
        document.querySelectorAll('[data-video-size="4-5"]').forEach(item => {
		selectedVideo = "4-5"
          item.style.display = "block"
        })
      } else {
				startSelect = document.querySelectorAll('[data-video-size-button="9-16"]')
        if (startSelect && startSelect.length) {
          startSelect.forEach(item => {
            item.style.fontWeight = 900;
            item.style.color = 'white'
          })
          document.querySelectorAll('[data-video-size="9-16"]').forEach(item => {
		  selectedVideo = "9-16"
            item.style.display = "block"
          })
        }
      }
    }
  }
  document.querySelectorAll(".js-button-video-size").forEach(function(item) {
	$(item).on("click touchstart", function(e) {
      var videoSize = e.target.dataset.videoSizeButton
      console.log("aaaaaaaaa: ", videoSize)
      
      if (document.querySelectorAll('[data-video-size-button="9-16"]') && document.querySelectorAll('[data-video-size-button="9-16"]').length) {
      	document.querySelectorAll('[data-video-size-button="9-16"]').forEach(item => {
            item.style.fontWeight = 400;
            item.style.color = "#979797";
          })
      }
      if (document.querySelectorAll('[data-video-size-button="1-1"]') && document.querySelectorAll('[data-video-size-button="1-1"]').length) {
      	document.querySelectorAll('[data-video-size-button="1-1"]').forEach(item => {
            item.style.fontWeight = 400;
            item.style.color = "#979797";
          })
      }
      if (document.querySelectorAll('[data-video-size-button="4-5"]') && document.querySelectorAll('[data-video-size-button="4-5"]').length) {
      	document.querySelectorAll('[data-video-size-button="4-5"]').forEach(item => {
            item.style.fontWeight = 400;
            item.style.color = "#979797";
          })
      }
      if (document.querySelectorAll('[data-video-size-button="16-9"]') && document.querySelectorAll('[data-video-size-button="16-9"]').length) {
      	document.querySelectorAll('[data-video-size-button="16-9"]').forEach(item => {item.style.fontWeight = 400; item.style.color = "#979797";})
      }
      
      document.querySelectorAll('[data-video-size-button="' + videoSize + '"]').forEach(item => {item.style.fontWeight = 900; item.style.color = "white";})
      $('[data-video-size="' + selectedVideo + '"]').animate({
	opacity: 0
      }, 400, function() {
	      if (selectedVideo !== videoSize) {
		      $(document.querySelectorAll('[data-video-size="' + videoSize + '"]')).css('display', 'block')
		      $('[data-video-size="' + selectedVideo + '"]').css('display', "none")
		      $(document.querySelectorAll('[data-video-size="' + videoSize + '"]')).css('opacity', 0)
		      $(document.querySelectorAll('[data-video-size="' + videoSize + '"]')).animate({
			opacity: 1
		      }, 400)
		      selectedVideo = videoSize
	      }

      })
    })
  })






var startSelect = document.querySelectorAll('[data-video-size-button="1"]')
  document.querySelectorAll('[data-video-size="1"]').forEach(item => {item.style.display = "none"})
  document.querySelectorAll('[data-video-size="2"]').forEach(item => {item.style.display = "none"})
  document.querySelectorAll('[data-video-size="3"]').forEach(item => {item.style.display = "none"})
  document.querySelectorAll('[data-video-size="4"]').forEach(item => {item.style.display = "none"})
  
  if (startSelect && startSelect.length) {
  	startSelect.forEach(item => {item.style.fontWeight = 900; item.style.color = "white";})
    document.querySelectorAll('[data-video-size="1"]').forEach(item => {item.style.display = "block"; selectedVideo2 = "1"})
  } 
  document.querySelectorAll(".js-button-video-size-second").forEach(function(item) {
	$(item).on("click touchstart", function(e) {
      var videoSize2 = e.target.dataset.videoSizeButton
      if (document.querySelectorAll('[data-video-size-button="1"]') && document.querySelectorAll('[data-video-size-button="1"]').length) {
      	document.querySelectorAll('[data-video-size-button="1"]').forEach(item => {item.style.fontWeight = 400; item.style.color = "#979797";})
      }
      if (document.querySelectorAll('[data-video-size-button="2"]') && document.querySelectorAll('[data-video-size-button="2"]').length) {
      	document.querySelectorAll('[data-video-size-button="2"]').forEach(item => {item.style.fontWeight = 400; item.style.color = "#979797";})
      }
      if (document.querySelectorAll('[data-video-size-button="3"]') && document.querySelectorAll('[data-video-size-button="3"]').length) {
      	document.querySelectorAll('[data-video-size-button="3"]').forEach(item => {item.style.fontWeight = 400; item.style.color = "#979797";})
      }
      if (document.querySelectorAll('[data-video-size-button="4"]') && document.querySelectorAll('[data-video-size-button="4"]').length) {
      	document.querySelectorAll('[data-video-size-button="4"]').forEach(item => {item.style.fontWeight = 400; item.style.color = "#979797";})
      }
      
      document.querySelectorAll('[data-video-size-button="' + videoSize2 + '"]').forEach(item => {item.style.fontWeight = 900; item.style.color = "white";})
			
	$('[data-video-size="' + selectedVideo2 + '"]').animate({
		opacity: 0
      }, 400, function() {
	      if (selectedVideo2 !== videoSize2) {
		      $(document.querySelectorAll('[data-video-size="' + videoSize2 + '"]')).css('display', 'block')
		      $('[data-video-size="' + selectedVideo2 + '"]').css('display', "none")
		      $(document.querySelectorAll('[data-video-size="' + videoSize2 + '"]')).css('opacity', 0)
		      $(document.querySelectorAll('[data-video-size="' + videoSize2 + '"]')).animate({
			opacity: 1
		      }, 400)
		      selectedVideo2 = videoSize2
	      }

      })
			
			
    })
  })
