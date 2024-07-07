let cardContainer = document.getElementById("cardContainer");

let countriesData = [];

fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then(data => {
    countriesData = data;
    displayCountries(countriesData);
});

function displayCountries(data) {
    let cardContent = "";
    data.forEach(element => {
        cardContent += `
        <div class="card">
            <div class="card-left">
                <h2>${element.name.common}</h2>
                <p>Official Name : ${element.name.official}</p>
                <p>Population : ${element.population} </p>
                <p>Region : ${element.region} </p>
                <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Map</a>
                
            </div>
            <div class="card-right">
                <img src="${element.flags.svg}" alt="Flag of ${element.name.common}" class="flag">
            </div>
        </div>`;
    });
    cardContainer.innerHTML = cardContent;
}

function searchCountries() {
    let query = document.getElementById("searchBar").value;
    let filteredData = countriesData.filter(country => 
        country.name.common.includes(query)
    );
    displayCountries(filteredData);
}
