// recorrer la data y crear imagenes
let container = $('#container-imagenes');
data.forEach(function(element) {
  let grupo =
    '<div class="col-xs-4 photo collection text-center flip" data-name="' + element.name + '" data-id="' + element.id + '">' +
    '<img class="img-responsive flip-1 content" src = ' + element.image + ' data-target="#imgModal" data-toggle="modal">' +
    '</div>';
  container.append(grupo);
});

// filtro
$('#search').keyup(function() {
  let name = $(this).val().toLowerCase();
  $('.collection').hide();
  $('.collection').each(function() {
    let search = $(this).data('name');
    let id = $(this).data('id');
    if (search.indexOf(name) !== -1) {
      $(this).show();
    }
  });
});

// modal
$('.collection').click(function() {
  let name = $(this).data('name');
  let id = $(this).data('id');

  $('.name').text(name);
  const url = `https://swapi.co/api/people/${id}?format=json`;
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(addInfo)
    .catch(displayErrors);
});

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

const addInfo= (data) => {
  console.log(data);
  let height = data.height;
  let hair_color = data.hair_color;
  let eye_color = data.eye_color;
  let mass = data.mass;
  $('.hair_color').text(hair_color);
  $('.height').text(height);
  $('.eye_color').text(eye_color);
  $('.mass').text(mass);
};
const displayErrors = (err) => {
  console.log('INSIDE displayErrors!');
  console.log(err);
};



