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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, id.Facere quidem quod error voluptate tempore corruptiaut eum deserunt.Quam ad quidem dolores praesentium ipsumcum, beatae sequi obcaecati ?',
      'view project', 'https://bohdan-007.github.io/minimo/'),

    new Work('tour-guide-site', 'site', 'tour guide site', 'some description...', 'view project', 'https://bohdan-007.github.io/tour-guide/'),

    new Work('lms-site', 'web-app', 'LMS platform for any events', 'some description...', 'view project', 'https://bohdan-007.github.io/lms/'),

    new Work('tic-tac-toe', 'web-game', 'TIC-TAC-TOE game for fun', 'some description...', 'view project', 'https://bohdan-007.github.io/tic-tac-toe/'),

    new Work('animated', 'animation', 'animated site', 'some description...', 'view project', 'https://bohdan-007.github.io/animate-site/'),
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
  $("#accordion").accordion({
    collapsible: true
  });


  // CONTACTS section
  // form validation
  (() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
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
});