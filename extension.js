const inb = document.getElementById("input-btn")
const ine = document.getElementById("input-el")
const ulel = document.getElementById("ul-el")
const debtn = document.getElementById("del-btn")
const sabtn = document.getElementById("save-btn")
let myLeads = [];
const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

inb.addEventListener('click', function (event) {
    console.log("hi");
    myLeads.push(ine.value);
    ine.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

function render(leads ) {

    let listitems = ""

    for (let i = 0; i < leads.length; i++) {
        listitems += `<li><a href = "${leads[i]}" target = '_blank'>${leads[i]}</a></li>`
    }
    ulel.innerHTML = listitems;
}

debtn.addEventListener('dblclick', function() {
    myLeads = [];
    localStorage.clear();
    render(myLeads);
})

sabtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    });
  }) 
