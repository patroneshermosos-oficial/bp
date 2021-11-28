async function fetchData(path){
  // TODO: language switching
	const res = await fetch(path);
	const json = await res.json();
  return json;
}

//------------------------------------------------

// Create a class for the element
class Navbar extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const src = this.getAttribute('src');

    function template(data){

      // title and collapse button
      var html = `
        <a class="navbar-brand" href="#/home">${data.site}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
      `;

      // start nav links
      html += `
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">      
      `;

      // build flat nav links
      data.links.forEach(link => {
        if (!link.isDropDown){
          html += `
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="${link.url}">${link.title}</a>
            </li>
          `;
        }
      });

      // build dropdown nav links
      data.links.forEach(link => {
        // build dropdown links
        function dropdown(links){
          var html = '';
          links.forEach(link => {
            html += `
              <li><a class="dropdown-item" href="${link.url}">${link.title}</a></li>
            `;
          });
          return html;
        }

        if (link.isDropDown){
          var dropdownLinks = dropdown(link.links)
          html += `
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ${link.title}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                ${dropdownLinks}
              </ul>
            </li>          
          `;
        }
      });

      // end nav links
      html += `
        </ul>      
      `;

      // add search form
      html += `
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
      `;
      return html;
    }
    
    fetchData(src)
    .then(data => {

      var html = '';
      html += template(data);

      html = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

          ${html}

          </div>
        </nav>      
      `;

      this.innerHTML = html;
    });    

  }
}

// Define the new element
customElements.define('bp-navbar', Navbar);

//------------------------------------------------

class footer extends HTMLElement {
  constructor() {
    super();

    // attribute content 
    const src = this.getAttribute('src');

    function template(data){
      // start footer
      var html = `
        <div style="padding:20px;">
          <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
              <div class="col-12 col-md">
                <img class="mb-2" src="assets/img/favicon.ico" alt="" width="24" height="19">
                <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
              </div>
      `;

      // start footer links
      data.forEach((item) => {
        html += `
          <div class="col-6 col-md">
            <h5>${item.name}</h5>
            <ul class="list-unstyled text-small">
        `;
        item.links.forEach((link) => {
          html += `<li class="mb-1"><a class="link-secondary text-decoration-none" href="${link.url}">${link.name}</a></li>`
        });
        html += `
            </ul>
          </div>
        `;
      })

      // close footer
      html += `
            </div>
          </footer>
        </div>
      `;
      
      return html;
    }

    fetchData(src)
    .then(data => {
      var html = template(data);
      this.innerHTML = html;
    });       

  }   
}

customElements.define('bp-footer', footer);
  
//------------------------------------------------

class cards extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const src = this.getAttribute('src');

    function template(title, src, description){
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

    fetchData(src)
    .then(data => {

      var html = '';
      data.forEach((item) => {
        html += template(item.title, item.src, item.description);
      })

      html = `
        <div style="padding-top:10px;">
          <div class="row row-cols-1 row-cols-md-3 mb-3">
            ${html}
          </div>
        </div>
      `;
    
      this.innerHTML = html;
    });    

  }
}
customElements.define('bp-cards', cards);

//-------------------------------------------------

// Create a class for the element
class Members extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const src = this.getAttribute('src'); 
    
    function template(item){
      var html = `
      <div class="col">
        <div class="card h-100"">
          <div class="card-header  py-1">
            ${item.title}
          </div>
          <img src="${item.src}" class="card-img-top" alt="..."> 
          <div class="card-body py-1">
            <h5 class="card-title">${item.name}</h5>
          </div>
          <div class="card-footer text-muted  py-1">
            ${item.note}
          </div>
        </div>
      </div>
      `;
      return html;      
    }
    
    fetchData(src)
    .then(data => {

      var html = '';
      data.forEach((item) => {
        html += template(item);
      })

      html = `
        <div style="padding-top:10px;">
          <div class="row row-cols-1 row-cols-md-5 g-4">
            ${html}
          </div>
        </div>
      `;

      this.innerHTML = html;
    });        

  }
}

// Define the new element
customElements.define('bp-members', Members);

//-------------------------------------------------

// Create a class for the element
class List extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const src = this.getAttribute('src');

    function template(text, url, prettyLink){
      var html = `
        <li class="list-group-item">
          ${text}, <a class="text-decoration-none" href="${url}">${prettyLink}</a>
        </li>    
      `;
      return html;
    }
    
    fetchData(src)
    .then(data => {

      var html = '';
      data.forEach((item) => {
        html += template(item.text, item.url, item.prettyLink);
      })

      html = `
        <ul class="list-group" style="padding-top:10px;">
          ${html}
        </div>
      `;

      this.innerHTML = html;
    });    

  }
}

// Define the new element
customElements.define('bp-list', List);

//-------------------------------------------------

// Create a class for the element
class Carousel extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const src = this.getAttribute('src');

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
    
    fetchData(src)
    .then(data => {

      var html = template(data);

      html = `
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style="padding-top:10px;">
    
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
      this.innerHTML = html;
    });  

  }
}

// Define the new element
customElements.define('bp-carousel', Carousel);

//-------------------------------------------------

// Create a class for the element
class Hero extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const src = this.getAttribute('src');

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
    
    fetchData(src)
    .then(data => {

      var html = template(data.title, data.message);
      this.innerHTML = html;
    });    

  }
}

// Define the new element
customElements.define('bp-hero', Hero);