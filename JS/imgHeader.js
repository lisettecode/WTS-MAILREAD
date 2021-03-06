var $j = jQuery.noConflict();
var $scroll = 0;
var $window_width = $j(window).width();
var $window_height = $j(window).height();
var logo_height;
var menu_dropdown_height_set = false;
var sticky_amount = 0;
var content_menu_position;
var content_menu_top;
var content_menu_top_add = 0;
var src;
var next_image;
var prev_image;
var $top_header_height;
var min_w = 1500;
var video_width_original = 1280;
var video_height_original = 720;
var vid_ratio = 1280 / 720;
var skrollr_slider;

$j(document).ready(function() {
    "use strict";
    $j('.content').css('min-height', $j(window).height() - $j('header.page_header').height() - $j('footer').height());
    if ($j('header').hasClass('regular')) {
        content_menu_top = 0
    }
    if ($j('header').hasClass('fixed')) {
        content_menu_top = min_header_height_scroll
    }
    if ($j('header').hasClass('stick')) {
        content_menu_top = 0
    }
    if ((!$j('header.page_header').hasClass('scroll_top')) && ($j('header.page_header').hasClass('has_top')) && ($j('header.page_header').hasClass('fixed'))) {
        content_menu_top_add = 34
    }
    if ($j('body').hasClass('vertical_menu_enabled')) {
        content_menu_top = 0;
        content_menu_top_add = 0;
        var min_header_height_sticky = 0
    }
    setDropDownMenuPosition();
    initDropDownMenu();
    initVerticalMenuToggle();
    initVerticalMobileMenu();
    initQodeSlider();
    initSideMenu();
    initPopupMenu();
    initMessageHeight();
    initToCounter();
    initCounter();
    initProgressBars();
    initListAnimation();
    initPieChart();
    initPieChartWithIcon();
    initServiceAnimation();
    initParallaxTitle();
    initSideAreaScroll();
    initVerticalAreaMenuScroll();
    loadMore();
    prettyPhoto();
    initMobileMenu();
    initFlexSlider();
    fitVideo();
    fitAudio();
    initAccordion();
    initAccordionContentLink();
    initMessages();
    initProgressBarsIcon();
    initMoreFacts();
    placeholderReplace();
    backButtonShowHide();
    backToTop();
    initSteps();
    initProgressBarsVertical();
    initElementsAnimation();
    updateShoppingCart();
    initHashClick();
    checkAnchorOnScroll();
    initIconWithTextAnimation();
    initVideoBackground();
    initCheckSafariBrowser();
    initSearchButton();
    initCoverBoxes();
    createContentMenu();
    contentMenuScrollTo();
    createSelectContentMenu();
    initButtonHover();
    initSocialIconHover();
    if ($j(window).width() > 1000) {
        headerSize($scroll)
    } else {
        logoSizeOnSmallScreens()
    }
    $j([theme_root + 'img/logo.png']).preload();
    $j('.widget #searchform').mousedown(function() {
        $j(this).addClass('form_focus')
    }).focusout(function() {
        $j(this).removeClass('form_focus')
    });
    $scroll = $j(window).scrollTop();
    checkTitleToShowOrHide();
    checkVerticalMenuTransparency();
    if ($j(window).width() > 1000) {
        headerSize($scroll)
    }
    if ($j(window).width() > 768) {
        contentMenuPosition()
    }
    contentMenuCheckLastSection();
    $j('.q_logo a').css('visibility', 'visible')
});
$j(window).load(function() {
    "use strict";
    $j('.touch .main_menu li:has(div.second)').doubleTapToGo();
    initSmallImageBlogHeight();
    setDropDownMenuPosition();
    initDropDownMenu();
    initPortfolio();
    initPortfolioZIndex();
    initPortfolioSingleInfo();
    initTestimonials();
    initVideoBackgroundSize();
    initBlog();
    initBlogMasonryFullWidth();
    initQBlog();
    initPortfolioMasonry();
    initPortfolioMasonryFilter();
    initTabs();
    countClientsPerRow();
    animatedTextIconHeight();
    countAnimatedTextIconPerRow();
    initTitleAreaAnimation();
    setContentBottomMargin();
    footerWidth();
    $j('.side_menu').css({
        'right': '0px'
    });
    checkAnchorOnLoad();
    if ($j('nav.content_menu').length > 0) {
        content_menu_position = $j('nav.content_menu').offset().top;
        contentMenuPosition()
    }
    contentMenuCheckLastSection();
    initQodeCarousel();
    initPortfolioSlider();
    initTabsActiveBorder();
    setActiveTabBorder();
    initImageHover();
    initParallax()
});
$j(window).scroll(function() {
    "use strict";
    $scroll = $j(window).scrollTop();
    if ($j(window).width() > 1000) {
        headerSize($scroll)
    }
    if ($j(window).width() > 768) {
        contentMenuPosition()
    }
    contentMenuCheckLastSection();
    checkVerticalMenuTransparency();
    $j('.touch .drop_down > ul > li').mouseleave();
    $j('.touch .drop_down > ul > li').blur()
});
$j(window).resize(function() {
    "use strict";
    $window_width = $j(window).width();
    $window_height = $j(window).height();
    if ($j(window).width() > 1000) {
        headerSize($scroll)
    } else {
        logoSizeOnSmallScreens()
    }
    initMessageHeight();
    initTestimonials();
    fitAudio();
    initSmallImageBlogHeight();
    initBlog();
    initBlogMasonryFullWidth();
    initQBlog();
    initMoreFacts();
    animatedTextIconHeight();
    countAnimatedTextIconPerRow();
    initVideoBackgroundSize();
    countClientsPerRow();
    setContentBottomMargin();
    footerWidth();
    calculateHeights()
});
var sticky_animate;

