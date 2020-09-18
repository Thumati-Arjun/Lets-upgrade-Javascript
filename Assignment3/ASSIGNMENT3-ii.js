// 2.create a blank array and later on create a add bus functionality bus object contains{name,source,
//   destination,number,passenger capacity}
//  A form to add new bus
//  Display data in table format
//  search by source and destination
//  data should be stored permanently in localstorage
    

let bus = [];
//   console.log(localStorage.getItem(bus));
  function display(superarray = undefined) {
    let tabledata = " ";
  console.log(superarray);
    if (superarray == undefined) {
      bus = JSON.parse(localStorage.getItem("bus"));
      console.log(bus);
    } else {
      bus = superarray;
    }
      
    superarray.forEach(function (b,index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${b.name}</td>
      <td>${b.source}</td>
      <td>${b.destination}</td>
      <td>${b.num}</td>
      <td>${b.capacity}</td>
      </tr>`;
    
      tabledata += currentrow;
    });
    
    document.getElementsByClassName("cbus")[0].innerHTML = tabledata;
  }  
  
  function addBus(e) {
    e.preventDefault();
    let b = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("src").value;
    let destination = document.getElementById("dest").value;
    let num = document.getElementById("no").value;
    let capacity = document.getElementById("capacity").value;
    b.name = name;
    b.source = source;
    b.destination = destination;
    b.num = Number(num);
    b.capacity = Number(capacity);
  
    let bus = JSON.parse(localStorage.getItem("bus"));
    bus.push(b);
    localStorage.setItem("bus", JSON.stringify(bus));
    
    display(bus);
    
    document.getElementById("name").value = "";
    document.getElementById("src").value = "";
    document.getElementById("dest").value = "";
    document.getElementById("no").value = "";
    document.getElementById("capacity").value = "";
  }
  
  function searchBySource() {
    let searchValue = document.getElementById("searchplace").value;
    let bus = JSON.parse(localStorage.getItem("bus"));
    let search = bus.filter(function (b) {
        return (b.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 
        );
    });  
    display(search);     
  }
  function searchByDest() {
    let searchValue = document.getElementById("searchplace1").value;
    let bus = JSON.parse(localStorage.getItem("bus"));
    let search = bus.filter(function (b) {
        return ( b.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        );
    });  
    display(search);     
  }
 
