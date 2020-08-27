var fadeOutAllVideos1 = function() {
	$('[data-video-size="16-9"]').fadeOut();
	$('[data-video-size="1-1"]').fadeOut();
	$('[data-video-size="4-5"]').fadeOut();
	$('[data-video-size="9-16"]').fadeOut();
}

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
      	document.querySelectorAll('[data-video-size="9-16"]').forEach(item => {
            fadeOutAllVideos1();
          })
      }
      if (document.querySelectorAll('[data-video-size-button="1-1"]') && document.querySelectorAll('[data-video-size-button="1-1"]').length) {
      	document.querySelectorAll('[data-video-size-button="1-1"]').forEach(item => {
            item.style.fontWeight = 400;
            item.style.color = "#979797";
          })
        document.querySelectorAll('[data-video-size="1-1"]').forEach(item => {
            fadeOutAllVideos1();
          })
      }
      if (document.querySelectorAll('[data-video-size-button="4-5"]') && document.querySelectorAll('[data-video-size-button="4-5"]').length) {
      	document.querySelectorAll('[data-video-size-button="4-5"]').forEach(item => {
            item.style.fontWeight = 400;
            item.style.color = "#979797";
          })
        document.querySelectorAll('[data-video-size="4-5"]').forEach(item => {
            fadeOutAllVideos1();
          })
      }
      if (document.querySelectorAll('[data-video-size-button="16-9"]') && document.querySelectorAll('[data-video-size-button="16-9"]').length) {
      	document.querySelectorAll('[data-video-size-button="16-9"]').forEach(item => {item.style.fontWeight = 400; item.style.color = "#979797";})
        document.querySelectorAll('[data-video-size="16-9"]').forEach(item => {fadeOutAllVideos1();})
      }
      
      document.querySelectorAll('[data-video-size-button="' + videoSize + '"]').forEach(item => {item.style.fontWeight = 900; item.style.color = "white";})
      document.querySelectorAll('[data-video-size="' + videoSize + '"]').forEach(item => {item.style.display = "block";})
    })
  })
