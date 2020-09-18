// 1.create an array containing 5 objects with properies{name,age,city,salary}
//  Display all the objects in a table
//  Create a search functionality for name and city
//  Delete button to delete records
//  data is not permanent
let people = [
    {
        name   : "aaa",
        age    : 20,
        city   : "chennai",
        salary : "20000",
    },
    {
        name   : "bbb",
        age    : 30,
        city   : "chennai",
        salary : "10000",
    },
    {
        name   : "ccc",
        age    : 35,
        city   : "Madras",
        salary : "70000",
    },
    {
        name   : "ddd",
        age    : 25,
        city   : "chennai",
        salary : "25000",
    },
    {
        name   : "eee",
        age    : 30,
        city   : "Theni",
        salary : "50000",
    },       
]; 

function display(superarray) {
    let tabledata = " ";

    superarray.forEach(function (p,index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${p.name}</td>
      <td>${p.age}</td>
      <td>${p.city}</td>
      <td>${p.salary}</td>
      <td> <button onclick='deleteRecord(${index})'>delete</button> </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}
 
display(people);

function searchByName() {
    let searchValue = document.getElementById("searchName").value;
    let search = people.filter(function (p) {
        return (p.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 
        | p.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        );
    });

    display(search);     
}

function deleteRecord(index){
    people.splice(index,1);
    display(people);
}
