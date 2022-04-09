
(function($){
	$(function(){
        
        
        
        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });
        

        if($(".blog-article").length){
            $("body").addClass('blog-article-page');
        }

        
        
        
        $('.main-nav ul > li').find(">div").parent().addClass("mega");
        
            $('.main-nav ul > li.mega').mouseenter(function(){
                $(this).addClass('megamenu-opened')
            })
            $('.main-nav ul > li.mega').mouseleave(function(){
                $(this).removeClass('megamenu-opened')
            })
        
        if ($(window).width() > 767) {
        $('.main-nav ul > li.mega').mouseenter(function(){
            $(this).addClass('megamenu-expand')
        })
        $('.main-nav ul > li.mega').mouseleave(function(){
            $(this).removeClass('megamenu-expand')
        })
        }

        if ($(window).width() < 768) {
               
            $('#main-nav ul > li.mega > a').click(function (e) {
                e.preventDefault();
                $("body").addClass("sub-nav-open");
                $(this).parent().addClass("mega-menuShown");
            });
            
            $('div.inner-closebtn').click(function (e) {
                $("body").toggleClass("navShown");
                
                $("body").removeClass("sub-nav-open");
                $('#main-nav ul > li.mega').removeClass("mega-menuShown");
                
                $("body").removeClass("sub-sub-nav-open");
                $('.mega-menu-left-item').removeClass("sub-sub-nav-shown");
            });

            $('.mega-menu-wrap  div.back-btn').click(function () {
                $("body").removeClass("sub-nav-open");
                $(this).parents().removeClass("mega-menuShown");
            });
            
            
            $('.mega-menu-left-item > h6').click(function () {
                $("body").addClass("sub-sub-nav-open");
                $(this).parent().addClass("sub-sub-nav-shown");
            });
             
            $('div.mega-menu-left-inner > div.back-inner-btn').click(function () {
                $("body").removeClass("sub-sub-nav-open");
                $(this).parents('div.mega-menu-left-item').removeClass("sub-sub-nav-shown");
            });
            
            
        }
        
      
        $(window).scroll(function(){
           
                if ($(window).scrollTop() > 49){
                    $("body").addClass('sticky');
                }
                else{
                    $("body").removeClass('sticky');
                }
            
        });
     
        if ($(".account-select").length) {
        $('.account-select').selectric({
            optionsItemBuilder: function(itemData) {
                return '<span class="ico ico-' + itemData.value +  '"></span>' + itemData.text;
            },
            labelBuilder: function(currItem) {
                return '<span class="ico ico-' + currItem.value +  '"></span>' + currItem.text;
            }
        });
        }
        
        /*quiz*/
        $('.quiz-1-size-item').each(function(){
            var $$_this = $(this)
            $$_this.click(function(){
                console.log('test')
                $('input[name="radio-group"]:checked');
             })
        })

        //quiz-result-page
        if($(".quiz-result").length) {
            $("body").addClass("quiz-result-main");
        }

        
        
        
        
        
        
        
        
        
        
        /* Category SubLevel Page */
        if ($("select.order-select").length) {
            $("select.order-select").selectric({
                onChange: function(element) {
                    $(this).parents('div.selectric-wrapper').addClass('value-changed')
                }
            });
        }

       
        
        /* Category SubLevel Page */
        if ($("select.store-select").length) {
            $("select.store-select").selectric({
                onChange: function(element) {
                    //$(element).change();
                    $(this).parents('div.selectric-wrapper').addClass('value-changed')
                }
            });
        } /* Category SubLevel Page */
     
        
        /*blog-landing*/
        if ($("select.posts-nav-select").length) {
            $("select.posts-nav-select").selectric({
                onChange: function(element) {
                    //$(element).change();
                    $(this).parents('div.selectric-wrapper').addClass('value-changed')
                }
            });
        }

        
        
        

        if ($(window).width() > 767) {

            // Accordion Function
            $(".mattresses-accordion").each(function(){
                var $this = $(this);
                $this.find(" > h6").on("click touch", function(){
                    
                    if( $(this).parent().hasClass('frequently-active')){
                        $(this).parent().removeClass('frequently-active')
                        $(this).parent().find(".mattresses-accordion-hide").slideUp();
                    }
                    else{
                        $(this).parent().addClass('frequently-active')
                        $(this).parent().find(".mattresses-accordion-hide").slideDown();
                    }
                })
            })


    };

       

        // Accordion Function
        $(".apply-promo-code").each(function(){
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".apply-promo-code").removeClass("apply-promo-active")
                $(".apply-promo-code-content").slideUp();
                if($this.find(".apply-promo-code-content:visible").length){
                    $(".apply-promo-code").removeClass("apply-promo-active")
                    $(".apply-promo-code-content").slideUp();
                }
                else{
                    $this.addClass("apply-promo-active")
                    $(".apply-promo-code-content").slideUp();
                    $this.find(" > .apply-promo-code-content").slideDown();
                }
            })
        })


        // Accordion Function
        $(".payment-option-tab-wrap > .payment-option-tab").each(function(){
            var $this = $(this);
            $this.find(" > .custom-radio-wrap > .custom-radio > label").on("click touch", function(){
                
                if($this.hasClass('radio-active')) return false
                
                else{
                    $(".payment-option-tab").removeClass("radio-active")
                    $this.addClass("radio-active")
                    $(".payment-option-tab-hide").slideUp()
                    $this.find(" > .payment-option-tab-hide").slideDown();
                }
                
                
            })
        })
        


        
        // Accordion Function
        $(".view-order-accordion").each(function(){
            var $this = $(this);
            $this.find(" > .view-order-accordion-inner > .view-order-accordion-triger").on("click touch", function(){
                $(".view-order-accordion").removeClass("view-order-active")
                $(".view-order-accordion-content").slideUp();
                if($this.find(".view-order-accordion-content:visible").length){
                    $(".view-order-accordion").removeClass("view-order-active")
                    $(".view-order-accordion-content").slideUp();
                }
                else{
                    $this.addClass("view-order-active")
                    $(".view-order-accordion-content").slideUp();
                    $this.find(" > .view-order-accordion-content").slideDown();
                }
            })
        })


        
  
       


      /*  product page */
        if($('#slider-wrap').length){
            $('#slider-wrap').slick({
                dots: false,
                arrows:true,
                autoplaySpeed:2000,
                infinite: true,
                navigation:false,
                speed: 1000,
                slidesToShow:1,
                slidesToScroll: 1,
                asNavFor: '#slider-controller',
                responsive: [
                  
                    {
                        breakpoint: 768,
                        settings: {
                            dots:true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },

                ]

            });
            $(window).on('resize', function () {
                $('#slider-wrap').slick('resize');

            });
        }  

        if($('#slider-controller').length){
            $('#slider-controller').slick({

                arrows:true,
                infinite: true,
                navigation:false,
                /*  speed: 500,*/
                slidesToShow:6,
                slidesToScroll: 1,
                asNavFor: '#slider-wrap',
                dots:false,
                centerMode: false,
                focusOnSelect: true

            });
            $(window).on('resize', function () {
                $('#slider-controller').slick('resize');

            });
        }  
        
        
        
      /*  product page */
        if($('#claremont-slider').length){
            $('#claremont-slider').slick({
                dots: false,
                arrows:true,
                autoplaySpeed:2000,
                infinite: true,
                navigation:false,
                speed: 1000,
                slidesToShow:1,
                slidesToScroll: 1,
                asNavFor: '#claremont-slider-controler',
            });
        }  

        if($('#claremont-slider-controler').length){
            $('#claremont-slider-controler').slick({
                dots:false,
                arrows:true,
                infinite: true,
                navigation:false,
                slidesToShow:6,
                slidesToScroll: 1,
                asNavFor: '#claremont-slider',
                focusOnSelect: true,

            });
        }  
        
        
        
        //FAQs Accordion Function
        $(".accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > .accordion-title").on("click touch", function(){
                $(".accordion-item").removeClass("active")
                $(".accordion-item .accordion-info").slideUp();
                if($this.find(".accordion-info:visible").length){
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-info").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-item .accordion-info").slideUp();
                    $this.find(" > .accordion-info").slideDown();
                }
            })
        })
        
        

        if($('.card-item-wrap').length){
            $('.card-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1000,
                loop: false,
                arrows:false,
                dots:true,
                infinite:false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.card-item-wrap').slick('resize');
        });
        
        
        if($('.info-card-item-wrap').length){
            $('.info-card-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1000,
                loop: false,
                arrows:false,
                dots:true,
                infinite:false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.info-card-item-wrap').slick('resize');
        });
        
        
        
        
      /*  product page */
        
        if ($("select.stylled-select").length) {
            $("select.stylled-select").selectric({
                onChange: function(element) {
                    $(this).parents('div.selectric-wrapper').addClass('value-changed')
                }
            });
        }
        
        // Show the first tab and hide the rest
        if($(window).width() > 767){
            $('.filter-tab-item-wrap .filter-tab-item')
            $('.filter-tab-item-wrap .filter-tab-item')
            $('.mattresses-category-content-wrap').hide();
            $('.mattresses-category-content-wrap').show();

            // Click function
            $('.filter-tab-item-wrap .filter-tab-item').click(function(){
                $('.filter-tab-item-wrap .filter-tab-item')

                $('.mattresses-category-content-wrap').hide();

                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn();
                return false; 
            });
        }

        $('div.filter-tab-item-wrap').each(function(){
            var $$_this = $(this)
            $$_this.find('.filter-tab-item').click(function () {
                $$_this.find('.filter-tab-item').removeClass('filter-tab-active');
                $(this).addClass('filter-tab-active');
            });
        })

        
   
         /* Tab */
    

            $(".tab-item  ul li").eq(0).addClass("tab-active")
            $(".tab-item  ul li").each(function (i) {
                $(this).click(function () {
                    if ($(this).hasClass("tab-active")) return false
                    else {
                        $(".tab-item  ul li").removeClass("tab-active")
                        $(this).addClass("tab-active")
                        $(".tab-info> div.tab-info-item").hide()
                        $(".tab-info > div.tab-info-item").eq(i).show()
                    }
                })
            });
      
        /* Tab */
        
        
        

        //  hero slide function 
        if($('#hero-slide').length){
            $('#hero-slide').slick({
                dots: true,
                arrows:false,
                autoplay:true,
                autoplaySpeed:5000,
                infinite: true,
                navigation:false,
                speed: 300,
                slidesToShow:1,
                slidesToScroll: 1,
            });
        }
        // End hero slide function 
        
        
        
        // this is tooltip modal
        if ($(window).width() > 1025) {
            $('.tooltip-icon').each(function () {
                $(this).mouseenter(function () {
                    $(this).find('.tooltip-content-wrap').stop(true, true).fadeIn();
                }).mouseleave(function () {
                    $(this).find('.tooltip-content-wrap').stop(true, true).fadeOut();
                })
            })
        }

        if ($(window).width() < 1025) {
            $('.tooltip-icon').each(function () {
                $(this).on('click', function (e) {
                    e.stopPropagation();
                    //$('body').addClass('modalOpen');
                    $(this).find('.tooltip-content-wrap').fadeIn();
                    $('.benefits-wrap').addClass('modalOpen');
                });
            });

            $('.close-icon').each(function () {
                $(this).on('click', function (e) {
                    e.stopPropagation();
                    // $('body').removeClass('modalOpen');
                    $('.tooltip-content-wrap').fadeOut();
                    $('.benefits-wrap').removeClass('modalOpen');
                });
            });

        }

        $('.tooltip-content').on('click, touchend', function (e) {
            e.stopPropagation();
        });

        $('body').on('click, touchend', function () {
            $('body').removeClass('modalOpen');
            $('.tooltip-content-wrap').fadeOut();
        });
        
        /*  Home  */


        /*  Timer Slider  */
        if($('#home-hero-slider').length){
            $("#home-hero-slider").slick({
                infinite: true,
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 4050,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }
        /*  Timer Slider  */

        if($('.advice-sleep-experts-item-wrap').length){
            $('.advice-sleep-experts-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1000,
                loop: false,
                arrows:false,
                dots:true,
                infinite:false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.advice-sleep-experts-item-wrap').slick('resize');
        });
        
        if($('.value-proposition-item-wrap').length){
            $('.value-proposition-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 1000,
                loop: false,
                centerMode:true,
                centerPadding: '37px',
                arrows:false,
                dots:true,
                infinite:false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },

                ]

            });
        }
        $(window).on('resize', function () {
            $('.value-proposition-item-wrap').slick('resize');
        });

        /*  Home  */

        if($('#testimonial-slider').length){
            $('#testimonial-slider').slick({
                dots: false,
                arrows:true,
                autoplay:false,
                autoplaySpeed:3000,
                centerMode: true,
                centerPadding: '0',
                navigation:false,
                infinite: true,
                loop: true,
                speed: 900,
                slidesToShow:3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            dots: true,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            centerPadding: '36px',
                            controlNav: false,
                            directionNav: false,
                            arrows: false,
                            loop: false,
                        }
                    },

                ]
            })
        }
        
        $('#testimonial-slider .slick-prev').addClass('disabled');
        $('#testimonial-slider .slick-next').click(function(){
            $('#testimonial-slider .slick-prev').removeClass('disabled');
        })
        
        /* Comfort Solution Page */

        if($(window).width() > 767){

            // Auto progressbar with slideshow

            //Init slide 1
            $("#feature-item-slider .feature-item").eq(0).addClass("feature-active");

            var setAnimate;

            $("#feature-item-slider .feature-item").click(function() {

                if( $(this).hasClass('feature-active') ) return false

                else{
                    clearInterval(setAnimate)

                    $("#feature-item-slider .feature-item").removeClass("feature-active");
                    $(this).addClass("feature-active");
                    setAnimate = animateIt()
                }


            });

            setAnimate = animateIt()

            function animateIt(){
                return setInterval(function(){
                    if ( $("#feature-item-slider .feature-item.feature-active").next().length == 0 ) {
                        nextActiveItem = $("#feature-item-slider .feature-item:first-child")
                    }

                    else{
                        nextActiveItem = $("#feature-item-slider .feature-item.feature-active").next()

                    }

                    $("#feature-item-slider .feature-item").removeClass("feature-active");

                    nextActiveItem.addClass('feature-active');

                }, 6000);

            }
        }
        
        // Show the first tab and hide the rest
        $('.frequently-tabs-nav .frequently-tab-triger:first-child').addClass('frequently-tab-active');
        $('.frequently-tab-content').hide();
        $('.frequently-tab-content:first').show();

        // Click function
        $('.frequently-tabs-nav .frequently-tab-triger').click(function(){
            $('.frequently-tabs-nav .frequently-tab-triger').removeClass('frequently-tab-active');
            $(this).addClass('frequently-tab-active');
            $('.frequently-tab-content').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        
        
        // Show the first tab and hide the rest
       if($(window).width() > 767){
            $('.account-item-left-tab-wrap .account-tabs-nav:first-child').addClass('account-tab-active');
            $('.account-tab-content').hide();
            $('.account-tab-content:first').show();

            // Click function
            $('.account-item-left-tab-wrap .account-tabs-nav').click(function(){
                $('.account-item-left-tab-wrap .account-tabs-nav').removeClass('account-tab-active');
                $(this).addClass('account-tab-active');
                $('.account-tab-content').hide();

                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn();
                return false;
            });
        }
        
        if($(window).width() < 768){
            if ($("select.order-select").length) {
                $("select.order-select").selectric({
                    onChange: function(element) {
                        var tchitem = $("#" + $("select.order-select option:selected").val());
                        var tchheight = tchitem.height() + 100;
                        $("#account-item-right").css({ height: tchitem + "px" });
                        $("#account-item-right > div.account-tab-content").removeClass("item-active");
                        tchitem.addClass("item-active");
                      }
                });
            }
            
        }
        

        
        // Accordion Function
        $(".frequently-accordion").each(function(){
            var $this = $(this);
            $this.find(" > p").on("click touch", function(){
                $(".frequently-accordion").removeClass("frequently-active")
                $(".frequently-accordion-text").slideUp();
                if($this.find(".frequently-accordion-text:visible").length){
                    $(".frequently-accordion").removeClass("frequently-active")
                    $(".frequently-accordion-text").slideUp();
                }
                else{
                    $this.addClass("frequently-active")
                    $(".frequently-accordion-text").slideUp();
                    $this.find(" > .frequently-accordion-text").slideDown();
                }
            })
        })

        /* Comfort Solution Page */
        
        
        var elements = $('.mattresses-category-accordion-content');

        $('.mattresses-category-modal-triger').click(function(){
            elements.addClass('modal-active');
        });

        $('.mattresses-close-modal').click(function(){
            elements.removeClass('modal-active');
        });
    
        

        /*product-special*/
    
        
        if ($(".filter-select").length) {
            $('.filter-select').selectric({
                optionsItemBuilder: function(itemData) {
                    return '<span class="ico ico-' + itemData.value +  '"></span>' + itemData.text;
                },
                labelBuilder: function(currItem) {
                    return '<span class="ico ico-' + currItem.value +  '"></span>' + currItem.text;
                }
            });
        }
        

        $('.mattresses-category-content-wrap').eq(0).addClass('filter-item-active');
        if ($("select.filter-select").length) {
            $("select.filter-select").selectric({
                onChange: function(element) {
                    var tchitem = $("#" + $("select.filter-select option:selected").val());
                    var tchheight = tchitem.height() + 100;
                    $("#mattresses-category").css({ height: tchitem + "px" });
                    $("#mattresses-category > div.mattresses-category-content-wrap").removeClass("filter-item-active");
                    tchitem.addClass("filter-item-active");
                }
            });
        }

      
        $(".check input").change(function() {
            if($(this).is(':checked')) 
                $(this).parents().addClass('selected'); 
            else 
                $(this).parents().removeClass('selected');
        });

        $('input:radio').click(function() {
            $('.quiz-1-size-item:has(input:radio:checked)').addClass('selected');
            $('.quiz-1-size-item:has(input:radio:not(:checked))').removeClass('selected');
        });


      /*  
        $(function() {
            $("input[name='radio-group']").click(function() {
                if ($(this).is(":checked")) {
                } else {
                    $("#different-name-wrap").slideUp();
                }
            });
        });*/
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

        //FAQs tab Function
        if($(window).width() > 767){
            $('.faq-tab-item-list li:first-child').addClass('faq-tab-active');
            $('.faq-tab-content').hide();
            $('.faq-tab-content:first').show();
            // Click function
            $('.faq-tab-item-list li').click(function(){
                $('.faq-tab-item-list li').removeClass('faq-tab-active');
                $(this).addClass('faq-tab-active');
                $('.faq-tab-content').hide();

                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn();
                return false;
            });
        }
        
        if($(window).width() < 768){
             if ($(".faq-select").length) {
            $('.faq-select').selectric({
                optionsItemBuilder: function(itemData) {
                    return '<span class="ico ico-' + itemData.value +  '"></span>' + itemData.text;
                },
                labelBuilder: function(currItem) {
                    return '<span class="ico ico-' + currItem.value +  '"></span>' + currItem.text;
                }
            });
            }
            
            $('.faq-tab-content').eq(0).addClass('faq-item-active');
            if ($("select.faq-select").length) {
                $("select.faq-select").selectric({
                    onChange: function(element) {
                        var tchitem = $("#" + $("select.faq-select option:selected").val());
                        var tchheight = tchitem.height() + 100;
                        $(".faq-tab-content-wrap").css({ height: tchitem + "px" });
                        $(".faq-tab-content-wrap > div.faq-tab-content").removeClass("faq-item-active");
                        tchitem.addClass("faq-item-active");
                      }
                });
            }
            
        }

        
        
        
        
        //FAQs Accordion Function
        $(".faq-tab-content .accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h4").on("click touch", function(){
                $(".accordion-item").removeClass("active")
                $(".accordion-text").slideUp();
                if($this.find(".accordion-text:visible").length){
                    $(".accordion-item").removeClass("active")
                    $(".accordion-text").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-text").slideUp();
                    $this.find(" > .accordion-text").slideDown();
                }
            })
        }); 
        
        
             
        
        
        
        
        
        
	})// End ready function.
   
    
    /* Slick needs no get Reinitialized on window Resize after it was destroyed */
    $(window).on('load resize orientationchange', function() {
        $('.carousel-wrap').each(function(){
            var $carousel = $(this);
            / Initializes a slick carousel only on mobile screens /
            // slick on mobile
            if ($(window).width() > 767) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: true,
                        infinite: true,
                        dots: false,
                        autoplay: true,
                        prevArrow: $('.billing-solutions-section .prev-btn'),
                        nextArrow: $('.billing-solutions-section .next-btn'),
                    });
                }
            }
        });
    });
    // End the solutin card carousel
    

    $('.apply-promo-code > h5').click(function(){
        $('.order-summary-item > h4').toggleClass('apply-promo-size');
    });
    
    
    
  /*  modal */
 
    $(document).on("click", ".search-button-wrap" , function() {
        $(".search-reasult-wrap").fadeIn(500)
        $("#search-trigger").focus();
        $("body").css({'position' : 'fixed'})  
     })
    
    $('.search-reasult-wrap').click(function(e){
        e.preventDefault();
        $(".search-reasult-wrap").fadeOut(500) 
        $("body").css({'position' : 'relative'}) 
    })
    
    $(".search-reasult-inner").click(function(e){
            e.stopPropagation();

    })
    
    if ($(window).width() > 767) {
        $('.modal-close-icon').click(function(){
            $(".search-reasult-wrap").fadeOut(500) 
            $("body").css({'position' : 'relative'}) 
         })
    }
    
    if ($(window).width() < 768) {
        $(document).on("click", ".search-button-wrap" , function() {
        $('.phone-nav').fadeOut()
        $('.mobi-header-bottom').fadeOut()
     })
        $('.close-icon,.search-reasult-wrap').click(function(){
            $(".search-reasult-wrap").fadeOut(500)  
             $('.phone-nav').fadeIn()
             $('.mobi-header-bottom').fadeIn()
            $("body").css({'position' : 'relative'})
         })
    }
   
  /*  modal */
    

})(jQuery)

