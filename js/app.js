(function() {
  // recorrer la data y crear imagenes
  let container = $('#container-imagenes');
  let nresult = $('.noresult');
  nresult.hide();
  const proxy = 'https://cors-anywhere.herokuapp.com/';

  const urlpeople = 'https://swapi.co/api/people?format=json';
 
  const handleErrors = (res) => {
    if (!res.ok) {
      throw Error(res.status);
    }
    return res;
  };

  const parseJSON = (res) => {
    return res.json()
      .then(function(parsedData) {
        return parsedData;
      });
  };
  const displayErrors = (err) => {
    console.log('INSIDE displayErrors!');
    console.log(err);
  };
  const addImages = (data) => {
    let quantity = data.count;
    for (let i = 1;i < quantity;i++) {
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
  fetch(proxy + urlpeople)
    .then(handleErrors)
    .then(parseJSON)
    .then(addImages)
    .catch(displayErrors);


  // filtro

  // modal
  $(document).on('click', '.collection', function() {
    let id = $(this).data('id');
    const url = `https://swapi.co/api/people/${id}?format=json`;
    $.ajax({
      url: url,
      success: addInfo, search
    });
  });

  const addInfo = (res) => {
    let name = res.name;
    let height = res.height;
    let hairColor = res.hair_color;
    let eyeColor = res.eye_color;
    let mass = res.mass;
    $('.name').text(name);
    $('.hair_color').text(hairColor);
    $('.height').text(height);
    $('.eye_color').text(eyeColor);
    $('.mass').text(mass);
  };
  const search = (respons) => {
    // $('#search').keyup(function() {
    //   let name = $(this).val().toLowerCase();
    //   $('.collection').hide();
    //   $('.collection').each(function() {
    //     let search = res.name;
    //     if (search.indexOf(name) !== -1) {
    //       $(this).show();
    //     }
    //   });
    // });
  };
  search();
})();