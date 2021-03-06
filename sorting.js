import { getProductLS, showCards } from './mapping.js'
import { addELforDeleteButton } from './script.js';


//Transform price to Number
function priceToNumber(element) {
    return parseInt(element.price.replace(/ /g, ''))
}

//Sort by price low-high
function sortIncrease() {
    const productsLS = getProductLS()
    productsLS.sort((a, b) => {
        
        if (priceToNumber(a) > priceToNumber(b)) {
            return 1;
        }
        if (priceToNumber(a) < priceToNumber(b)) {
            return -1;
        }
        return 0;
    })
    localStorage.setItem('products', JSON.stringify([...productsLS]))
    showCards();
}

//Sort by price high-low
function sortDecrease() {
    const productsLS = getProductLS()
    productsLS.sort((a, b) => {
        
        if (priceToNumber(a) > priceToNumber(b)) {
            return -1;
        }
        if (priceToNumber(a) < priceToNumber(b)) {
            return 1;
        }
        return 0;
    })
    localStorage.setItem('products', JSON.stringify([...productsLS]))
    showCards();
}

//Sort by name
export function sortByName() {
    const productsLS = getProductLS()
    productsLS.sort((a, b) => {
        
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
    localStorage.setItem('products', JSON.stringify([...productsLS]))
    showCards();
}

//Sorting
const select = document.getElementById('filter')
export function sorting() {
    const sortValue = select.value
    switch (sortValue) {
        case 'increase':
            sortIncrease();
            break;
        case 'decrease': 
            sortDecrease();
            break; 
        case 'by-name':
            sortByName();
        default:
            sortByName();
    }
}

//Check select value
select.addEventListener('change', (e) => {
    sorting(e.target.value) 
})