function headerSize($scroll) {
    "use strict";
    if (($j('header.page_header').hasClass('scroll_top')) && ($j('header.page_header').hasClass('has_top')) && ($j('header.page_header').hasClass('fixed'))) {
        if ($scroll >= 0 && $scroll <= 34) {
            $j('header.page_header').css('top', -$scroll);
            $j('header.page_header').css('margin-top', 0);
            $j('.header_top').show()
        } else if ($scroll > 34) {
            $j('header.page_header').css('top', '-34px');
            $j('header.page_header').css('margin-top', 34);
            $j('.header_top').hide()
        }
    }
    if ($j('.carousel.full_screen').length) {
        sticky_amount = $j('.carousel').height()
    } else {
        if (typeof page_scroll_amount_for_sticky !== 'undefined') {
            sticky_amount = page_scroll_amount_for_sticky
        } else {
            sticky_amount = scroll_amount_for_sticky
        }
    }
    if ($j('header').hasClass('regular')) {
        if (header_height - logo_height >= 10) {
            $j('.q_logo a').height(logo_height)
        } else {
            $j('.q_logo a').height(header_height - 10)
        }
        $j('.q_logo a img').css('height', '100%')
    }
    if ($j('header.page_header').hasClass('fixed')) {
        if ($j('header.page_header').hasClass('scroll_top')) {
            $top_header_height = 34
        } else {
            $top_header_height = 0
        }
        if ((header_height - $scroll + $top_header_height >= min_header_height_scroll) && ($scroll >= $top_header_height)) {
            $j('header.page_header').removeClass('scrolled');
            $j('header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a').css('line-height', header_height - $scroll + $top_header_height + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .side_menu_button').css('height', header_height - $scroll + $top_header_height + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner').css('height', header_height - $scroll + $top_header_height + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .logo_wrapper').css('height', header_height - $scroll + $top_header_height + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .q_logo a').css('height', (header_height - $scroll + $top_header_height - 10) + 'px')
        } else if ($scroll < $top_header_height) {
            $j('header.page_header').removeClass('scrolled');
            $j('header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a').css('line-height', header_height + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .side_menu_button').css('height', header_height + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner').css('height', header_height + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .logo_wrapper').css('height', header_height + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .q_logo a').css('height', (header_height - 10) + 'px')
        } else if ((header_height - $scroll + $top_header_height) < min_header_height_scroll) {
            $j('header.page_header').addClass('scrolled');
            $j('header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a').css('line-height', min_header_height_scroll + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .side_menu_button').css('height', min_header_height_scroll + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner').css('height', min_header_height_scroll + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .logo_wrapper').css('height', min_header_height_scroll + 'px');
            $j('header:not(.centered_logo.centered_logo_animate) .q_logo a').css('height', (min_header_height_scroll - 10) + 'px')
        }
        if ($j('header.page_header').hasClass('centered_logo') && $j('header.page_header').hasClass('centered_logo_animate')) {
            if ((header_height - $scroll + $top_header_height < logo_height) && (header_height - $scroll + $top_header_height >= min_header_height_scroll) && (logo_height > min_header_height_scroll - 10) && ($scroll >= $top_header_height)) {
                $j('.q_logo a').height(header_height - $scroll + $top_header_height - 10)
            } else if ((header_height - $scroll + $top_header_height < logo_height) && (header_height - $scroll + $top_header_height >= min_header_height_scroll) && (logo_height > min_header_height_scroll - 10) && ($scroll < $top_header_height)) {
                $j('.q_logo a').height(header_height - 10)
            } else if ((header_height - $scroll + $top_header_height < logo_height) && (header_height - $scroll + $top_header_height < min_header_height_scroll) && (logo_height > min_header_height_scroll - 10)) {
                $j('.q_logo a').height(min_header_height_scroll - 10)
            } else if ((header_height - $scroll + $top_header_height < logo_height) && (header_height - $scroll + $top_header_height < min_header_height_scroll) && (logo_height < min_header_height_scroll - 10)) {
                $j('.q_logo a').height(logo_height)
            } else if (($scroll + $top_header_height === 0) && (logo_height > header_height - 10)) {
                $j('.q_logo a').height(logo_height)
            } else {
                $j('.q_logo a').height(logo_height)
            }
        } else if ($j('header.page_header').hasClass('centered_logo')) {
            $j('.q_logo a').height(logo_height);
            $j('.q_logo img').height('auto')
        } else {
            $j('.q_logo img').height('100%')
        }
    }
    if ($j('header.page_header').hasClass('fixed_hiding')) {
        if ($scroll < 200) {
            $j('header.page_header').removeClass('scrolled')
        } else {
            $j('header.page_header').addClass('scrolled')
        }
        $j('.q_logo a').height(logo_height / 2);
        $j('.q_logo img').height('100%')
    }
    if ($j('header.page_header').hasClass('stick')) {
        if ($scroll > sticky_amount) {
            if (!$j('header.page_header').hasClass('sticky')) {
                if ($j('header.page_header').hasClass('has_top')) {
                    $top_header_height = 34
                } else {
                    $top_header_height = 0
                }
                var padding_top = $j('header.page_header').hasClass('centered_logo') ? $j('header.page_header').height() : header_height + $top_header_height;
                $j('header.page_header').addClass('sticky');
                $j('.content').css('padding-top', padding_top);
                window.clearTimeout(sticky_animate);
                sticky_animate = window.setTimeout(function() {
                    $j('header.page_header').addClass('sticky_animate')
                }, 100);
                if (min_header_height_sticky - logo_height >= 10) {
                    $j('.q_logo a').height(logo_height)
                } else {
                    $j('.q_logo a').height(min_header_height_sticky - 10)
                }
                if ($j('header.page_header').hasClass('menu_bottom')) {
                    initDropDownMenu()
                }
            }
            if (min_header_height_sticky - logo_height >= 10) {
                $j('.q_logo a').height(logo_height)
            } else {
                $j('.q_logo a')
                    .height(min_header_height_sticky - 10)
            }
        } else {
            if ($j('header.page_header').hasClass('sticky')) {
                $j('header').removeClass('sticky_animate');
                $j('header').removeClass('sticky');
                $j('.content').css('padding-top', '0px');
                if ($j('header.page_header').hasClass('menu_bottom')) {
                    initDropDownMenu()
                }
            }
            if (!$j('header.page_header').hasClass('centered_logo')) {
                if (header_height - logo_height >= 10) {
                    $j('.q_logo a').height(logo_height)
                } else {
                    $j('.q_logo a').height(header_height - 10)
                }
            } else {
                $j('.q_logo a').height(logo_height);
                $j('.q_logo img').height('auto')
            }
            $j('.q_logo a img').css('height', '100%')
        }
    }
}

function logoSizeOnSmallScreens() {
    "use strict";
    if ((100 - 20 < logo_height)) {
        $j('.q_logo a').height(100 - 20)
    } else {
        $j('.q_logo a').height(logo_height)
    }
    $j('.q_logo a img').css('height', '100%');
    $j('header.page_header').removeClass('sticky_animate sticky');
    $j('.content').css('padding-top', '0px')
}
var default_header_style;

function initQodeSlider() {
    "use strict";
    var image_regex = /url\(["']?([^'")]+)['"]?\)/;
    default_header_style = "";
    if ($j('header.page_header').hasClass('light')) {
        default_header_style = 'light'
    }
    if ($j('header.page_header').hasClass('dark')) {
        default_header_style = 'dark'
    }
    if ($j('.carousel').length) {
        $j('.carousel').each(function() {
            var $this = $j(this);
            var mobile_header;
            if ($this.hasClass('full_screen')) {
                mobile_header = $j(window).width() < 1000 ? $j('header.page_header').height() - 6 : 0;
                $this.css({
                    'height': ($j(window).height() - mobile_header) + 'px'
                });
                $this.find('.qode_slider_preloader').css({
                    'height': ($j(window).height() - mobile_header) + 'px'
                });
                $this.find('.qode_slider_preloader .ajax_loader').css({
                    'display': 'block'
                });
                $this.find('.item').css({
                    'height': ($j(window).height() - mobile_header) + 'px'
                });
                $j(window).resize(function() {
                    var mobile_header = $j(window).width() < 1000 ? $j('header.page_header').height() - 6 : 0;
                    $this.css({
                        'height': ($j(window).height() - mobile_header) + 'px'
                    });
                    $this.find('.item').css({
                        'height': ($j(window).height() - mobile_header) + 'px'
                    })
                })
            } else if ($this.hasClass('responsive_height')) {
                mobile_header = $j(window).width() < 1000 ? $j('header.page_header').height() - 6 : 0;
                var $def_height = $this.data('height');
                $this.find('.qode_slider_preloader').css({
                    'height': ($this.height() - mobile_header) + 'px',
                    'display': 'block'
                });
                var slider_height = $def_height;
                if ($window_width > 1300) {
                    var slider_height = $def_height
                } else if ($window_width <= 1300 && $window_width > 1000) {
                    var slider_height = $def_height * 0.8
                } else if ($window_width <= 1000 && $window_width > 768) {
                    var slider_height = $def_height * 0.7
                } else if ($window_width <= 768) {
                    var slider_height = $def_height * 1
                }
                $this.css({
                    'height': (slider_height) + 'px'
                });
                $this.find('.qode_slider_preloader').css({
                    'height': (slider_height) + 'px'
                });
                $this.find('.qode_slider_preloader .ajax_loader').css({
                    'display': 'block'
                });
                $this.find('.item').css({
                    'height': (slider_height) + 'px'
                });
                $j(window).resize(function() {
                    if ($window_width > 1300) {
                        var slider_height = $def_height
                    } else if ($window_width <= 1300 && $window_width > 1000) {
                        var slider_height = $def_height * 0.8
                    } else if ($window_width <= 1000 && $window_width > 768) {
                        var slider_height = $def_height * 0.6
                    } else if ($window_width <= 768) {
                        var slider_height = $def_height * 1
                    }
                    $this.css({
                        'height': (slider_height) + 'px'
                    });
                    $this.find('.item').css({
                        'height': (slider_height) + 'px'
                    })
                })
            } else {
                mobile_header = $j(window).width() < 1000 ? $j('header.page_header').height() - 6 : 0;
                $this.find('.qode_slider_preloader').css({
                    'height': ($this.height() - mobile_header) + 'px',
                    'display': 'block'
                });
                $this.find('.qode_slider_preloader .ajax_loader').css({
                    'display': 'block'
                })
            }
            if ($j('body:not(.boxed):not(.vertical_menu_transparency)').hasClass('vertical_menu_enabled') && $j(window).width() > 1000) {
                $this.find('.carousel-inner').width($window_width - 260);
                $j(window).resize(function() {
                    if ($j(window).width() > 1000) {
                        $this.find('.carousel-inner').width($window_width - 260)
                    } else {
                        $this.find('.carousel-inner').css('width', '100%')
                    }
                })
            }
            $j(window).scroll(function() {
                if ($scroll > $j(window).height() && $j(window).width() > 1000) {
                    $this.find('.carousel-inner, .carousel-indicators, button').hide()
                } else {
                    $this.find('.carousel-inner, .carousel-indicators, button').show()
                }
            });
            var $slide_animation = $this.data('slide_animation');
            if ($slide_animation === "") {
                $slide_animation = 6000
            }
            var all_items_count = $j('div.item').length;

            function setPrevNextNumbers(curr_item, all_items_count) {
                if (curr_item == 1) {
                    $this.find('.left.carousel-control .prev').html(all_items_count);
                    $this.find('.right.carousel-control .next').html(curr_item + 1)
                } else if (curr_item == all_items_count) {
                    $this.find('.left.carousel-control .prev').html(curr_item - 1);
                    $this.find('.right.carousel-control .next').html(1)
                } else {
                    $this.find('.left.carousel-control .prev').html(curr_item - 1);
                    $this.find('.right.carousel-control .next').html(curr_item + 1)
                }
            }

            function initSlider() {
                $this.find('.carousel-inner .item:first-child').addClass('active');
                checkSliderForHeaderStyle($j('.carousel .active'), $this.hasClass('header_effect'));
                if ($this.hasClass('slider_thumbs')) {
                    setPrevNextNumbers(1, all_items_count);
                    if ($this.find('.active').next('div').find('.image').length) {
                        src = image_regex.exec($this.find('.active').next('div').find('.image').attr('style'));
                        next_image = new Image();
                        next_image.src = src[1]
                    } else {
                        next_image = $this.find('.active').next('div').find('> .video').clone();
                        next_image.find('.video-overlay').remove();
                        next_image.find('.video-wrap').width(170).height(95);
                        next_image.find('.mejs-container').width(170).height(95);
                        next_image.find('video').width(170).height(95)
                    }
                    $this.find('.right.carousel-control .img').html(next_image).find('img, div.video').addClass('old');
                    if ($this.find('.carousel-inner .item:last-child .image').length) {
                        src = image_regex.exec($this.find('.carousel-inner .item:last-child .image').attr('style'));
                        prev_image = new Image();
                        prev_image.src = src[1]
                    } else {
                        prev_image = $this.find('.carousel-inner .item:last-child > .video').clone();
                        prev_image.find('.video-overlay').remove();
                        prev_image.find('.video-wrap').width(170).height(95);
                        prev_image.find('.mejs-container').width(170).height(95);
                        prev_image.find('video').width(170).height(95)
                    }
                    $this.find('.left.carousel-control .img').html(prev_image).find('img, div.video').addClass('old')
                }
                if ($this.hasClass('q_auto_start')) {
                    $this.carousel({
                        interval: $slide_animation,
                        pause: false
                    })
                } else {
                    $this.carousel({
                        interval: 0,
                        pause: false
                    })
                }
                if ($this.find('.item video').length) {
                    initVideoBackgroundSize()
                }
            }
            if ($j('html').hasClass('touch')) {
                if ($this.find('.item:first-child .mobile-video-image').length > 0) {
                    src = image_regex.exec($this.find('.item:first-child .mobile-video-image').attr('style'));
                    if (src) {
                        var backImg = new Image();
                        backImg.src = src[1];
                        $j(backImg).load(function() {
                            $j('.qode_slider_preloader').fadeOut(500);
                            initSlider()
                        })
                    }
                } else {
                    src = image_regex.exec($this.find('.item:first-child .image').attr('style'));
                    if (src) {
                        var backImg = new Image();
                        backImg.src = src[1];
                        $j(backImg).load(function() {
                            $j('.qode_slider_preloader').fadeOut(500);
                            initSlider()
                        })
                    }
                }
            } else {
                if ($this.find('.item:first-child video').length > 0) {
                    $this.find('.item:first-child video').get(0).addEventListener('loadeddata', function() {
                        $j('.qode_slider_preloader').fadeOut(500);
                        initSlider()
                    })
                } else {
                    src = image_regex.exec($this.find('.item:first-child .image').attr('style'));
                    if (src) {
                        var backImg = new Image();
                        backImg.src = src[1];
                        $j(backImg).load(function() {
                            $j('.qode_slider_preloader').fadeOut(500);
                            initSlider()
                        })
                    }
                }
            }
            $this.on('slide.bs.carousel', function() {
                $this.addClass('in_progress');
                $this.find('.active .slider_content_outer').fadeTo(800, 0)
            });
            $this.on('slid.bs.carousel', function() {
                $this.removeClass('in_progress');
                $this.find('.active .slider_content_outer').fadeTo(0, 1);
                if ($this.hasClass('slider_thumbs')) {
                    var curr_item = $j('div.item').index($j('div.item.active')[0]) + 1;
                    setPrevNextNumbers(curr_item, all_items_count);
                    if ($this.find('.active').prev('div.item').length) {
                        if ($this.find('.active').prev('div').find('.image').length) {
                            src = image_regex.exec($this.find('.active').prev('div').find('.image').attr('style'));
                            prev_image = new Image();
                            prev_image.src = src[1]
                        } else {
                            prev_image = $this.find('.active').prev('div').find('> .video').clone();
                            prev_image.find('.video-overlay').remove();
                            prev_image.find('.video-wrap').width(170).height(95);
                            prev_image.find('.mejs-container').width(170).height(95);
                            prev_image.find('video').width(170).height(95)
                        }
                        $this.find('.left.carousel-control .img .old').fadeOut(300, function() {
                            $j(this).remove()
                        });
                        $this.find('.left.carousel-control .img').append(prev_image).find('img, div.video').fadeIn(300).addClass('old')
                    } else {
                        if ($this.find('.carousel-inner .item:last-child .image').length) {
                            src = image_regex.exec($this.find('.carousel-inner .item:last-child .image').attr('style'));
                            prev_image = new Image();
                            prev_image.src = src[1]
                        } else {
                            prev_image = $this.find('.carousel-inner .item:last-child > .video').clone();
                            prev_image.find('.video-overlay').remove();
                            prev_image.find('.video-wrap').width(170).height(95);
                            prev_image.find('.mejs-container').width(170).height(95);
                            prev_image.find('video').width(170).height(95)
                        }
                        $this.find('.left.carousel-control .img .old').fadeOut(300, function() {
                            $j(this).remove()
                        });
                        $this.find('.left.carousel-control .img').append(prev_image).find('img, div.video').fadeIn(300).addClass('old')
                    }
                    if ($this.find('.active').next('div.item').length) {
                        if ($this.find('.active').next('div').find('.image').length) {
                            src = image_regex.exec($this.find('.active').next('div').find('.image').attr('style'));
                            next_image = new Image();
                            next_image.src = src[1]
                        } else {
                            next_image = $this.find('.active').next('div').find('> .video').clone();
                            next_image.find('.video-overlay').remove();
                            next_image.find('.video-wrap').width(170).height(95);
                            next_image.find('.mejs-container').width(170).height(95);
                            next_image.find('video').width(170).height(95)
                        }
                        $this.find('.right.carousel-control .img .old').fadeOut(300, function() {
                            $j(this).remove()
                        });
                        $this.find('.right.carousel-control .img').append(next_image).find('img, div.video').fadeIn(300).addClass('old')
                    } else {
                        if ($this.find('.carousel-inner .item:first-child .image').length) {
                            src = image_regex.exec($this.find('.carousel-inner .item:first-child .image').attr('style'));
                            next_image = new Image();
                            next_image.src = src[1]
                        } else {
                            next_image = $this.find('.carousel-inner .item:first-child > .video')
                                .clone();
                            next_image.find('.video-overlay').remove();
                            next_image.find('.video-wrap').width(170).height(95);
                            next_image.find('.mejs-container').width(170).height(95);
                            next_image.find('video').width(170).height(95)
                        }
                        $this.find('.right.carousel-control .img .old').fadeOut(300, function() {
                            $j(this).remove()
                        });
                        $this.find('.right.carousel-control .img').append(next_image).find('img, div.video').fadeIn(300).addClass('old')
                    }
                }
            });
            $this.swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    $this.carousel('next')
                },
                swipeRight: function(event, direction, distance, duration, fingerCount) {
                    $this.carousel('prev')
                },
                threshold: 20
            })
        });
        if ($j('.carousel').data('parallax') == 'yes') {
            if ($j('.no-touch .carousel').length) {
                skrollr_slider = skrollr.init({
                    edgeStrategy: 'set',
                    smoothScrolling: true,
                    forceHeight: false
                });
                skrollr_slider.refresh()
            }
        }
    }
}

function checkSliderForHeaderStyle($this, header_effect) {
    "use strict";
    var slide_header_style = "";
    var navigation_color = $this.data('navigation-color');
    if ($this.hasClass('light')) {
        slide_header_style = 'light'
    }
    if ($this.hasClass('dark')) {
        slide_header_style = 'dark'
    }
    if (slide_header_style !== "") {
        if (header_effect) {
            $j('header.page_header').removeClass('dark light').addClass(slide_header_style);
            $j('aside.vertical_menu_area').removeClass('dark light').addClass(slide_header_style)
        }
        $j('.carousel .carousel-control, .carousel .carousel-indicators').removeClass('dark light').addClass(slide_header_style)
    } else {
        if (header_effect) {
            $j('header.page_header').removeClass('dark light').addClass(default_header_style);
            $j('aside.vertical_menu_area').removeClass('dark light').addClass(default_header_style)
        }
        $j('.carousel .carousel-control, .carousel .carousel-indicators').removeClass('dark light').addClass(default_header_style)
    }
    if (navigation_color !== undefined) {
        $j('.carousel-control .thumb_holder .thumb_top, .carousel-indicators li').css('background-color', navigation_color);
        $j('.carousel-control .prev_nav, .carousel-control .next_nav').css('border-color', navigation_color);
        $j('.carousel-control .prev_nav i, .carousel-control .next_nav i').css('color', navigation_color)
    } else {
        $j('.carousel-control .thumb_holder .thumb_top, .carousel-indicators li').css('background-color', '');
        $j('.carousel-control .prev_nav, .carousel-control .next_nav').css('border-color', '');
        $j('.carousel-control .prev_nav i, .carousel-control .next_nav i').css('color', '')
    }
}

function calculateHeights() {
    if ($j('.portfolio_slides').length) {
        $j('.portfolio_slides').each(function() {
            $j(this).parents('.caroufredsel_wrapper').css({
                'height': ($j(this).find('li.item').outerHeight() - 3) + 'px'
            })
        })
    }
    if ($j('.qode_carousels .slides').length) {
        $j('.qode_carousels .slides').each(function() {
            $j(this).parents('.caroufredsel_wrapper').css({
                'height': ($j(this).find('li.item').outerHeight()) + 'px'
            })
        })
    }
}

function initQodeCarousel() {
    "use strict";
    if ($j('.qode_carousels').length) {
        $j('.qode_carousels').each(function() {
            var itemWidth = ($j(this).parents('.grid_section').length == 1) ? 170 : 315;
            $j(this).find('.slides').carouFredSel({
                circular: true,
                responsive: true,
                scroll: {
                    items: 1,
                    duration: 1000,
                    pauseOnHover: false
                },
                items: {
                    width: itemWidth,
                    visible: {
                        min: 1,
                        max: 6
                    }
                },
                auto: true,
                mousewheel: false,
                swipe: {
                    onMouse: true,
                    onTouch: true
                }
            }).animate({
                'opacity': 1
            }, 1000)
        });
        calculateHeights()
    }
}

