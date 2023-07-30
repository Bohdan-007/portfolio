$(() => {

  // PORTFOLIO section
  class Work {
    #photo;
    #subtitle;
    #title;
    #description;
    #btnText;
    #workLink

    constructor(photo, subtitle, title, description, btnText, workLink) {
      this.#photo = photo;
      this.#subtitle = subtitle;
      this.#title = title;
      this.#description = description;
      this.#btnText = btnText;
      this.#workLink = workLink;
    };

    get photo() { return this.#photo; };
    get subtitle() { return this.#subtitle; };
    get title() { return this.#title; };
    get description() { return this.#description; };
    get btnText() { return this.#btnText; };
    get workLink() { return this.#workLink; };
  };


  const works = [
    new Work('minimo-site', 'site', "A site about Someone's lifestyle",
      'This site can be used as a personal site for any media person or simply as a blog for anyone. Created by the Materialize library.',
      'view project', 'https://bohdan-007.github.io/minimo/'),

    new Work('tour-guide-site', 'site', 'tour guide site',
      'This site can be used as the main site for a travel agency or for a group of tourists who conduct hikes. This site was developed using the Bootstrap and UIkit libraries.',
      'view project', 'https://bohdan-007.github.io/tour-guide/'),

    new Work('lms-site', 'web-app', 'LMS platform for any events',
      'This application can be used as a client part of a small social network or a platform for learning. Tools such as HTML, CSS and the Materialize library were used to develop this service.',
      'view project', 'https://bohdan-007.github.io/lms/'),

    new Work('tic-tac-toe', 'web-game', 'TIC-TAC-TOE game for fun',
      'Tic-Tac-Toe is a web game. You can have fun playing Tic-Tac-Toe by yourself or in a company. HTML, CSS and JS were used to create this game.',
      'view project', 'https://bohdan-007.github.io/tic-tac-toe/'),

    new Work('animated', 'animation', 'animated site',
      'This is a simple animated site. Was created to practice with animation in CSS. During development, no third-party animation libraries were used, only pure CSS.',
      'view project', 'https://bohdan-007.github.io/animate-site/'),

    new Work('to-do-list', 'web-app', 'to do list',
      'This CSS generator is designed to make it easier to style elements. The SASS / SCSS preprocessor was used in the development.',
      'view project', 'https://bohdan-007.github.io/to-do-list/'),

    new Work('css-generator', 'web-app', 'CSS generator',
      'In this To Do List you can add, delete, mark as completed and save tasks that need to be completed. Developed using HTML, CSS, JS and jQueri.',
      'view project', 'https://bohdan-007.github.io/css-generator/'),
  ];

  // creating and add work to portfolio list
  const portfolioCol = $('#portfolioCol');

  works.forEach((work, index) => {
    const row = $('<div class="row mb-5 animate__animated animate-left"></div>');

    const colPhoto = $('<div class="col-12 col-lg-5 mb-4 mb-lg-0 mx-auto d-flex justify-content-center align-items-center portfolio__col-photo"></div>');
    const img = $(`<img src="./images/portfolio-images/${work.photo}.jpg" alt="${work.photo}" class="w-100 rounded-3"/>`);
    colPhoto.append(img);

    const colDesc = $('<div class="col-12 col-lg-5 mb-5 mb-lg-0 mx-auto d-flex flex-column justify-content-center"></div>');
    const subtitle = $(`<p class="m-0 text-white-50 text-uppercase">${work.subtitle}</p>`);
    const title = $(`<h2 class="py-4 m-0 text-capitalize text-white">${work.title}</h2>`);
    const description = $(`<p class="mb-5 text-white-50 fs-5 portfolio__desccription">${work.description}</p>`);
    const button = $(`<a href="${work.workLink}" target="_blank" class="btn btn-primary px-5 py-2 border-0 text-uppercase align-self-start portfolio__button">${work.btnText}</a>`);
    colDesc.append(subtitle);
    colDesc.append(title);
    colDesc.append(description);
    colDesc.append(button);

    if (index % 2 !== 0) {
      colPhoto.addClass('order-1');
      colDesc.addClass('order-0');
      row.removeClass('animate-left');
      row.addClass('animate-right');
    };

    row.append(colPhoto);
    row.append(colDesc);
    portfolioCol.append(row);
  });


  // EDUCATION section
  // Accordion tabs
  $("#accordion").accordion({
    collapsible: true
  });


  // CONTACTS section

  // form validation
  (() => {
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        };

        form.classList.add('was-validated')
      }, false)
    })
  });

  // form submit
  const form = document.getElementById("contactForm");

  $(form).on("submit", function (event) {
    event.preventDefault();
    const data = new FormData(event.target);

    $.ajax({
      url: event.target.action,
      type: form.method,
      data: data,
      processData: false,
      contentType: false,
      dataType: 'json',

      success: function () {
        console.log('Yes');
        form.reset();

        alertify.set('notifier', 'position', 'top-right');
        alertify.success('The letter was sent successfully', 3, 'success');
      },

      error: () => {
        console.log('No');
      },

      complete: function () {
        console.log('Complete');
      }
    });
  });


  // Animation
  const scrollElements = $('.animate__animated');

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
    );
  };

  const displayScrollElement = (el) => {
    const classList = Array.from(el.classList);

    // animation is used depending on the element
    switch (true) {
      case classList.includes('animate-right'):
        el.classList.add('animate__fadeInRight');
        break;

      case classList.includes('animate-left'):
        el.classList.add('animate__fadeInLeft');
        break;

      case classList.includes('animate-fadein'):
        el.classList.add('animate__fadeIn');
        break;

      case classList.includes('animate-fadein-top-left'):
        el.classList.add('animate__fadeInTopLeft');
        break;

      case classList.includes('animate-fadein-top-right'):
        el.classList.add('animate__fadeInTopRight');
        break;

      case classList.includes('animate-fade-down-big'):
        el.classList.add('animate__fadeInDownBig');
        break;

      case classList.includes('animate-fade-down'):
        el.classList.add('animate__fadeInDown');
        break;
    };
  };

  const hideScrollElement = (el) => {
    el.classList.remove('animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeIn', 'animate__fadeInTopLeft', 'animate__fadeInDownBig', 'animate__fadeInTopRight', 'animate__fadeInDown');
  };

  const handleScrollAnimation = () => {
    Array.from(scrollElements).forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      };
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });


  // scrolll up
  $.scrollUp({
    scrollText: '<i class="fa-solid fa-circle-chevron-up fs-1 scrollup-icon"></i>',
  });

});