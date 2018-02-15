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