function initPortfolioSlider() {
    "use strict";
    if ($j('.portfolio_slider').length) {
        $j('.portfolio_slider').each(function() {
            var maxItems = ($j(this).parents('.grid_section').length == 1) ? 3 : 'auto';
            var itemWidth = ($j(this).parents('.grid_section').length == 1) ? 353 : 500;
            $j('.portfolio_slides').carouFredSel({
                circular: true,
                responsive: true,
                scroll: 1,
                prev: {
                    button: function() {
                        return $j(this).parent().siblings('.caroufredsel-direction-nav').find('#caroufredsel-prev')
                    }
                },
                next: {
                    button: function() {
                        return $j(this).parent().siblings('.caroufredsel-direction-nav').find('#caroufredsel-next')
                    }
                },
                items: {
                    width: itemWidth,
                    visible: {
                        min: 1,
                        max: maxItems
                    }
                },
                auto: false,
                mousewheel: false,
                swipe: {
                    onMouse: true,
                    onTouch: true
                }
            }).animate({
                'opacity': 1
            }, 1000)
        });
        calculateHeights();
        $j('.portfolio_slider .flex-direction-nav a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation()
        })
    }
}
var current_scroll;

function initSideMenu() {
    "use strict";
    $j('.side_menu_button_wrapper a.side_menu_button_link,  a.close_side_menu').click(function(e) {
        e.preventDefault();
        if (!$j('.side_menu_button_wrapper a.side_menu_button_link').hasClass('opened')) {
            $j('.side_menu').css({
                'visibility': 'visible'
            });
            $j(this).addClass('opened');
            $j('body').addClass('right_side_menu_opened');
            current_scroll = $j(window).scrollTop();
            $j(window).scroll(function() {
                if (Math.abs($scroll - current_scroll) > 400) {
                    $j('body').removeClass('right_side_menu_opened');
                    $j('.side_menu_button_wrapper a').removeClass('opened');
                    var hide_side_menu = setTimeout(function() {
                        $j('.side_menu').css({
                            'visibility': 'hidden'
                        });
                        clearTimeout(hide_side_menu)
                    }, 400)
                }
            })
        } else {
            $j('.side_menu_button_wrapper a.side_menu_button_link').removeClass('opened');
            $j('body').removeClass('right_side_menu_opened');
            var hide_side_menu = setTimeout(function() {
                $j('.side_menu').css({
                    'visibility': 'hidden'
                });
                clearTimeout(hide_side_menu)
            }, 400)
        }
    })
}

function setDropDownMenuPosition() {
    "use strict";
    var menu_items = $j(".drop_down > ul > li.narrow");
    menu_items.each(function(i) {
        var browser_width = $j(window).width() - 16;
        var menu_item_position = $j(menu_items[i]).offset().left;
        var sub_menu_width = $j(menu_items[i]).find('.second .inner ul').width();
        var menu_item_from_left = browser_width - menu_item_position + 25;
        var sub_menu_from_left;
        if ($j(menu_items[i]).find('li.sub').length > 0) {
            sub_menu_from_left = browser_width - menu_item_position - sub_menu_width + 20
        }
        if (menu_item_from_left < sub_menu_width || sub_menu_from_left < sub_menu_width) {
            $j(menu_items[i]).find('.second').addClass('right');
            $j(menu_items[i]).find('.second .inner ul').addClass('right')
        }
    })
}

function initDropDownMenu() {
    "use strict";
    var menu_items = $j('.drop_down > ul > li');
    menu_items.each(function(i) {
        if ($j(menu_items[i]).find('.second').length > 0) {
            if ($j(menu_items[i]).hasClass('wide')) {
                var dropdown = $j(this).find('.inner > ul');
                var dropdownPadding = parseInt(dropdown.css('padding-left').slice(0, -2)) + parseInt(dropdown.css('padding-right').slice(0, -2));
                if (!$j(this).hasClass('left_position') && !$j(this).hasClass('right_position')) {
                    $j(this).find('.second').css('left', 0)
                }
                var tallest = 0;
                $j(this).find('.second > .inner > ul > li').each(function() {
                    var thisHeight = $j(this).height();
                    if (thisHeight > tallest) {
                        tallest = thisHeight
                    }
                });
                $j(this).find('.second > .inner > ul > li').height(tallest);
                var row_number;
                if ($j(this).find('.second > .inner > ul > li').length > 4) {
                    row_number = 4
                } else {
                    row_number = $j(this).find('.second > .inner > ul > li').length
                }
                var width = row_number * ($j(this).find('.second > .inner > ul > li').outerWidth());
                $j(this).find('.second > .inner > ul').width(width);
                if (!$j(this).hasClass('left_position') && !$j(this).hasClass('right_position')) {
                    var left_position = ($j(window).width() - 2 * ($j(window).width() - $j(this).find('.second').offset().left)) / 2 + (width + dropdownPadding) / 2;
                    $j(this).find('.second').css('left', -left_position)
                }
            }
            if (!menu_dropdown_height_set) {
                $j(menu_items[i]).data('original_height', $j(menu_items[i]).find('.second').height() + 'px');
                $j(menu_items[i]).find('.second').height(0)
            }
            if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
                $j(menu_items[i]).on("touchstart mouseenter", function() {
                    $j(menu_items[i]).find('.second').css({
                        'height': $j(menu_items[i]).data('original_height'),
                        'overflow': 'visible',
                        'visibility': 'visible',
                        'opacity': '1'
                    })
                }).on("mouseleave", function() {
                    $j(menu_items[i]).find('.second').css({
                        'height': '0px',
                        'overflow': 'hidden',
                        'visivility': 'hidden',
                        'opacity': '0'
                    })
                })
            } else {
                var config = {
                    interval: 0,
                    over: function() {
                        setTimeout(function() {
                            $j(menu_items[i]).find('.second').addClass('drop_down_start');
                            $j(menu_items[i]).find('.second').stop().css({
                                'height': $j(menu_items[i]).data('original_height')
                            })
                        }, 150)
                    },
                    timeout: 150,
                    out: function() {
                        $j(menu_items[i]).find('.second').stop().css({
                            'height': '0px'
                        });
                        $j(menu_items[i]).find('.second').removeClass('drop_down_start')
                    }
                };
                $j(menu_items[i]).hoverIntent(config)
            }
        }
    });
    $j('.drop_down ul li.wide ul li a').on('click', function() {
        var $this = $j(this);
        setTimeout(function() {
            $this.mouseleave()
        }, 500)
    });
    menu_dropdown_height_set = true
}

function initVerticalMenuToggle() {
    "use strict";
    var menu_items = $j('.no-touch .vertical_menu_toggle > ul > li');
    var menu_items_2 = $j('.no-touch .vertical_menu_toggle ul li ul li');
    menu_items.each(function(i) {
        if ($j(menu_items[i]).hasClass('has_sub')) {
            var subitems_number = $j(menu_items[i]).find('.inner > ul > li').length;
            $j(menu_items[i]).hoverIntent({
                over: function() {
                    $j(menu_items[i]).addClass('open');
                    $j(menu_items[i]).find('.second').slideDown(subitems_number * 40, 'easeInOutSine', function() {
                        $j('.vertical_menu_area.with_scroll').getNiceScroll().resize()
                    })
                },
                out: function() {
                    $j(menu_items[i]).removeClass('open');
                    $j(menu_items[i]).find('.second').slideUp(subitems_number * 40, 'easeInOutSine')
                },
                timeout: 1000
            })
        }
    });
    menu_items_2.each(function(i) {
        if ($j(menu_items_2[i]).hasClass('menu-item-has-children')) {
            var subitems_number = $j(menu_items_2[i]).find('ul > li').length;
            $j(menu_items_2[i]).hoverIntent({
                over: function() {
                    $j(menu_items_2[i]).addClass('open');
                    $j(menu_items_2[i]).find('ul').slideDown(subitems_number * 40, 'easeInOutSine', function() {
                        $j('.vertical_menu_area.with_scroll').getNiceScroll().resize()
                    })
                },
                out: function() {
                    $j(menu_items_2[i]).removeClass('open');
                    $j(menu_items_2[i]).find('ul').slideUp(subitems_number * 40, 'easeInOutSine')
                },
                timeout: 1000
            })
        }
    })
}

function initVerticalMobileMenu() {
    "use strict";
    $j('.touch .vertical_menu_toggle > ul > li.has_sub > a .plus').on('tap click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        if ($j(this).parent().next('div.second').is(":visible")) {
            $j(this).parents('.touch .vertical_menu_toggle > ul > li.has_sub')
                .removeClass('open');
            $j(this).parent().next('div.second').slideUp(200)
        } else {
            $j(this).parents('.touch .vertical_menu_toggle > ul > li.has_sub').addClass('open');
            $j(this).parent().next('div.second').slideDown(200)
        }
    });
    $j('.touch .vertical_menu_toggle ul li ul li > a .plus').on('tap click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        if ($j(this).parent().next('ul').is(":visible")) {
            $j(this).parents('.touch .vertical_menu_toggle ul li ul li').removeClass('open');
            $j(this).parent().next('ul').slideUp(200)
        } else {
            $j(this).parents('.touch .vertical_menu_toggle ul li ul li').addClass('open');
            $j(this).parent().next('ul').slideDown(200)
        }
    })
}

function checkVerticalMenuTransparency() {
    if ($scroll !== 0) {
        $j('body.vertical_menu_transparency').removeClass('vertical_menu_transparency_on')
    } else {
        $j('body.vertical_menu_transparency').addClass('vertical_menu_transparency_on')
    }
}(function($) {
    "use strict";
    $.fn.countTo = function(options) {
        options = $.extend({}, $.fn.countTo.defaults, options || {});
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;
        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));
                if (typeof(options.onUpdate) === 'function') {
                    options.onUpdate.call(_this, value)
                }
                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;
                    if (typeof(options.onComplete) === 'function') {
                        options.onComplete.call(_this, value)
                    }
                }
            }
        })
    };
    $.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    }
})(jQuery);

function initToCounter() {
    "use strict";
    if ($j('.counter.zero').length) {
        $j('.counter.zero').each(function() {
            if (!$j(this).hasClass('executed')) {
                $j(this).addClass('executed');
                $j(this).appear(function() {
                    $j(this).parent().css('opacity', '1');
                    var $max = parseFloat($j(this).text());
                    $j(this).countTo({
                        from: 0,
                        to: $max,
                        speed: 1500,
                        refreshInterval: 100
                    })
                }, {
                    accX: 0,
                    accY: -200
                })
            }
        })
    }
}

function initCounter() {
    "use strict";
    if ($j('.counter.random').length) {
        $j('.counter.random').each(function() {
            if (!$j(this).hasClass('executed')) {
                $j(this).addClass('executed');
                $j(this).appear(function() {
                    $j(this).parent().css('opacity', '1');
                    $j(this).absoluteCounter({
                        speed: 2000,
                        fadeInDelay: 1000
                    })
                }, {
                    accX: 0,
                    accY: -200
                })
            }
        })
    }
}

