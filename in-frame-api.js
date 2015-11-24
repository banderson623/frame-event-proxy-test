SingingBook = SingingBook || {};

// SingingBook.FrameProxy

SingingBook.FrameProxy = (function(){

  var handleMessage = function(eventMessage){
    if(eventMessage.data && eventMessage.data['kind'])
      var kind = eventMessage.data.message;
      if(kind === 'scroll'){
        _scrolled(eventMessage.data);
      } else if(kind === 'resize') {
        _resized(eventMessage.data);
      }
    }
  };

  var onScroll = function(callback){
    if(typeof callback === 'function'){
        _onScroll.push(callback);
    }
  };

  var onResize = function(callback){
    if(typeof callback === 'function'){
      _onResize.push(callback);
    }
  };

  var setupMessageHandler =  function(){
    window.addEventListener("message", handleMessage, false);
  };

  // The public API
  return  {
    setupMessageHandler: setupMessageHandler,
  };
})();


