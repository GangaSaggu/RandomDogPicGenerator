
// ------------------------------------------
//  ADD YOUR FETCH FUNCTIONS & CODE
// ------------------------------------------

const select = document.getElementById('breed');
const card = document.querySelector('.cards');

function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            card.innerHTML += `<img src="${data.message}"/>`;
    }) 
}
fetchImages();


// ------------------------------------------
//  ADD YOUR CODE TO REPLACE BELOW WITH THE BREED LIST FROM THE API
// ------------------------------------------

function fetchData(url){
    return fetch(url)
        .then(res => res.json())
};

fetchData('https://dog.ceo/api/breeds/list')
    .then (data => listOptions(data.message))

    
    function listOptions(data){
        const listItems = data.map( item => `
            <option value='${item}'>${item}</option>`).join(" ");
    select.innerHTML = listItems; 
    }

    
    function randomBreedImages(){
        const breeds = breed.value;
        const img = card.querySelector('img');    
        fetchData(`https://dog.ceo/api/breed/${breeds}/images/random`)
            .then(data => {
                img.src = data.message;
                img.alt = breeds;
        });
    }
    
   select.addEventListener('change',randomBreedImages);
   card.addEventListener('click', randomBreedImages);

// select.innerHTML = " <option value='Breed 1'>Breed 1</option>" +
//     " <option value='Breed 2'>Breed 2</option>" +
//     "<option value='Breed 3'>Breed 3</option>";