function initProgressBars() {
    "use strict";
    if ($j('.q_progress_bar').length) {
        $j('.q_progress_bar').each(function() {
            $j(this).appear(function() {
                initToCounterHorizontalProgressBar($j(this));
                var percentage = $j(this).find('.progress_content').data('percentage');
                $j(this).find('.progress_content').css('width', '0%');
                $j(this).find('.progress_content').animate({
                    'width': percentage + '%'
                }, 1500);
                $j(this).find('.progress_number_wrapper').css('width', '0%');
                $j(this).find('.progress_number_wrapper').animate({
                    'width': percentage + '%'
                }, 1500)
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function initToCounterHorizontalProgressBar($this) {
    "use strict";
    var percentage = parseFloat($this.find('.progress_content').data('percentage'));
    if ($this.find('.progress_number span').length) {
        $this.find('.progress_number span').each(function() {
            $j(this).parents('.progress_number_wrapper').css('opacity', '1');
            $j(this).countTo({
                from: 0,
                to: percentage,
                speed: 1500,
                refreshInterval: 50
            })
        })
    }
}

function initListAnimation() {
    "use strict";
    if ($j('.animate_list').length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.animate_list').each(function() {
            $j(this).appear(function() {
                $j(this).find("li").each(function(l) {
                    var k = $j(this);
                    setTimeout(function() {
                        k.animate({
                            opacity: 1,
                            top: 0
                        }, 1500)
                    }, 100 * l)
                })
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function initPieChart() {
    "use strict";
    if ($j('.q_percentage').length) {
        $j('.q_percentage').each(function() {
            var $barColor = piechartcolor;
            if ($j(this).data('active') !== "") {
                $barColor = $j(this).data('active')
            }
            var $trackColor = '#eeeeee';
            if ($j(this).data('noactive') !== "") {
                $trackColor = $j(this).data('noactive')
            }
            var $line_width = 10;
            if ($j(this).data('linewidth') !== "") {
                $line_width = $j(this).data('linewidth')
            }
            var $size = 174;
            $j(this).appear(function() {
                initToCounterPieChart($j(this));
                $j(this).parent().css('opacity', '1');
                $j(this).easyPieChart({
                    barColor: $barColor,
                    trackColor: $trackColor,
                    scaleColor: false,
                    lineCap: 'butt',
                    lineWidth: $line_width,
                    animate: 1500,
                    size: $size
                })
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function initPieChartWithIcon() {
    "use strict";
    if ($j('.q_percentage_with_icon').length) {
        $j('.q_percentage_with_icon').each(function() {
            var $barColor = piechartcolor;
            if ($j(this).data('active') !== "") {
                $barColor = $j(this).data('active')
            }
            var $trackColor = '#eeeeee';
            if ($j(this).data('noactive') !== "") {
                $trackColor = $j(this).data('noactive')
            }
            var $line_width = 10;
            if ($j(this).data('linewidth') !== "") {
                $line_width = $j(this).data('linewidth')
            }
            var $size = 174;
            $j(this).appear(function() {
                $j(this).parent().css('opacity', '1');
                $j(this).css('opacity', '1');
                $j(this).easyPieChart({
                    barColor: $barColor,
                    trackColor: $trackColor,
                    scaleColor: false,
                    lineCap: 'butt',
                    lineWidth: $line_width,
                    animate: 1500,
                    size: $size
                })
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function initToCounterPieChart($this) {
    "use strict";
    $j($this).css('opacity', '1');
    var $max = parseFloat($j($this).find('.tocounter').text());
    $j($this).find('.tocounter').countTo({
        from: 0,
        to: $max,
        speed: 1500,
        refreshInterval: 50
    })
}

function initPortfolio() {
    "use strict";
    if ($j('.projects_holder_outer:not(.masonry_with_space)').length) {
        $j('.projects_holder_outer').each(function() {
            $j('.filter_holder').each(function() {
                var filter_height = 0;
                $j(this).find('li.filter').each(function() {
                    filter_height += $j(this).height()
                });
                $j(this).on('click', function(data) {
                    var $drop = $j(this),
                        $bro = $drop.siblings('.hidden');
                    if (!$drop.hasClass('expanded')) {
                        $drop.find('ul').css('z-index', '1000');
                        $drop.find('ul').height(filter_height + 39);
                        $drop.addClass('expanded');
                        var label = $drop.find('.label span');
                        label.text(label.attr('data-label'))
                    } else {
                        $drop.find('ul').height(36);
                        $drop.removeClass('expanded');
                        var $selected = $j(data.target),
                            ndx = $selected.index();
                        if ($bro.length) {
                            $bro.find('option').removeAttr('selected').eq(ndx).attr('selected', 'selected').change()
                        }
                    }
                })
            });
            $j('.filter_holder .filter').on('click', function() {
                var $this = $j(this).text();
                var dropLabels = $j('.filter_holder').find('.label span');
                dropLabels.each(function() {
                    $j(this).text($this)
                })
            });
            $j(this).find('.projects_holder').mixitup({
                showOnLoad: 'all',
                transitionSpeed: 600,
                minHeight: 150,
                onMixEnd: function() {}
            })
        })
    }
}

function initPortfolioZIndex() {
    "use strict";
    if ($j('.projects_holder_outer.portfolio_no_space').length) {
        $j('.no_space.hover_text article').each(function(i) {
            $j(this).css('z-index', i + 10)
        })
    }
}

function initPortfolioMasonry() {
    "use strict";
    if ($j('.projects_masonry_holder, .masonry_with_space').length) {
        $j('.projects_masonry_holder, .masonry_with_space .projects_holder').each(function() {
            var $window = jQuery(window);
            var $this = $j(this);
            $this.waitForImages(function() {
                $this.animate({
                    opacity: 1
                });
                if ($j('.projects_masonry_holder').length) {
                    resizeMasonry($this)
                }
                $this.isotope({
                    resizable: false,
                    itemSelector: '.portfolio_masonry_item, .mix',
                    layoutMode: 'masonry'
                }).isotope('layout');
                if ($j('.projects_masonry_holder').length) {
                    setPortfolioMasZIndex();
                    $window.resize(function() {
                        resizeMasonry($this);
                        setPortfolioMasZIndex()
                    })
                }
            })
        })
    }
}
var portfolio_width;

function resizeMasonry(container) {
    var $window = jQuery(window);
    if ($j('.full_width').length) {
        portfolio_width = $window.innerWidth()
    } else {
        var closest_container = container.closest('.container_inner');
        if (closest_container.has('.column_inner').length) {
            portfolio_width = container.closest('.column_inner').innerWidth()
        } else {
            portfolio_width = closest_container.innerWidth()
        }
    }
    container.width(portfolio_width);
    var $cols = 5;
    if (portfolio_width > 1600) {
        $cols = 5
    } else if (portfolio_width <= 1600 && portfolio_width > 1200) {
        $cols = 4
    } else if (portfolio_width <= 1200 && portfolio_width > 1000) {
        $cols = 3
    } else if (portfolio_width <= 1000 && portfolio_width > 480) {
        $cols = 2
    } else if (portfolio_width <= 480) {
        $cols = 1
    }
    var largeItemHeight = container.find('article[class*="default"]:first img').height();
    var double = ($window.innerWidth() > 480) ? 2 : 1;
    container.find('article[class*="large_width_height"] img, article[class*="large_height"] img').css('height', (largeItemHeight * double));
    container.isotope({
        masonry: {
            columnWidth: portfolio_width / parseInt($cols)
        }
    })
}

function setPortfolioMasZIndex() {
    var $elemXPos = {};
    var $elemZIndex = {};
    $j('.projects_masonry_holder article').each(function() {
        $elemXPos[$j(this).index()] = getPortfolioXPos($j(this).css('left'))
    });
    var $elemXPosArray = $j.map($elemXPos, function(value) {
        return value
    });
    $elemXPosArray = cleanPortfolioMasXArray($elemXPosArray);
    $elemXPosArray.sort(function(x, y) {
        return x - y
    });
    for (var i = 0; i < $elemXPosArray.length; i++) {
        $elemZIndex[$elemXPosArray[i]] = i * 10
    }
    $j.each($elemXPos, function(key, val) {
        var $zi;
        var $bgd = val;
        $j.each($elemZIndex, function(key, val) {
            if ($bgd == key) {
                $zi = val
            }
        });
        $j('.projects_masonry_holder article:eq(' + key + ')').css('z-index', $zi)
    })
}

function cleanPortfolioMasXArray($elemXPosArray) {
    var i;
    var length = $elemXPosArray.length;
    var $elemXPosOutArray = [];
    var tmp = {};
    for (i = 0; i < length; i++) {
        tmp[$elemXPosArray[i]] = 0
    }
    for (i in tmp) {
        $elemXPosOutArray.push(i)
    }
    return $elemXPosOutArray
}

function getPortfolioXPos(css) {
    return css.substr(0, css.length - 2)
}

function initPortfolioMasonryFilter() {
    "use strict";
    var portfolioIsotopeAnimation = null;
    $j('.filter:first').addClass('current');
    $j('.filter').click(function() {
        clearTimeout(portfolioIsotopeAnimation);
        $j('.isotope, .isotope .isotope-item').css('transition-duration', '0.8s');
        portfolioIsotopeAnimation = setTimeout(function() {
            $j('.isotope, .isotope .isotope-item').css('transition-duration', '0s')
        }, 700);
        var selector = $j(this).attr('data-filter');
        $j('.projects_masonry_holder, .masonry_with_space .projects_holder').isotope({
            filter: selector
        });
        $j(".filter")
            .removeClass("current");
        $j(this).addClass("current");
        setTimeout(setPortfolioMasZIndex(), 700);
        return false
    })
}

function initServiceAnimation() {
    "use strict";
    if ($j(".fade_in_circle_holder").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.fade_in_circle_holder').each(function() {
            $j(this).appear(function() {
                $j(this).addClass('animate_circle')
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function checkTitleToShowOrHide() {
    if ($j('.title_outer.animate_title_area').length) {
        var title_area_height = $j('.title_outer').data('height');
        if ($scroll > $j('.title').height()) {
            $j('.title_outer').css({
                'height': title_area_height,
                'opacity': '1',
                'overflow': 'visible'
            })
        }
    }
}

function initTitleAreaAnimation() {
    if ($j('.title_outer.animate_title_area').length) {
        var title_area_height = $j('.title_outer').data('height');
        if ($j('.title_outer').hasClass('with_image')) {
            title_area_height = $j('.image.responsive').height()
        }
        if ($scroll < $j('.title').height()) {
            $j('.title_outer').animate({
                height: title_area_height,
                opacity: 1
            }, 500, function() {
                $j(this).css({
                    'overflow': 'visible'
                });
                initPortfolioSingleInfo();
                if ($j('nav.content_menu').length > 0) {
                    content_menu_position = $j('nav.content_menu').offset().top;
                    contentMenuPosition()
                }
            })
        }
    }
}

function initParallaxTitle() {
    "use strict";
    if (($j('.title').length > 0) && ($j('.touch').length === 0)) {
        if ($j('.title.has_fixed_background').length) {
            var $background_size_width = parseInt($j('.title.has_fixed_background').css('background-size').match(/\d+/));
            var title_holder_height = $j('.title.has_fixed_background').height();
            var title_rate = (title_holder_height / 10000) * 7;
            var title_distance = $scroll - $j('.title.has_fixed_background').offset().top;
            var title_bpos = -(title_distance * title_rate);
            $j('.title.has_fixed_background').css({
                'background-position': 'center ' + (0 + add_for_admin_bar) + 'px'
            });
            if ($j('.title.has_fixed_background').hasClass('zoom_out')) {
                $j('.title.has_fixed_background').css({
                    'background-size': $background_size_width - $scroll + 'px auto'
                })
            }
        }
        $j(window).on('scroll', function() {
            if ($j('.title.has_fixed_background').length) {
                var title_distance = $scroll - $j('.title.has_fixed_background').offset().top;
                var title_bpos = -(title_distance * title_rate);
                $j('.title.has_fixed_background').css({
                    'background-position': 'center ' + (title_bpos + add_for_admin_bar) + 'px'
                });
                if ($j('.title.has_fixed_background').hasClass('zoom_out')) {
                    $j('.title.has_fixed_background').css({
                        'background-size': $background_size_width - $scroll + 'px auto'
                    })
                }
            }
        })
    }
}(function($) {
    var $window = $(window);
    var windowHeight = $window.height();
    $window.resize(function() {
        windowHeight = $window.height()
    });
    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        $this.each(function() {
            firstTop = $this.offset().top
        });
        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true)
            }
        } else {
            getHeight = function(jqo) {
                return jqo.height()
            }
        }
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        function update() {
            var pos = $window.scrollTop();
            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);
                if (top + height < pos || top > pos + windowHeight) {
                    return
                }
                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px")
            })
        }
        $window.bind('scroll', update).resize(update);
        update()
    }
})(jQuery);

function initParallax() {
    "use strict";
    if ($j('.parallax_section_holder').length) {
        $j('.parallax_section_holder').each(function() {
            var speed = $j(this).data('speed') * 0.4;
            $j(this).parallax("50%", speed)
        })
    }
}

function initSideAreaScroll() {
    "use strict";
    if ($j('.side_menu').length) {
        $j(".side_menu").niceScroll({
            scrollspeed: 60,
            mousescrollstep: 40,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: false,
            horizrailenabled: false
        })
    }
}

function initVerticalAreaMenuScroll() {
    "use strict";
    if ($j('.vertical_menu_area.with_scroll').length) {
        $j(".vertical_menu_area.with_scroll").niceScroll({
            scrollspeed: 60,
            mousescrollstep: 40,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: false,
            horizrailenabled: false
        })
    }
}

function loadMore() {
    "use strict";
    var i = 1;
    $j('.load_more a').on('click', function(e) {
        e.preventDefault();
        var link = $j(this).attr('href');
        var $content = '.projects_holder';
        var $anchor = '.portfolio_paging .load_more a';
        var $next_href = $j($anchor).attr('href');
        var filler_num = $j('.projects_holder .filler').length;
        $j.get(link + '', function(data) {
            $j('.projects_holder .filler').slice(-filler_num).remove();
            var $new_content = $j($content, data).wrapInner('').html();
            $next_href = $j($anchor, data).attr('href');
            $j($content, data).waitForImages(function() {
                $j('article.mix:last').after($new_content);
                if ($j('.masonry_with_space').length) {
                    $j('.masonry_with_space .projects_holder').isotope('reloadItems').isotope()
                } else {
                    var min_height = $j('article.mix:first').height();
                    $j('article.mix').css('min-height', min_height);
                    $j('.projects_holder').mixitup('remix', 'all')
                }
                prettyPhoto();
                if ($j('.load_more').attr('rel') > i) {
                    $j('.load_more a').attr('href', $next_href)
                } else {
                    $j('.load_more').remove()
                }
                $j('.projects_holder .portfolio_paging:last').remove();
                $j('article.mix').css('min-height', 0)
            })
        });
        i++
    })
}

function prettyPhoto() {
    "use strict";
    $j('a[data-rel]').each(function() {
        $j(this).attr('rel', $j(this).data('rel'))
    });
    $j("a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        slideshow: false,
        autoplay_slideshow: false,
        opacity: 0.80,
        show_title: true,
        allow_resize: true,
        horizontal_padding: 0,
        default_width: 650,
        default_height: 400,
        counter_separator_label: '/',
        theme: 'pp_default',
        hideflash: false,
        wmode: 'opaque',
        autoplay: true,
        modal: false,
        overlay_gallery: false,
        keyboard_shortcuts: true,
        deeplinking: false,
        social_tools: false
    })
}

function initMobileMenu() {
    "use strict";
    $j(".mobile_menu_button span").on('tap click', function(e) {
        e.preventDefault();
        if ($j(".mobile_menu > ul").is(":visible")) {
            $j(".mobile_menu > ul").slideUp(200)
        } else {
            $j(".mobile_menu > ul").slideDown(200)
        }
    });
    $j(".mobile_menu > ul > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > h3, .mobile_menu > ul > li.has_sub > a[href*=#]").on('tap click', function(e) {
        e.preventDefault();
        if ($j(this).closest('li.has_sub').find("> ul.sub_menu").is(":visible")) {
            $j(this).closest('li.has_sub').find("> ul.sub_menu").slideUp(200);
            $j(this).closest('li.has_sub').removeClass('open_sub')
        } else {
            $j(this).closest('li.has_sub').addClass('open_sub');
            $j(this).closest('li.has_sub').find("> ul.sub_menu").slideDown(200)
        }
    });
    $j(".mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > h3, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > a[href*=#]").on('tap click', function(e) {
        e.preventDefault();
        if ($j(this).parent().find("ul.sub_menu").is(":visible")) {
            $j(this).parent().find("ul.sub_menu").slideUp(200);
            $j(this).parent().removeClass('open_sub')
        } else {
            $j(this).parent().addClass('open_sub');
            $j(this).parent().find("ul.sub_menu").slideDown(200)
        }
    });
    $j(".mobile_menu ul li > a, .q_logo a").on('click', function() {
        if (($j(this).attr('href') !== "http://#") && ($j(this).attr('href') !== "#")) {
            $j(".mobile_menu > ul").slideUp()
        }
    })
}

function initFlexSlider() {
    "use strict";
    $j('.flexslider').each(function() {
        var interval = 8000;
        if (typeof $j(this).data('interval') !== 'undefined' && $j(this).data('interval') !== false) {
            interval = parseFloat($j(this).data('interval')) * 1000
        }
        var slideshow = true;
        if (interval === 0) {
            slideshow = false
        }
        var animation = 'slide';
        if (typeof $j(this).data('flex_fx') !== 'undefined' && $j(this).data('flex_fx') !== false) {
            animation = $j(this).data('flex_fx')
        }
        $j(this).flexslider({
            animationLoop: true,
            controlNav: false,
            useCSS: false,
            pauseOnAction: true,
            pauseOnHover: true,
            slideshow: slideshow,
            animation: animation,
            prevText: "<div><i class='fa fa-angle-left'></i></div>",
            nextText: "<div><i class='fa fa-angle-right'></i></div>",
            animationSpeed: 600,
            slideshowSpeed: interval,
            start: function() {
                setTimeout(function() {
                    $j(".flexslider").fitVids()
                }, 100)
            }
        });
        $j('.flex-direction-nav a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation()
        })
    })
}

function fitVideo() {
    "use strict";
    $j(".portfolio_images").fitVids();
    $j(".video_holder").fitVids();
    $j(".format-video .post_image").fitVids();
    $j(".format-video .q_masonry_blog_post_image").fitVids()
}
var $scrollHeight;

function initPortfolioSingleInfo() {
    "use strict";
    var $sidebar = $j(".portfolio_single_follow");
    if ($j(".portfolio_single_follow").length > 0) {
        var offset = $sidebar.offset();
        $scrollHeight = $j(".portfolio_container").height();
        var $scrollOffset = $j(".portfolio_container").offset();
        var $window = $j(window);
        var $headerHeight = parseInt($j('header.page_header').css('height'), 10);
        $window.scroll(function() {
            if ($window.width() > 960) {
                if ($window.scrollTop() + $headerHeight + 3 > offset.top) {
                    if ($window.scrollTop() + $headerHeight + $sidebar.height() + 24 < $scrollOffset.top + $scrollHeight) {
                        $sidebar.stop().animate({
                            marginTop: $window.scrollTop() - offset.top + $headerHeight
                        })
                    } else {
                        $sidebar.stop().animate({
                            marginTop: $scrollHeight - $sidebar.height() - 24
                        })
                    }
                } else {
                    $sidebar.stop().animate({
                        marginTop: 0
                    })
                }
            } else {
                $sidebar.css('margin-top', 0)
            }
        })
    }
}
$j.fn.preload = function() {
    "use strict";
    this.each(function() {
        $j('<img/>')[0].src = this
    })
};

function initTabs() {
    "use strict";
    if ($j('.q_tabs').length) {
        $j('.q_tabs').appear(function() {
            $j('.q_tabs').css('visibility', 'visible')
        }, {
            accX: 0,
            accY: -100
        });
        var $tabsNav = $j('.tabs-nav');
        var $tabsNavLis = $tabsNav.children('li');
        $tabsNav.each(function() {
            var $this = $j(this);
            $this.next().children('.tab-content').stop(true, true).hide().first().show();
            $this.children('li').first().addClass('active').stop(true, true).show()
        });
        $tabsNavLis.on('click', function(e) {
            var $this = $j(this);
            $this.siblings().removeClass('active').end().addClass('active');
            $this.parent().next().children('.tab-content').stop(true, true).hide().siblings($this.find('a').attr('href')).fadeIn();
            e.preventDefault()
        })
    }
}

function initAccordion() {
    "use strict";
    if ($j(".q_accordion_holder").length) {
        $j(".q_accordion_holder").appear(function() {
            $j(".q_accordion_holder").css('visibility', 'visible')
        }, {
            accX: 0,
            accY: -100
        });
        if ($j(".accordion").length) {
            $j(".accordion")
                .accordion({
                    animate: "swing",
                    collapsible: true,
                    active: false,
                    icons: "",
                    heightStyle: "content"
                });
            $j(".accordion").each(function() {
                var activeTab = parseInt($j(this).data('active-tab'));
                if (activeTab !== "") {
                    activeTab = activeTab - 1;
                    $j(this).accordion('option', 'active', activeTab)
                }
                var borderRadius = parseInt($j(this).data('border-radius'));
                if (borderRadius !== "") {
                    $j(this).find('.accordion_mark').css('border-radius', borderRadius + "px")
                }
                var collapsible = ($j(this).data('collapsible') == 'yes') ? true : false;
                $j(this).accordion('option', 'collapsible', collapsible);
                $j(this).accordion('option', 'collapsible', collapsible)
            })
        }
        $j(".toggle").addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset").find(".title-holder").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom").hover(function() {
            $j(this).toggleClass("ui-state-hover")
        }).click(function() {
            $j(this).toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom").next().toggleClass("ui-accordion-content-active").slideToggle(400);
            return false
        }).next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide();
        $j(".toggle").each(function() {
            var activeTab = parseInt($j(this).data('active-tab'));
            if (activeTab !== "" && activeTab >= 1) {
                activeTab = activeTab - 1;
                $j(this).find('.ui-accordion-content').eq(activeTab).show();
                $j(this).find('.ui-accordion-header').eq(activeTab).addClass('ui-state-active')
            }
        })
    }
}

function initAccordionContentLink() {
    "use strict";
    if ($j(".accordion").length) {
        $j('.accordion_holder .accordion_inner .accordion_content a').click(function() {
            if ($j(this).attr('target') === '_blank') {
                window.open($j(this).attr('href'), '_blank')
            } else {
                window.open($j(this).attr('href'), '_self')
            }
            return false
        })
    }
}

function initTestimonials() {
    "use strict";
    if ($j('.testimonials_carousel').length) {
        $j('.testimonials_carousel').each(function() {
            var interval = 5000;
            if (typeof $j(this).data('auto-rotate-slides') !== 'undefined' && $j(this).data('auto-rotate-slides') !== false) {
                interval = parseFloat($j(this).data('auto-rotate-slides')) * 1000
            }
            var slideshow = true;
            if (interval === 0) {
                slideshow = false
            }
            var animation = 'fade';
            if (typeof $j(this).data('animation-type') !== 'undefined' && $j(this).data('animation-type') !== false) {
                animation = $j(this).data('animation-type')
            }
            var directionNav = true;
            if (typeof $j(this).data('show-navigation') !== 'undefined') {
                directionNav = $j(this).data('show-navigation') == 'no' ? false : true
            }
            var animationSpeed = 600;
            if (typeof $j(this).data('animation-speed') !== 'undefined' && $j(this).data('animation-speed') !== false) {
                animationSpeed = $j(this).data('animation-speed')
            }
            $j('.testimonials_carousel').flexslider({
                animationLoop: true,
                controlNav: false,
                directionNav: directionNav,
                useCSS: false,
                pauseOnAction: true,
                pauseOnHover: false,
                slideshow: slideshow,
                animation: animation,
                itemMargin: 25,
                minItems: 1,
                maxItems: 1,
                animationSpeed: animationSpeed,
                slideshowSpeed: interval,
                start: function(slider) {
                    initParallax()
                }
            })
        })
    }
}

function initMessages() {
    "use strict";
    if ($j('.q_message').length) {
        $j('.q_message').each(function() {
            $j(this).find('.close').click(function(e) {
                e.preventDefault();
                $j(this).parent().parent().fadeOut(500)
            })
        })
    }
}

function initElementsAnimation() {
    "use strict";
    if ($j(".element_from_fade").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_fade').each(function() {
            var $this = $j(this);
            $this.appear(function() {
                $this.addClass('element_from_fade_on')
            }, {
                accX: 0,
                accY: -100
            })
        })
    }
    if ($j(".element_from_left").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_left').each(function() {
            var $this = $j(this);
            $this.appear(function() {
                $this.addClass('element_from_left_on')
            }, {
                accX: 0,
                accY: -100
            })
        })
    }
    if ($j(".element_from_right").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_right').each(function() {
            var $this = $j(this);
            $this.appear(function() {
                $this.addClass('element_from_right_on')
            }, {
                accX: 0,
                accY: -100
            })
        })
    }
    if ($j(".element_from_top").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_top').each(function() {
            var $this = $j(this);
            $this.appear(function() {
                $this.addClass('element_from_top_on')
            }, {
                accX: 0,
                accY: -100
            })
        })
    }
    if ($j(".element_from_bottom").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_from_bottom').each(function() {
            var $this = $j(this);
            $this.appear(function() {
                $this.addClass('element_from_bottom_on')
            }, {
                accX: 0,
                accY: -100
            })
        })
    }
    if ($j(".element_transform").length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.element_transform').each(function() {
            var $this = $j(this);
            $this.appear(function() {
                $this.addClass('element_transform_on')
            }, {
                accX: 0,
                accY: -100
            })
        })
    }
}

function fitAudio() {
    "use strict";
    $j('audio.blog_audio').mediaelementplayer({
        audioWidth: '100%'
    })
}

function initBlog() {
    "use strict";
    if ($j('.blog_holder.masonry').length) {
        var width_blog = $j(this).closest('.container_inner').width();
        if ($j('.blog_holder.masonry').closest(".column_inner").length) {
            width_blog = $j('.blog_holder.masonry').closest(".column_inner").width()
        }
        $j('.blog_holder.masonry').width(width_blog);
        var $container = $j('.blog_holder.masonry');
        var $cols = 3;
        if ($container.width() < 420) {
            $cols = 1
        } else if ($container.width() <= 805) {
            $cols = 2
        }
        $container.isotope({
            itemSelector: 'article',
            resizable: false,
            masonry: {
                columnWidth: $j('.blog_holder.masonry').width() / $cols
            }
        });
        $j('.filter').click(function() {
            var selector = $j(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false
        });
        if ($container.hasClass('masonry_infinite_scroll')) {
            $container.infinitescroll({
                navSelector: '.blog_infinite_scroll_button span',
                nextSelector: '.blog_infinite_scroll_button span a',
                itemSelector: 'article',
                loading: {
                    finishedMsg: finished_text,
                    msgText: loading_text
                }
            }, function(newElements) {
                $container.isotope('appended', $j(newElements));
                fitVideo();
                fitAudio();
                initFlexSlider();
                setTimeout(function() {
                    $j('.blog_holder.masonry').isotope('layout')
                }, 400)
            })
        } else if ($container.hasClass('masonry_load_more')) {
            var i = 1;
            $j('.blog_load_more_button a').on('click', function(e) {
                e.preventDefault();
                var link = $j(this).attr('href');
                var $content = '.masonry_load_more';
                var $anchor = '.blog_load_more_button a';
                var $next_href = $j($anchor).attr('href');
                $j.get(link + '', function(data) {
                    var $new_content = $j($content, data).wrapInner('').html();
                    $next_href = $j($anchor, data).attr('href');
                    $container.append($j($new_content)).isotope('reloadItems').isotope({
                        sortBy: 'original-order'
                    });
                    fitVideo();
                    fitAudio();
                    initFlexSlider();
                    setTimeout(function() {
                        $j('.blog_holder.masonry').isotope('layout')
                    }, 400);
                    if ($j('.blog_load_more_button span').attr('rel') > i) {
                        $j('.blog_load_more_button a').attr('href', $next_href)
                    } else {
                        $j('.blog_load_more_button').remove()
                    }
                });
                i++
            })
        }
        $j(window).resize(function() {
            if ($container.width() < 420) {
                $cols = 1
            } else if ($container.width() <= 785) {
                $cols = 2
            } else {
                $cols = 3
            }
        });
        $j('.blog_holder.masonry').animate({
            opacity: "1"
        }, 500)
    }
}

function initBlogMasonryFullWidth() {
    "use strict";
    if ($j('.masonry_full_width').length) {
        var width_blog = $j('.full_width_inner').width();
        $j('.masonry_full_width').width(width_blog);
        var $container = $j('.masonry_full_width');
        var $cols = 5;
        if ($container.width() < 480) {
            $cols = 1
        } else if ($container.width() <= 703) {
            $cols = 2
        } else if ($container.width() <= 920) {
            $cols = 3
        } else if ($container.width() <= 1320) {
            $cols = 4
        }
        $j('.filter').click(function() {
            var selector = $j(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false
        });
        if ($container.hasClass('masonry_infinite_scroll')) {
            $container.infinitescroll({
                navSelector: '.blog_infinite_scroll_button span',
                nextSelector: '.blog_infinite_scroll_button span a',
                itemSelector: 'article',
                loading: {
                    finishedMsg: finished_text,
                    msgText: loading_text
                }
            }, function(newElements) {
                $container.isotope('appended', $j(newElements));
                fitVideo();
                fitAudio();
                $j('.blog_holder.masonry_full_width').isotope('layout')
            })
        } else if ($container.hasClass('masonry_load_more')) {
            var i = 1;
            $j('.blog_load_more_button a').on('click', function(e) {
                e.preventDefault();
                var link = $j(this).attr('href');
                var $content = '.masonry_load_more';
                var $anchor = '.blog_load_more_button a';
                var $next_href = $j($anchor).attr('href');
                $j.get(link + '', function(data) {
                    var $new_content = $j($content, data).wrapInner('').html();
                    $next_href = $j($anchor, data).attr('href');
                    $container.append($j($new_content)).isotope('reloadItems').isotope({
                        sortBy: 'original-order'
                    });
                    fitVideo();
                    fitAudio();
                    $j('.blog_holder.masonry_full_width').waitForImages(function() {
                        $j('.blog_holder.masonry_full_width').isotope('layout')
                    });
                    if ($j('.blog_load_more_button span').attr('rel') > i) {
                        $j('.blog_load_more_button a').attr('href', $next_href)
                    } else {
                        $j('.blog_load_more_button').remove()
                    }
                });
                i++
            })
        }
        $container.isotope({
            itemSelector: 'article',
            resizable: false,
            masonry: {
                columnWidth: $j('.masonry_full_width').width() / $cols
            }
        });
        $j(window).resize(function() {
            if ($container.width() < 480) {
                $cols = 1
            } else if ($container.width() <= 703) {
                $cols = 2
            } else if ($container.width() <= 920) {
                $cols = 3
            } else if ($container.width() <= 1320) {
                $cols = 4
            } else {
                $cols = 5
            }
        });
        $j('.masonry_full_width').animate({
            opacity: "1"
        }, 500)
    }
}

function initSmallImageBlogHeight() {
    "use strict";
    if ($j('.blog_small_image').length) {
        $j('article').each(function() {
            $j(this).find('.post_text_inner').css('min-height', $j(this).find('.post_image').height() - 46)
        })
    }
}

function initQBlog() {
    "use strict";
    if ($j('.q_masonry_blog').length) {
        $j('.q_masonry_blog').each(function() {
            var width_blog;
            width_blog = $j(this).parents('.container_inner').width();
            if ($j('.full_width').length && $j(this).parents('.grid_section').length == 0) {
                width_blog = $j('.full_width').width()
            } else {
                if ($j(this).parents(".column_inner").length) {
                    width_blog = $j(this).parents(".column_inner").width()
                }
            }
            $j(this).width(width_blog);
            var $container = $j(this);
            var $cols = 3;
            if ($j('.full_width').length && $j(this).parents('.grid_section').length == 0) {
                if ($container.width() < 480) {
                    $cols = 1
                } else if ($container.width() <= 703) {
                    $cols = 2
                } else if ($container.width() <= 920) {
                    $cols = 3
                } else if ($container.width() <= 1320) {
                    $cols = 4
                } else {
                    $cols = 5
                }
            } else {
                if ($container.width() < 420) {
                    $cols = 1
                } else if ($container.width() <= 805) {
                    $cols = 2
                }
            }
            $container.isotope({
                itemSelector: 'article',
                resizable: false,
                masonry: {
                    columnWidth: $j('.q_masonry_blog').width() / $cols
                }
            });
            $j(window).resize(function() {
                if ($j('.full_width')
                    .length && $j(this).parents('.grid_section').length == 0) {
                    if ($container.width() < 480) {
                        $cols = 1
                    } else if ($container.width() <= 703) {
                        $cols = 2
                    } else if ($container.width() <= 920) {
                        $cols = 3
                    } else if ($container.width() <= 1320) {
                        $cols = 4
                    } else {
                        $cols = 5
                    }
                } else {
                    if ($container.width() < 420) {
                        $cols = 1
                    } else if ($container.width() <= 785) {
                        $cols = 2
                    } else {
                        $cols = 3
                    }
                }
                $container.isotope({
                    masonry: {
                        columnWidth: $container.width() / $cols
                    }
                })
            });
            $j(this).animate({
                opacity: "1"
            }, 500)
        })
    }
}
var timeOuts = [];

function initProgressBarsIcon() {
    "use strict";
    if ($j('.q_progress_bars_icons_holder').length) {
        $j('.q_progress_bars_icons_holder').each(function() {
            var $this = $j(this);
            $this.appear(function() {
                $this.find('.q_progress_bars_icons').css('opacity', '1');
                $this.find('.q_progress_bars_icons').each(function() {
                    var number = $j(this).find('.q_progress_bars_icons_inner').data('number');
                    var size = $j(this).find('.q_progress_bars_icons_inner').data('size');
                    if (size !== "") {
                        $j(this).find('.q_progress_bars_icons_inner.custom_size .bar').css({
                            'width': size + 'px',
                            'height': size + 'px'
                        });
                        $j(this).find('.q_progress_bars_icons_inner.custom_size .bar .fa-stack').css({
                            'font-size': size / 2 + 'px'
                        })
                    }
                    var bars = $j(this).find('.bar');
                    bars.each(function(i) {
                        if (i < number) {
                            var time = (i + 1) * 150;
                            timeOuts[i] = setTimeout(function() {
                                $j(bars[i]).addClass('active')
                            }, time)
                        }
                    })
                })
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function initMoreFacts() {
    "use strict";
    if ($j('.more_facts_holder').length) {
        $j('.more_facts_holder').each(function() {
            var $this = $j(this);
            var $more_label = 'More Facts';
            if ($j(this).find('.more_facts_button').data('morefacts') !== "") {
                $more_label = $j(this).find('.more_facts_button').data('morefacts')
            }
            var $less_label = 'Less Facts';
            if ($j(this).find('.more_facts_button').data('lessfacts') !== "") {
                $less_label = $j(this).find('.more_facts_button').data('lessfacts')
            }
            var height = $j(this).find('.more_facts_inner_holder').height();
            var speed;
            if (height > 0 && height < 601) {
                speed = 800
            } else if (height > 600 && height < 1201) {
                speed = 1500
            } else {
                speed = 2100
            }
            $j(this).find('.more_facts_inner_holder').css({
                'height': '0px',
                'display': 'none',
                'opacity': '0'
            });
            $this.find('.more_facts_button').on("mouseenter", function() {
                $j(this).css('color', $j(this).data('hovercolor'))
            }).on("mouseleave", function() {
                if (!$this.find('.more_facts_inner_holder').is(':visible')) {
                    $j(this).css('color', $j(this).data('color'))
                }
            });
            $this.find('.more_facts_button').click(function() {
                if (!$this.find('.more_facts_inner_holder').is(':visible')) {
                    $this.find('.more_facts_fake_arrow').fadeIn(speed);
                    $this.addClass('more_fact_opened');
                    $j(this).parent().parent().find('.more_facts_inner_holder').css({
                        'display': 'block',
                        'opacity': '1'
                    }).stop().animate({
                        'height': height + 30
                    }, speed);
                    $j(this).find('.more_facts_button_text').text($less_label);
                    $j(this).find('.more_facts_button_arrow').addClass('rotate_arrow')
                } else {
                    $this.find('.more_facts_fake_arrow').fadeOut(speed);
                    $j(this).parent().parent().find('.more_facts_inner_holder').stop().animate({
                        'height': '0px'
                    }, speed, function() {
                        $j(this).css({
                            'display': 'none',
                            'opacity': '0'
                        });
                        if (!$this.find('.more_facts_button').is(":hover")) {
                            $this.find('.more_facts_button').css('color', $this.find('.more_facts_button').data('color'))
                        }
                        $this.removeClass('more_fact_opened')
                    });
                    $j(this).find('.more_facts_button_text').text($more_label);
                    $j(this).find('.more_facts_button_arrow').removeClass('rotate_arrow')
                }
            })
        })
    }
}

function placeholderReplace() {
    "use strict";
    $j('#contact-form [placeholder]').focus(function() {
        var input = $j(this);
        if (input.val() === input.attr('placeholder')) {
            if (this.originalType) {
                this.type = this.originalType;
                delete this.originalType
            }
            input.val('');
            input.removeClass('placeholder')
        }
    }).blur(function() {
        var input = $j(this);
        if (input.val() === '') {
            if (this.type === 'password') {
                this.originalType = this.type;
                this.type = 'text'
            }
            input.addClass('placeholder');
            input.val(input.attr('placeholder'))
        }
    }).blur();
    $j('#contact-form [placeholder]').parents('form').submit(function() {
        $j(this).find('[placeholder]').each(function() {
            var input = $j(this);
            if (input.val() === input.attr('placeholder')) {
                input.val('')
            }
        })
    })
}

function totop_button(a) {
    "use strict";
    var b = $j("#back_to_top");
    b.removeClass("off on");
    if (a === "on") {
        b.addClass("on")
    } else {
        b.addClass("off")
    }
}

function backButtonShowHide() {
    "use strict";
    $j(window).scroll(function() {
        var b = $j(this).scrollTop();
        var c = $j(this).height();
        var d;
        if (b > 0) {
            d = b + c / 2
        } else {
            d = 1
        }
        if (d < 1e3) {
            totop_button("off")
        } else {
            totop_button("on")
        }
    })
}

function backToTop() {
    "use strict";
    $j(document).on('click', '#back_to_top', function(e) {
        e.preventDefault();
        $j('body,html').animate({
            scrollTop: 0
        }, $j(window).scrollTop() / 3, 'linear')
    })
}

function initSteps() {
    "use strict";
    if ($j('.q_steps_holder').length) {
        $j('.q_steps_holder').each(function() {
            $j(this).appear(function() {
                $j(this).addClass('show')
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function initMessageHeight() {
    "use strict";
    if ($j('.q_message.with_icon').length) {
        $j('.q_message.with_icon').each(function() {
            if ($j(this).find('.message_text_holder').height() > $j(this).find('.q_message_icon_holder').height()) {
                $j(this).find('.q_message_icon_holder').height($j(this).find('.message_text').height())
            } else {
                $j(this).find('.message_text').height($j(this).find('.q_message_icon_holder').height())
            }
        })
    }
}

function initImageHover() {
    "use strict";
    if ($j('.image_hover').length) {
        $j('.image_hover').each(function() {
            $j(this).appear(function() {
                var default_visible_time = 300;
                var transition_delay = $j(this).attr('data-transition-delay');
                var real_transition_delay = default_visible_time + parseFloat(transition_delay);
                var object = $j(this);
                setTimeout(function() {
                    object.addClass('show')
                }, parseFloat(transition_delay));
                setTimeout(function() {
                    object.removeClass('show')
                }, real_transition_delay)
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function initProgressBarsVertical() {
    "use strict";
    if ($j('.q_progress_bars_vertical').length) {
        $j('.q_progress_bars_vertical').each(function() {
            $j(this).appear(function() {
                initToCounterVerticalProgressBar($j(this));
                var percentage = $j(this).find('.progress_content').data('percentage');
                $j(this).find('.progress_content').css('height', '0%');
                $j(this).find('.progress_content').animate({
                    height: percentage + '%'
                }, 1500)
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function initToCounterVerticalProgressBar($this) {
    "use strict";
    if ($this.find('.progress_number span').length) {
        $this.find('.progress_number span').each(function() {
            var $max = parseFloat($j(this).text());
            $j(this).countTo({
                from: 0,
                to: $max,
                speed: 1500,
                refreshInterval: 50
            })
        })
    }
}

function checkAnchorOnLoad() {
    "use strict";
    var hash = window.location.hash;
    if (hash !== "" && $j('[data-q_id="' + hash + '"]').length > 0) {
        var initialHeaderHeight = $j('header.page_header').height();
        var currentHeaderHeight;
        $j('html, body').animate({
            scrollTop: $j('[data-q_id="' + hash + '"]').offset().top - $j('header.page_header').height()
        }, 1500, function() {
            currentHeaderHeight = $j('header.page_header').height();
            if (currentHeaderHeight != initialHeaderHeight) {
                var headerSizeDifference = initialHeaderHeight - currentHeaderHeight;
                console.log(headerSizeDifference);
                $j(this).animate({
                    scrollTop: $j(this).scrollTop() + headerSizeDifference
                }, 1000)
            }
        })
    }
}

function checkAnchorOnScroll() {
    if ($j('[data-q_id]').length) {
        var offset = $j('header.page_header').height();
        $j('[data-q_id]').waypoint(function(direction) {
            var id = $j(this).data("q_id");
            $j(".main_menu a").each(function() {
                var i = $j(this).prop("hash");
                if (i === id) {
                    $j('.main_menu a').parent().removeClass('active');
                    if ($j(this).closest('.second').length === 0) {
                        $j(this).parent().addClass('active')
                    } else {
                        $j(this).closest('.second').parent().addClass('active')
                    }
                    $j('.main_menu a').removeClass('current');
                    $j(this).addClass('current')
                }
            })
        }, {
            offset: offset
        })
    }
}

function initHashClick() {
    "use strict";
    var $doc = $j('html, body');
    $j(document).on("click", ".main_menu a, .vertical_menu a, .qbutton, .anchor, nav.popup_menu ul li a", function() {
        var hash = $j(this).prop("hash");
        if ((hash !== "" && $j(this).attr('href').split('#')[0] === "") || (hash !== "" && $j(this).attr('href').split('#')[0] !== "" && hash === window.location.hash) || ($j(this).attr('href').split('#')[0] == window.location.href.split('#')[0])) {
            var initialHeaderHeight = $j('header.page_header').height();
            var currentHeaderHeight;
            if ($j('[data-q_id="' + hash + '"]').length > 0) {
                $doc.animate({
                    scrollTop: $j('[data-q_id="' + hash + '"]').offset().top - initialHeaderHeight
                }, 1500, function() {
                    currentHeaderHeight = $j('header.page_header').height();
                    if (currentHeaderHeight != initialHeaderHeight) {
                        var headerSizeDifference = initialHeaderHeight - currentHeaderHeight;
                        $j(this).animate({
                            scrollTop: $j(this).scrollTop() + headerSizeDifference
                        }, 1000)
                    }
                });
                anchorActiveState($j(this))
            }
            if (history.pushState) {
                history.pushState(null, null, hash)
            }
            return false
        }
    });
    $j(document).on("click", ".mobile_menu a", function() {
        var hash = $j(this).prop("hash");
        if ((hash !== "" && $j(this).attr('href').split('#')[0] === "") || (hash !== "" && $j(this).attr('href').split('#')[0] !== "" && hash === window.location.hash) || ($j(this).attr('href').split('#')[0] == window.location.href.split('#')[0])) {
            if ($j('[data-q_id="' + hash + '"]').length > 0) {
                $doc.animate({
                    scrollTop: $j('[data-q_id="' + hash + '"]').offset().top - $j('.mobile_menu').height()
                }, 500);
                anchorActiveState($j(this))
            }
            if (history.pushState) {
                history.pushState(null, null, hash)
            }
            return false
        }
    })
}

function countClientsPerRow() {
    "use strict";
    if ($j('.qode_clients').length) {
        $j('.qode_clients').each(function() {
            var $clients = $j(this);
            var qode_clients_height = $clients.height();
            var qode_clients_width = $clients.width();
            var maxHeightClient;
            var clientWidth = $clients.find('.qode_client_holder').width();
            var countClient = $clients.find('.qode_client_holder')
                .length;
            $clients.find('.qode_client_holder').each(function() {
                maxHeightClient = maxHeightClient > $j(this).height() ? maxHeightClient : $j(this).height()
            });
            maxHeightClient = maxHeightClient + 35;
            var numberOfRows = Math.ceil(qode_clients_height / maxHeightClient);
            var numberOfClientsPerRow = Math.ceil(qode_clients_width / clientWidth);
            var numberOffullRows = Math.floor(countClient / numberOfClientsPerRow);
            var numberOfClientsInLastRow = countClient - (numberOfClientsPerRow * numberOffullRows);
            if (numberOfClientsInLastRow === 0) {
                numberOfClientsInLastRow = numberOfClientsPerRow
            }
            $clients.find(".qode_client_holder").removeClass('border-bottom-none');
            var item_start_from = countClient - numberOfClientsInLastRow - 1;
            $clients.find(".qode_client_holder:gt(" + item_start_from + ")").addClass('border-bottom-none')
        })
    }
}

function animatedTextIconHeight() {
    "use strict";
    if ($j('.animated_icons_with_text').length) {
        var $icons = $j('.animated_icons_with_text');
        var maxHeight;
        $icons.find('.animated_text p').each(function() {
            maxHeight = maxHeight > $j(this).height() ? maxHeight : $j(this).height()
        });
        if (maxHeight < 155) {
            maxHeight = 155
        }
        $icons.find('.animated_icon_with_text_inner').height(maxHeight)
    }
}

function countAnimatedTextIconPerRow() {
    "use strict";
    if ($j('.animated_icons_with_text').length) {
        $j('.animated_icons_with_text').each(function() {
            var $icons = $j(this);
            var qode_icons_height = $icons.height();
            var qode_icons_width = $icons.width();
            var maxHeightIcons;
            var iconWidth = $icons.find('.animated_icon_with_text_holder').width() + 1;
            var countIcons = $icons.find('.animated_icon_with_text_holder').length;
            $icons.find('.animated_icon_with_text_holder').each(function() {
                maxHeightIcons = maxHeightIcons > $j(this).height() ? maxHeightIcons : $j(this).height()
            });
            maxHeightIcons = maxHeightIcons + 30;
            var numberOfIconsPerRow = Math.ceil((qode_icons_width / iconWidth));
            var numberOffullRows = Math.floor(countIcons / numberOfIconsPerRow);
            var numberOfIconsInLastRow = countIcons - (numberOfIconsPerRow * numberOffullRows);
            if (numberOfIconsInLastRow === 0) {
                numberOfIconsInLastRow = numberOfIconsPerRow
            }
            $icons.find(".animated_icon_with_text_holder").removeClass('border-bottom-none');
            var item_start_from = countIcons - numberOfIconsInLastRow - 1;
            $icons.find(".animated_icon_with_text_holder:gt(" + item_start_from + ")").addClass('border-bottom-none')
        })
    }
}

function anchorActiveState(me) {
    if (me.closest('.main_menu').length > 0) {
        $j('.main_menu a').parent().removeClass('active')
    }
    if (me.closest('.vertical_menu').length > 0) {
        $j('.vertical_menu a').parent().removeClass('active')
    }
    if (me.closest('.second').length === 0) {
        me.parent().addClass('active')
    } else {
        me.closest('.second').parent().addClass('active')
    }
    if (me.closest('.mobile_menu').length > 0) {
        $j('.mobile_menu a').parent().removeClass('active');
        me.parent().addClass('active')
    }
    $j('.mobile_menu a, .main_menu a, .vertical_menu a').removeClass('current');
    me.addClass('current')
}

function initVideoBackground() {
    "use strict";
    $j('.video-wrap .video').mediaelementplayer({
        enableKeyboard: false,
        iPadUseNativeControls: false,
        pauseOtherPlayers: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false
    });
    if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
        initVideoBackgroundSize();
        $j('.mobile-video-image').show();
        $j('.video-wrap').remove()
    }
}

function initVideoBackgroundSize() {
    "use strict";
    $j('.section .video-wrap').each(function(i) {
        var $sectionWidth = $j(this).closest('.section').outerWidth();
        $j(this).width($sectionWidth);
        var $sectionHeight = $j(this).closest('.section').outerHeight();
        min_w = vid_ratio * ($sectionHeight + 20);
        $j(this).height($sectionHeight);
        var scale_h = $sectionWidth / video_width_original;
        var scale_v = ($sectionHeight - header_height) / video_height_original;
        var scale = scale_v;
        if (scale_h > scale_v) scale = scale_h;
        if (scale * video_width_original < min_w) {
            scale = min_w / video_width_original
        }
        $j(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * video_width_original + 2));
        $j(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * video_height_original + 2));
        $j(this).scrollLeft(($j(this).find('video').width() - $sectionWidth) / 2);
        $j(this).find('.mejs-overlay, .mejs-poster').scrollTop(($j(this).find('video').height() - ($sectionHeight)) / 2);
        $j(this).scrollTop(($j(this).find('video').height() - ($sectionHeight)) / 2)
    });
    $j('.carousel .item .video .video-wrap').each(function(i) {
        var $slideWidth = $j(window).width();
        $j(this).width($slideWidth);
        var mob_header = $j(window).width() < 1000 ? $j('header.page_header').height() - 6 : 0;
        var $slideHeight = $j(this).closest('.carousel.slide').height() - mob_header;
        min_w = vid_ratio * ($slideHeight + 20);
        $j(this).height($slideHeight);
        var scale_h = $slideWidth / video_width_original;
        var scale_v = ($slideHeight - header_height) / video_height_original;
        var scale = scale_v;
        if (scale_h > scale_v) scale = scale_h;
        if (scale * video_width_original < min_w) {
            scale = min_w / video_width_original
        }
        $j(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * video_width_original + 2));
        $j(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * video_height_original + 2));
        $j(this).scrollLeft(($j(this).find('video').width() - $slideWidth) / 2);
        $j(this).find('.mejs-overlay, .mejs-poster').scrollTop(($j(this).find('video').height() - ($slideHeight)) / 2);
        $j(this).scrollTop(($j(this).find('video').height() - ($slideHeight)) / 2)
    });
    $j('.portfolio_single .video .video-wrap, .blog_holder .video .video-wrap').each(function(i) {
        var $this = $j(this);
        var $videoWidth = $j(this).closest('.video').outerWidth();
        $j(this).width($videoWidth);
        var $videoHeight = ($videoWidth * 9) / 16;
        if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/)) {
            $this.parent().width($videoWidth);
            $this.parent().height($videoHeight)
        }
        min_w = vid_ratio * ($videoHeight + 20);
        $j(this).height($videoHeight);
        var scale_h = $videoWidth / video_width_original;
        var scale_v = ($videoHeight - header_height) / video_height_original;
        var scale = scale_v;
        if (scale_h > scale_v) scale = scale_h;
        if (scale * video_width_original < min_w) {
            scale = min_w / video_width_original
        }
        $j(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * video_width_original + 2));
        $j(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * video_height_original + 2));
        $j(this).scrollLeft(($j(this).find('video').width() - $videoWidth) / 2);
        $j(this).find('.mejs-overlay, .mejs-poster').scrollTop(($j(this).find('video').height() - ($videoHeight)) / 2);
        $j(this).scrollTop(($j(this).find('video').height() - ($videoHeight)) / 2)
    })
}

function initIconWithTextAnimation() {
    "use strict";
    if ($j('.q_icon_animation').length > 0 && $j('.no_animation_on_touch').length === 0) {
        $j('.q_icon_animation').each(function() {
            $j(this).appear(function() {
                $j(this).addClass('q_show_animation')
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
}

function initCheckSafariBrowser() {
    "use strict";
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
        $j('body').addClass('safari_browser')
    }
}

function initSearchButton() {
    if ($j('.search_button').length) {
        $j('.search_button').click(function(e) {
            e.preventDefault();
            if ($j('html').hasClass('touch')) {
                if ($j('.qode_search_form').height() == "0") {
                    $j('.qode_search_form input[type="text"]').onfocus = function() {
                        window.scrollTo(0, 0);
                        document.body.scrollTop = 0
                    };
                    $j('.qode_search_form input[type="text"]').onclick = function() {
                        window.scrollTo(0, 0);
                        document.body.scrollTop = 0
                    };
                    $j('.header_top_bottom_holder').css('top', '50px');
                    $j('.qode_search_form').css('height', '50px');
                    $j('.content_inner').css('margin-top', '50px');
                    if ($scroll < 34) {
                        $j('header.page_header').css('top', '0')
                    }
                } else {
                    $j('.qode_search_form').css('height', '0');
                    $j('.header_top_bottom_holder').css('top', '0');
                    $j('.content_inner').css('margin-top', '0');
                    if ($scroll < 34) {
                        $j('header.page_header').css('top', -$scroll)
                    }
                }
                $j(window).scroll(function() {
                    if ($j('.qode_search_form').height() != "0" && $scroll > 50) {
                        $j('.qode_search_form').css('height', '0');
                        $j('.header_top_bottom_holder').css('top', '0');
                        $j('.content_inner').css('margin-top', '0')
                    }
                });
                $j('.qode_search_close').click(function(e) {
                    e.preventDefault();
                    $j('.qode_search_form').css('height', '0');
                    $j('.header_top_bottom_holder').css('top', '0');
                    $j('.content_inner').css('margin-top', '0');
                    if ($scroll < 34) {
                        $j('header.page_header').css('top', -$scroll)
                    }
                })
            } else {
                if ($j('.title').hasClass('has_fixed_background')) {
                    var yPos = parseInt($j('.title.has_fixed_background').css('backgroundPosition').split(" ")[1])
                } else {
                    var yPos = 0
                }
                if ($j('.qode_search_form').height() == "0") {
                    $j('.qode_search_form input[type="text"]').focus();
                    $j('.header_top_bottom_holder').stop().animate({
                        top: "50px"
                    }, 150);
                    $j('.qode_search_form').stop().animate({
                        height: "50px"
                    }, 150);
                    $j('.content_inner').stop().animate({
                        marginTop: "50px"
                    }, 150);
                    if ($scroll < 34) {
                        $j('header.page_header').stop().animate({
                            top: 0
                        }, 150)
                    }
                    $j('.title.has_fixed_background').animate({
                        'background-position-y': (yPos + 50) + 'px'
                    }, 150)
                } else {
                    $j('.qode_search_form').stop().animate({
                        height: "0"
                    }, 150);
                    $j('.header_top_bottom_holder').stop().animate({
                        top: "0px"
                    }, 150);
                    $j('.content_inner').stop().animate({
                        marginTop: "0"
                    }, 150);
                    if ($scroll < 34) {
                        $j('header.page_header').stop().animate({
                            top: -$scroll
                        }, 150)
                    }
                    $j('.title.has_fixed_background').animate({
                        'background-position-y': (yPos - 50) + 'px'
                    }, 150)
                }
                $j(window).scroll(function() {
                    if ($j('.qode_search_form').height() != "0" && $scroll > 50) {
                        $j('.qode_search_form').stop().animate({
                            height: "0"
                        }, 150);
                        $j('.header_top_bottom_holder').stop().animate({
                            top: "0px"
                        }, 150);
                        $j('.content_inner').stop().animate({
                            marginTop: "0"
                        }, 150);
                        $j('.title.has_fixed_background').css('backgroundPosition', 'center ' + (yPos) + 'px')
                    }
                });
                $j('.qode_search_close').click(function(e) {
                    e.preventDefault();
                    $j('.qode_search_form').stop().animate({
                        height: "0"
                    }, 150);
                    $j('.content_inner').stop().animate({
                        marginTop: "0"
                    }, 150);
                    $j('.header_top_bottom_holder').stop().animate({
                        top: "0px"
                    }, 150);
                    if ($scroll < 34) {
                        $j('header.page_header').stop().animate({
                            top: -$scroll
                        }, 150)
                    }
                    $j('.title.has_fixed_background').animate({
                        'background-position-y': (yPos) + 'px'
                    }, 150)
                })
            }
        })
    }
}

function updateShoppingCart() {
    "use strict";
    $j('body')
        .bind('added_to_cart', add_to_cart);

    function add_to_cart(event, parts, hash) {
        var miniCart = $j('.shopping_cart_header');
        if (parts['div.widget_shopping_cart_content']) {
            var $cartContent = jQuery(parts['div.widget_shopping_cart_content']),
                $itemsList = $cartContent.find('.cart_list'),
                $total = $cartContent.find('.total').contents(':not(strong)').text();
            miniCart.find('.shopping_cart_dropdown_inner').html('').append($itemsList);
            miniCart.find('.total span').html('').append($total)
        }
    }
}

function setContentBottomMargin() {
    if ($j('.uncover').length) {
        $j('.content').css('margin-bottom', $j('footer').height())
    }
}

function footerWidth() {
    "use strict";
    if ($j('.uncover').length && $j('body').hasClass('vertical_menu_enabled') && $window_width > 1000) {
        $j('.uncover').width($window_width - $j('.vertical_menu_area').width())
    } else {
        $j('.uncover').css('width', '100%')
    }
}

function initCoverBoxes() {
    if ($j('.cover_boxes').length) {
        $j('.cover_boxes').each(function() {
            var active_element = 0;
            var data_active_element = 1;
            if (typeof $j(this).data('active-element') !== 'undefined' && $j(this).data('active-element') !== false) {
                data_active_element = parseFloat($j(this).data('active-element'));
                active_element = data_active_element - 1
            }
            var number_of_columns = 3;
            active_element = data_active_element > number_of_columns ? 0 : active_element;
            $j(this).find('li').eq(active_element).addClass('act');
            var cover_boxed = $j(this);
            $j(this).find('li').each(function() {
                $j(this).hover(function() {
                    $j(cover_boxed).find('li').removeClass('act');
                    $j(this).addClass('act')
                })
            })
        })
    }
}

function createContentMenu() {
    "use strict";
    var content_menu = $j(".content_menu");
    content_menu.each(function() {
        if ($j(this).find('ul').length === 0) {
            if ($j(this).css('background-color') !== "") {
                var background_color = $j(this).css('background-color')
            }
            var content_menu_ul = $j("<ul class='menu'></ul>");
            content_menu_ul.appendTo($j(this));
            var sections = $j(this).siblings('.in_content_menu');
            if (sections.length) {
                sections.each(function() {
                    var section_href = $j(this).data("q_id");
                    var section_title = $j(this).data('q_title');
                    var section_icon = $j(this).data('q_icon');
                    var li = $j("<li />");
                    var icon = $j("<i />", {
                        "class": 'fa ' + section_icon
                    });
                    var link = $j("<a />", {
                        "href": section_href,
                        "html": "<span>" + section_title + "</span>"
                    });
                    var arrow;
                    if (background_color !== "") {
                        arrow = $j("<div />", {
                            "class": 'arrow',
                            "style": 'border-color: ' + background_color + ' transparent transparent transparent'
                        })
                    } else {
                        arrow = $j("<div />", {
                            "class": 'arrow'
                        })
                    }
                    icon.prependTo(link);
                    link.appendTo(li);
                    arrow.appendTo(li);
                    li.appendTo(content_menu_ul)
                })
            }
        }
    })
}

function createSelectContentMenu() {
    "use strict";
    var content_menu = $j(".content_menu");
    content_menu.each(function() {
        var $this = $j(this);
        var $menu_select = $j("<ul></ul>");
        $menu_select.appendTo($j(this).find('.nav_select_menu'));
        $j(this).find("ul.menu li a").each(function() {
            var menu_url = $j(this).attr("href");
            var menu_text = $j(this).text();
            var menu_icon = $j(this).find('i').clone();
            if ($j(this).parents("li").length === 2) {
                menu_text = "&nbsp;&nbsp;&nbsp;" + menu_text
            }
            if ($j(this).parents("li").length === 3) {
                menu_text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + menu_text
            }
            if ($j(this).parents("li").length > 3) {
                menu_text = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + menu_text
            }
            var li = $j("<li />");
            var link = $j("<a />", {
                "href": menu_url,
                "html": menu_text
            });
            menu_icon.prependTo(link);
            link.appendTo(li);
            li.appendTo($menu_select)
        });
        $this.find(".nav_select_button").on('click', function() {
            if ($this.find('.nav_select_menu ul').is(":visible")) {
                $this.find('.nav_select_menu ul').slideUp()
            } else {
                $this.find('.nav_select_menu ul').slideDown()
            }
            return false
        });
        $this.find(".nav_select_menu ul li a").on('click', function() {
            $this.find('.nav_select_menu ul').slideUp();
            var $link = $j(this);
            var $target = $link.attr("href");
            var targetOffset = $j("div.wpb_row[data-q_id='" + $target + "'],section.parallax_section_holder[data-q_id='" + $target + "']").offset().top;
            $j('html,body').stop().animate({
                scrollTop: targetOffset
            }, 500, 'swing', function() {
                $j('nav.content_menu ul li').removeClass('active');
                $link.parent().addClass('active')
            });
            return false
        })
    })
}

function contentMenuPosition() {
    "use strict";
    if ($j('nav.content_menu').length) {
        if (content_menu_position > sticky_amount) {
            var x = min_header_height_sticky
        } else {
            var x = 0
        }
        if (content_menu_position - x - content_menu_top_add - $scroll <= 0 && ($j('header').hasClass('stick'))) {
            if (content_menu_position < sticky_amount) {
                if ($scroll > sticky_amount) {
                    $j('nav.content_menu').css({
                        'position': 'fixed',
                        'top': min_header_height_sticky + content_menu_top_add
                    }).addClass('fixed')
                } else {
                    $j('nav.content_menu').css({
                        'position': 'fixed',
                        'top': 0,
                        transition: 'none'
                    }).addClass('fixed')
                }
            } else {
                $j('nav.content_menu').css({
                    'position': 'fixed',
                    'top': min_header_height_sticky + content_menu_top_add
                }).addClass('fixed')
            }
            $j('header.sticky').addClass('no_shadow');
            $j('.content > .content_inner > .container > .container_inner').css('margin-top', content_line_height);
            $j('.content > .content_inner > .full_width').css('margin-top', content_line_height)
        } else if (content_menu_position - content_menu_top - content_menu_top_add - $scroll <= 0 && !($j('header').hasClass('stick'))) {
            $j('nav.content_menu').css({
                'position': 'fixed',
                'top': content_menu_top + content_menu_top_add
            }).addClass('fixed');
            $j('.content > .content_inner > .container > .container_inner').css('margin-top', content_line_height);
            $j('.content > .content_inner > .full_width').css('margin-top', content_line_height)
        } else {
            $j('nav.content_menu').css({
                'position': 'relative',
                'top': '0px'
            }).removeClass('fixed');
            $j('header.sticky').removeClass('no_shadow');
            $j('.content > .content_inner > .container > .container_inner').css('margin-top', '0px');
            $j('.content > .content_inner > .full_width').css('margin-top', '0px')
        }
        $j('.content .in_content_menu').waypoint(function(direction) {
            var $active = $j(this);
            var id = $active.data("q_id");
            $j("nav.content_menu.fixed li a").each(function() {
                var i = $j(this).attr("href");
                if (i === id) {
                    $j(this).parent().addClass('active')
                } else {
                    $j(this).parent().removeClass('active')
                }
            })
        }, {
            offset: '150'
        })
    }
}

function contentMenuCheckLastSection() {
    "use strict";
    if ($j('nav.content_menu').length) {
        if ($j('.content .in_content_menu').length) {
            var last_from_top = $j('.content .in_content_menu:last').offset().top + $j('.content .in_content_menu:last').height();
            var first_from_top = $j('.content .in_content_menu:first').offset().top - content_menu_top - content_menu_top_add - 100;
            if (last_from_top < $scroll) {
                $j("nav.content_menu.fixed li").removeClass('active')
            }
            if (first_from_top > $scroll) {
                $j('nav.content_menu li:first, nav.content_menu ul.menu li:first').removeClass('active')
            }
        }
    }
}

function contentMenuScrollTo() {
    "use strict";
    if ($j('nav.content_menu').length) {
        $j("nav.content_menu ul.menu li a").on('click', function(e) {
            e.preventDefault();
            var $this = $j(this);
            if ($j(this).parent().hasClass('active')) {
                return false
            }
            var $target = $this.attr("href");
            var targetOffset = $j("div.wpb_row[data-q_id='" + $target + "'],section.parallax_section_holder[data-q_id='" + $target + "']").offset().top - content_line_height - content_menu_top - content_menu_top_add;
            $j('html,body').stop().animate({
                scrollTop: targetOffset
            }, 500, 'swing', function() {
                $j('nav.content_menu ul li').removeClass('active');
                $this.parent().addClass('active')
            });
            return false
        })
    }
}

function initButtonHover() {
    if ($j('.qbutton').length) {
        $j('.qbutton').each(function() {
            if (typeof $j(this).data('hover-background-color') !== 'undefined' && $j(this).data('hover-background-color') !== false) {
                var hover_background_color = $j(this).data('hover-background-color');
                var initial_background_color = $j(this).css('background-color');
                $j(this).hover(function() {
                    $j(this).css('background-color', hover_background_color)
                }, function() {
                    $j(this).css('background-color', initial_background_color)
                })
            }
            if (typeof $j(this).data('hover-border-color') !== 'undefined' && $j(this).data('hover-border-color') !== false) {
                var hover_border_color = $j(this).data('hover-border-color');
                var initial_border_color = $j(this).css('border-top-color');
                $j(this).hover(function() {
                    $j(this).css('border-color', hover_border_color)
                }, function() {
                    $j(this).css('border-color', initial_border_color)
                })
            }
            if (typeof $j(this).data('hover-color') !== 'undefined' && $j(this).data('hover-color') !== false) {
                var hover_color = $j(this).data('hover-color');
                var initial_color = $j(this).css('color');
                $j(this).hover(function() {
                    $j(this).css('color', hover_color)
                }, function() {
                    $j(this).css('color', initial_color)
                })
            }
        })
    }
}

function initSocialIconHover() {
    if ($j('.q_social_icon_holder').length) {
        $j('.q_social_icon_holder').each(function() {
            if (typeof $j(this).data('hover-background-color') !== 'undefined' && $j(this).data('hover-background-color') !== false) {
                var hover_background_color = $j(this).data('hover-background-color');
                var initial_background_color = $j(this).find('.fa-stack').css('background-color');
                $j(this).find('.fa-stack').hover(function() {
                    $j(this).css('background-color', hover_background_color)
                }, function() {
                    $j(this).css('background-color', initial_background_color)
                })
            }
            if (typeof $j(this).data('hover-border-color') !== 'undefined' && $j(this).data('hover-border-color') !== false) {
                var hover_border_color = $j(this).data('hover-border-color');
                var initial_border_color = $j(this).find('.fa-stack').css('border-top-color');
                $j(this).find('.fa-stack').hover(function() {
                    $j(this).css('border-color', hover_border_color)
                }, function() {
                    $j(this).css('border-color', initial_border_color)
                })
            }
            if (typeof $j(this).data('hover-color') !== 'undefined' && $j(this).data('hover-color') !== false) {
                var initial_color;
                var initial_style;
                var hover_color = $j(this).data('hover-color');
                if ($j(this).find('.fa-stack i').length) {
                    initial_color = $j(this).find('.fa-stack i').css('color');
                    initial_style = $j(this).find('.fa-stack i').attr('style')
                } else if ($j(this).find('.simple_social').length) {
                    initial_color = $j(this).find('.simple_social').css('color');
                    initial_style = $j(this).find('.simple_social').attr('style')
                }
                if ($j(this).find('.fa-stack')
                    .length) {
                    $j(this).find('.fa-stack').hover(function() {
                        $j(this).find('i').attr('style', function(i, s) {
                            return initial_style + 'color: ' + hover_color + '!important;'
                        })
                    }, function() {
                        $j(this).find('i').attr('style', function(i, s) {
                            return initial_style + 'color: ' + initial_color + '!important;'
                        })
                    })
                } else if ($j(this).find('.simple_social').length) {
                    $j(this).find('.simple_social').hover(function() {
                        $j(this).attr('style', function(i, s) {
                            return initial_style + 'color: ' + hover_color + '!important;'
                        })
                    }, function() {
                        $j(this).attr('style', function(i, s) {
                            return initial_style + 'color: ' + initial_color + '!important;'
                        })
                    })
                }
            }
        })
    }
}

function initTabsActiveBorder() {
    if ($j('.q_tabs.vertical, .q_tabs.boxed').length) {
        $j('.q_tabs.vertical, .q_tabs.boxed').each(function() {
            var parentBgColor = getParentBackgroundColor($j(this));
            var activeElement = $j(this).find('li.active a');
            if ($j(this).hasClass('boxed')) {
                activeElement.css('border-bottom-color', parentBgColor)
            }
            if ($j(this).hasClass('left')) {
                activeElement.css('border-right-color', parentBgColor)
            }
            if ($j(this).hasClass('right')) {
                activeElement.css('border-left-color', parentBgColor)
            }
        })
    }
}

function getParentBackgroundColor(element) {
    return element.parents().filter(function() {
        var color = $j(this).css('background-color');
        return color != 'transparent' && color != 'rgba(0, 0, 0, 0)'
    }).eq(0).css('background-color')
}

function setActiveTabBorder() {
    if ($j('.q_tabs li.active').length) {
        $j(this).click(function() {
            initTabsActiveBorder()
        })
    }
}

function initPopupMenu() {
    "use strict";
    if ($j('a.popup_menu').length) {
        $j(".popup_menu_holder_outer").height($window_height).niceScroll({
            scrollspeed: 30,
            mousescrollstep: 20,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: false,
            horizrailenabled: false
        });
        $j(window).resize(function() {
            $j(".popup_menu_holder_outer").height($window_height)
        });
        $j('a.popup_menu').on('click', function(e) {
            e.preventDefault();
            if (!$j(this).hasClass('opened')) {
                $j(this).addClass('opened');
                $j('body').addClass('popup_menu_opened');
                setTimeout(function() {
                    $j('body').css('overflow', 'hidden')
                }, 400)
            } else {
                $j(this).removeClass('opened');
                $j('body').removeClass('popup_menu_opened');
                setTimeout(function() {
                    $j('body').css('overflow', 'visible');
                    $j("nav.popup_menu ul.sub_menu").slideUp(200, function() {
                        $j('nav.popup_menu').getNiceScroll().resize()
                    })
                }, 400)
            }
        });
        $j(".popup_menu > ul > li.has_sub > a, .popup_menu > ul > li.has_sub > h6").on('tap click', function(e) {
            e.preventDefault();
            if ($j(this).closest('li.has_sub').find("> ul.sub_menu").is(":visible")) {
                $j(this).closest('li.has_sub').find("> ul.sub_menu").slideUp(200, function() {
                    $j('.popup_menu_holder_outer').getNiceScroll().resize()
                });
                $j(this).closest('li.has_sub').removeClass('open_sub')
            } else {
                $j(this).closest('li.has_sub').addClass('open_sub');
                $j(this).closest('li.has_sub').find("> ul.sub_menu").slideDown(200, function() {
                    $j('.popup_menu_holder_outer').getNiceScroll().resize()
                })
            }
            return false
        });
        $j(".popup_menu ul li:not(.has_sub) a").click(function() {
            if (($j(this).attr('href') !== "http://#") && ($j(this).attr('href') !== "#")) {
                $j('a.popup_menu').removeClass('opened');
                $j('body').removeClass('popup_menu_opened').css('overflow', 'visible');
                $j("nav.popup_menu ul.sub_menu").slideUp(200, function() {
                    $j('nav.popup_menu').getNiceScroll().resize()
                })
            } else {
                return false
            }
        })
    }
}