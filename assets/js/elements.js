class navbar extends HTMLElement {
constructor() {
  super();
}

connectedCallback() {

  this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#/home">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#/features" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Features
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#/cards">Cards</a>
              <a class="dropdown-item" href="#/login">Login</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#/partial">Partial</a>
            </div>
          </li>              
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#/gear" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Gear
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#/album">Album</a>
              <a class="dropdown-item" href="#/marketing">Marketing</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#/tables">Tables</a>
            </div>
          </li>              
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>`; 
}   

}
customElements.define('bp-navbar', navbar);

//------------------------------------------------

class welcome extends HTMLElement {
constructor() {
  super();
}

connectedCallback() {
  this.innerHTML = `
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>`;    
}

}
customElements.define('bp-welcome', welcome);


//------------------------------------------------

class cards extends HTMLElement {
constructor() {
  super();
}

connectedCallback() {
  this.innerHTML = `
    <div class="card-deck">
      <div class="card text-white bg-primary mb-3" >
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div class="card text-white bg-secondary mb-3" >
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div class="card text-white bg-success mb-3" >
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>`;    
}

}
customElements.define('bp-cards', cards);