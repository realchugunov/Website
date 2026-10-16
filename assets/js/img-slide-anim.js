(function ($) {
    //giving variable, duh...
    var slide = $(".box-slide"),
      active = $(".active"),
      textSlide = $(".text-slide"),
      next = $(".next-slide"),
      prev = $(".prev-slide");
  
    //write init function on first page load
    function init() {
      //this thing is for hiding the second and the third image slide
      TweenLite.set(slide.not(active), { autoAlpha: 0 });
  
      //this thing is for hiding the second and the third text slide
      TweenLite.set(textSlide.not(active), { autoAlpha: 0 });
    }
  
    //run init function
    init();
  
    //next image slide
    function goToNextSlide(slideOut, slideIn) {
      var tl = new TimelineLite();
  
      //Make it disabled when there is no more slide
      if (slideIn.length !== 0) {
        //Where the magic Happend, like the animation and stuff
        tl.set(slideIn, {
          width: "0px",
          right: "0px",
          left: "",
          autoAlpha: 1,
          className: "+=active"
        })
          .set(slideOut, { className: "-=active" })
          .to(
            slideIn,
            1,
            { width: "100%", left: "0px", right: "", ease: Power3.easeInOut },
            0
          )
          .to(
            slideOut,
            1,
            { width: "0px", left: "0px", right: "", ease: Power3.easeInOut },
            0
          )
          
      }
    }
  
    //same like image slide above, only this one is for the text
    function goToNextText(slideOutText, slideInText) {
      var tl = new TimelineLite();
  
      if (slideInText.length !== 0) {
        tl.set(slideInText, { y: "50px", autoAlpha: 0, className: "+=active" })
          .set(slideOutText, { className: "-=active" })
          .to(slideInText, 1, { y: "-=50px", autoAlpha: 1 }, 1)
          .to(slideOutText, 1, { y: "-50px", autoAlpha: 0 }, 0.5);
      }
    }
  
    //This is when the next button is clicked
    next.click(function (e) {
      //disable the default behavior, so it doesn't go to the href link
      e.preventDefault();
  
      //giving variable for the parameter function
      var slideOut = $(".box-slide.active"),
        slideIn = $(".box-slide.active").next(".box-slide"),
        slideOutText = $(".text-slide.active"),
        slideInText = $(".text-slide.active").next(".text-slide");
  
        
  
      //RUN THE MAGIC !! WINGARDIUM LEVIOSA !!
      goToNextSlide(slideOut, slideIn);
      goToNextText(slideOutText, slideInText);
    });
  
    // previous slide, its basically same like the code above
    //just rename every 'next' code to 'prev'
    //and invert the value
    //yup, thats pretty much it
    function goToPrevSlide(slideOut, slideIn) {
      var tl = new TimelineLite();
  
      if (slideIn.length !== 0) {
        tl.set(slideIn, {
          width: "0px",
          left: "0px",
          right: "",
          autoAlpha: 1,
          className: "+=active"
        })
          .set(slideOut, { className: "-=active" })
          .to(
            slideIn,
            0,
            { width: "100%", right: "0px", left: "", ease: Power3.easeInOut },
            0
          )
          .to(
            slideOut,
            1,
            { width: "0px", right: "0px", left: "", ease: Power3.easeInOut },
            0
          );
      }
    }
  
    function goToPrevText(slideOutText, slideInText) {
      var tl = new TimelineLite();
  
      if (slideInText.length !== 0) {
        tl.set(slideInText, { y: "-50px", autoAlpha: 0, className: "+=active" })
          .set(slideOutText, { className: "-=active" })
          .to(slideInText, 1, { y: "-=-50px", autoAlpha: 1 }, 1)
          .to(slideOutText, 1, { y: "50px", autoAlpha: 0 }, 0.5);
      }
    }
  
    prev.click(function (e) {
      e.preventDefault();
  
      var slideOut = $(".box-slide.active"),
        slideIn = $(".box-slide.active").prev(".box-slide"),
        slideOutText = $(".text-slide.active"),
        slideInText = $(".text-slide.active").prev(".text-slide");
        
      goToPrevSlide(slideOut, slideIn);
      goToPrevText(slideOutText, slideInText);
    });
  
    // You're a PROZARD Harry !
    // Im a wot ??
    // A PROGRAMMER WIZARD !!
  
    // Why am i so salty, LOL
  })(jQuery);
  