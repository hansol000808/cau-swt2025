/**
* Template Name: MyResume
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {

    let capitalContainer = select('.capital-container');
    if (capitalContainer) {
      let capitalIsotope = new Isotope(capitalContainer, {
        itemSelector: '.capital-item'
      });

      let capitalFilters = select('#capital-flters li', true);

      on('click', '#capital-flters li', function(e) {
        e.preventDefault();
        capitalFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        capitalIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        capitalIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

    let gangwonContainer = select('.gangwon-container');
    if (gangwonContainer) {
      let gangwonIsotope = new Isotope(gangwonContainer, {
        itemSelector: '.gangwon-item'
      });

      let gangwonFilters = select('#gangwon-flters li', true);

      on('click', '#gangwon-flters li', function(e) {
        e.preventDefault();
        gangwonFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        gangwonIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        gangwonIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }
    
    let chungcheongContainer = select('.chungcheong-container');
    if (chungcheongContainer) {
      let chungcheongIsotope = new Isotope(chungcheongContainer, {
        itemSelector: '.chungcheong-item'
      });

      let chungcheongFilters = select('#chungcheong-flters li', true);

      on('click', '#chungcheong-flters li', function(e) {
        e.preventDefault();
        chungcheongFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        chungcheongIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        chungcheongIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

    let gyeongsangContainer = select('.gyeongsang-container');
    if (gyeongsangContainer) {
      let gyeongsangIsotope = new Isotope(gyeongsangContainer, {
        itemSelector: '.gyeongsang-item'
      });

      let gyeongsangFilters = select('#gyeongsang-flters li', true);

      on('click', '#gyeongsang-flters li', function(e) {
        e.preventDefault();
        gyeongsangFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        gyeongsangIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        gyeongsangIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

    let jeollaContainer = select('.jeolla-container');
    if (jeollaContainer) {
      let jeollaIsotope = new Isotope(jeollaContainer, {
        itemSelector: '.jeolla-item'
      });

      let jeollaFilters = select('#jeolla-flters li', true);

      on('click', '#jeolla-flters li', function(e) {
        e.preventDefault();
        jeollaFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        jeollaIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        jeollaIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

    let jejuContainer = select('.jeju-container');
    if (jejuContainer) {
      let jejuIsotope = new Isotope(jejuContainer, {
        itemSelector: '.jeju-item'
      });

      let jejuFilters = select('#jeju-flters li', true);

      on('click', '#jeju-flters li', function(e) {
        e.preventDefault();
        jejuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        jejuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        jejuIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()