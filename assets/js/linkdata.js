$.ajax({
    url: "http://195.154.118.169/guillaume/projetMMA/start.php?c=carousel&t=carouselData",
    context: document.body
}).done(function(data) {
    var carouselData = JSON.parse(data);
    var delay = 200;
    var delayIncrement = 200;

    carouselData.forEach(function(carousel) {
        var carouselItem = `
            <li class="slider-item">
                <div>
                    <div class="carousel-item active">
                        <img src="data:image/png;base64,${carousel.banner}" class="img-cover" width="575" height="550" alt="">
                        <div class="carousel-caption" style="display: flex; flex-direction: column;
                          align-items: center; justify-content: flex-start; top: 60%; position: absolute;
                          left: 50%; transform: translateX(-50%); width: 100%;">
                            <h1 class="display-2 text-center mb-3">${carousel.title}</h1>
                            <div>
                                <button type="button" class="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#${carousel.title.replace(/\s+/g, '')}Modal">Lire l'article</button>
                                <button type="button" class="btn btn-primary">Acheter sa place pour l'UFC 300</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>`;

        var modalItem = `
            <div class="modal fade" id="${carousel.title.replace(/\s+/g, '')}Modal" tabindex="-1" aria-labelledby="${carousel.title.replace(/\s+/g, '')}ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-modal">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="${carousel.title.replace(/\s+/g, '')}ModalLabel">${carousel.title}</h1>
                            <button type="button" class="btn-close text-brand" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${carousel.description}
                        </div>
                    </div>
                </div>
            </div>`;

        $("[data-slider-container]").append(carouselItem);
        $("body").append(modalItem);
        delay += delayIncrement;
    });
});


$.ajax({
    url: "http://195.154.118.169/guillaume/projetMMA/start.php?c=ufc&t=ufcData",
    context: document.body
  }).done(function(data) {
    var ufcData = JSON.parse(data);
    var screenWidth = window.innerWidth;
    var delay = 200;
    var delayIncrement = screenWidth < 992 ? 0 : 200;
    ufcData.forEach(function(ufc) {
      var nouveauUfc = `
        <div class="col-md-4" data-aos="fade-left" data-aos-delay="${delay}">
          <div class="ufc p-4 bg-base shadow-effect">
            <div class="iconbox">
              <i class="${ufc.image}"></i>
            </div>
            <h1 class="mt-4 mb-2">${ufc.title}</h1>
            <h4>${ufc.title}</h4>
            <p>${ufc.description}</p>
            <a  class="link-inter link-custom" data-bs-toggle="modal" data-bs-target="#${ufc.title}Modal" style="cursor: pointer;">En savoir plus</a>
          </div>
        </div>
        <div class="modal fade" id="${ufc.title}Modal" tabindex="-1" aria-labelledby="${ufc.title}ModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-modal">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">${ufc.title}</h1>
                <button type="button" class="btn-close text-brand" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div class="modal-body">
                ${ufc.description}
              </div>
            </div>
          </div>
        </div>`;
      $(".row.gy-4.ufc-container").append(nouveauUfc);
      delay += delayIncrement;
    });
  });
