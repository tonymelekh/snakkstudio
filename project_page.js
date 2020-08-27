var selectedVideo = null;

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
      document.querySelectorAll('[data-video-size="' + videoSize + '"]').forEach(item => {
	      $('[data-video-size="' + selectedVideo + '"]').animate({
		      opacity: 0
	      }, 400, function() {
		      $('[data-video-size="' + selectedVideo + '"]').css('display', "none")
		      $(item).css('opacity', 0)
		      $(item).css('display', 'block')
		      $(item).animate({
		      	opacity: 1
		      }, 400)
		      selectedVideo = videoSize
	      })
	      
      })
    })
  })
