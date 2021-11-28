function build(element){
  window[element]().then(html => {
    document.getElementById(element).innerHTML = html;
  });
}

//-------------------------------------------------

async function announcements(){
  function announcement(title, src, description){
    var html = `
      <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm h-100">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">${title}</h4>
        </div>
        <img src="${src}" class="card-img-top" alt="...">        
        <div class="card-body">
          <p class="card-text">${description}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
      </div>
    `;
    return html;
  }

  const response = await fetch('./data/announcements.json');
  const data     = await response.json();

  var html = '';
  data.forEach((item) => {
    html += announcement(item.title, item.src, item.description);
  })

  html = `
    <div style="padding-top:10px;">
      <div class="row row-cols-1 row-cols-md-3 mb-3">
        ${html}
      </div>
    </div>
  `;

  return html;
}

//-------------------------------------------------

async function welcome(){
  function template(title, message){
    var html = `
      <header>
        <div class="card bg-dark text-white">
          <img src="assets/img/latin_girl_02.jpg" class="card-img" alt="...">
          <div class="card-img-overlay">
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 class="display-4 fw-normal">${title}</h1>
              <p class="fs-5 text-light">${message}</p>
            </div>

          </div>
        </div>
      </header>
    `;
    return html;
  }

  const response = await fetch('./data/welcome.json');
  const data     = await response.json();

  var html = template(data.title, data.message);
  return html;
}

//-------------------------------------------------

async function carousel(){

  function buildLinks(data){

    if('links' in data){
      var links = data.links;
      var length = links.length;
      var html = '';

      for (var i=0; i < length; i++){
        html += `<a class="text-primary text-decoration-none" href="${links[i].url}">${links[i].name}</a> `
      }

      html = `
        <div>
          ${html}
        </div>
      `;

      return html;    
    }
    return '';

  }

  function template(data){
    var length = data.length;
    var html  = '';

    // indicators
    var indicators = '';
    for (var i = 0; i < length; i++) {
      var active = (i===0) ? `class="active" aria-current="true"` : ''; 
      indicators += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" ${active} aria-label="Slide ${i+1}"></button>`;
    }

    // wrap indicators
    html = `
      <div class="carousel-indicators">
        ${indicators}
      </div>
    `;

    // items
    var items = '';
    for (i = 0; i < length; i++) {
      var active = (i===0) ? 'active' : ''; 
      var links = buildLinks(data[i]);
      items += `
        <div class="carousel-item ${active}">
          <img src="${data[i].src}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block h-50">
            <h1>${data[i].title}</h1>
            <p>${data[i].description}</p>
            ${links}
          </div>
        </div>`;
    };

    // wrap items
    html += `
      <div class="carousel-inner">
        ${items}
      </div>
    `;
    return html;
  }

  const response = await fetch('./data/carousel.json');
  const data     = await response.json();
  var html = template(data);

  html = `
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

      ${html}

      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

    </div>
  `;

  return html;
}

//-------------------------------------------------

async function list(){
  function template(text, url, prettyLink){
    var html = `
      <li class="list-group-item">
        ${text}, <a class="text-decoration-none" href="${url}">${prettyLink}</a>
      </li>    
    `;
    return html;
  }

  const response = await fetch('./data/list.json');
  const data     = await response.json();

  var html = '';
  data.forEach((item) => {
    html += template(item.text, item.url, item.prettyLink);
  })

  html = `
    <ul class="list-group" style="padding-top:10px;">
      ${html}
    </div>
  `;

  return html;
}