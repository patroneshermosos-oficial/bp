// create abel namespace
import './elements.js';
import {paths} from './paths.js';
import {runner} from './runner.js';

console.log(paths);
runner().then(() => init());


function init(){
  // get a handle on target
  var target = document.getElementById('target');

  // handle path not found
  var notFound = () => { target.innerHTML = '<h1>Not Found!</h1>'; }
  Path.rescue(notFound);  

  // Here we define our routes
  Path.map("#/home").to(() => { $('#target').load('./features/home.html') });


  // paths defined in paths.js
  paths.forEach(item =>{
	Path.map(item.map).to(() => { $('#target').load(item.load) });   
  });

  // Here we set a "root route"
  Path.root("#/home");

  // listen for paths
  Path.listen();

  // -----------------------------------
  // init complete, display document
  // -----------------------------------
  document.documentElement.style.display = 'block'; 
  
}
