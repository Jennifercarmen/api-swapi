(function() {
  // variables
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://swapi.co/api/people/';
  const container = $('#container-imagenes');
  const nresult = $('.noresult');
  let quantity=null;
  nresult.hide();

  // functions

  const data = (url, func) =>{
    $.ajax({
      url: proxy + url,
      contentType: 'application/json',
      success: func
    });
  };

  function dataCharacter(id, action) {
    const urlCharacter = url + `${id}`;
    data(urlCharacter, action);
  }

  // recorrer la data y crear imagenes

  const addImages = (data) => {
     quantity = data.count;
    for (let i = 1; i < quantity; i++) {
      if (i === 17) {
        continue;
      }
      let grupo =
        '<div class="col-xs-4 photo collection text-center flip" id="' + i + '"  data-id="' + i + '" >' +
        `<img class="img-responsive flip-1 content" src = https://starwars-visualguide.com/assets/img/characters/${i}.jpg data-target="#imgModal" data-toggle="modal">` +
        '</div>';
      container.append(grupo);
    }
  };
  data(url, addImages);

  $(document).on('click', '.collection', function() {
    let img = $(this).find('img')[0].src;
    let id = $(this).data('id');
    dataCharacter(id, addInfo);
  });
  const addInfo = (res) => {
    let name = res.name;
    let height = res.height;
    let hairColor = res.hair_color;
    let eyeColor = res.eye_color;
    let mass = res.mass;
    // $('img-character').src('.collection'.find('img')[0].src);
    $('.name').text(name);
    $('.hair_color').text(hairColor);
    $('.height').text(height);
    $('.eye_color').text(eyeColor);
    $('.mass').text(mass);
  };

})();