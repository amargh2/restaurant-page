/* Declaring important variables */

import './style.css'
import Soup from './soup.jpg'
import Salad from './salad.jpg'
import Fruit from './fruit.jpg'
import Toast from './toast.jpg'
import Burger from './veggie-burger-deryn-macey.jpg'
import Bowl from './bowl-jo-sonn.jpg'
import GrainBowl from './grain-bowl-olena-sergienko.jpg'

const Parts = {

    generateContentDiv() {
        let contentDiv = document.createElement('div')
        contentDiv.classList.add('content')
        return contentDiv
    },

    generateHeader() {
        let headerDiv = document.createElement('div');
        headerDiv.classList.add('header')
        headerDiv.innerHTML = '<h1>Welcome to Plant-B</h1>';
        return headerDiv
    },

    generateNav() {
        let navDiv = document.createElement('div');
        navDiv.classList.add('nav');
        
        let menuButton = document.createElement('button');
        let contactButton = document.createElement('button')
        let aboutButton = document.createElement('button')
        
        menuButton.classList.add('button')
        contactButton.classList.add('button')
        aboutButton.classList.add('button')

        menuButton.textContent = 'Menu'
        contactButton.textContent = 'Contact Us'
        aboutButton.textContent = 'About Us'

        navDiv.appendChild(aboutButton)
        navDiv.appendChild(menuButton)
        navDiv.appendChild(contactButton)

        return navDiv
        
    },
    
    generateFooter() {
        let footerDiv = document.createElement('div');
        footerDiv.classList.add('footer')
        footerDiv.textContent = 'footer text footer text footer text';
        return footerDiv
    },

    generatePictureGrid() {
        let pictureDiv = document.createElement('div');
        pictureDiv.classList.add('picture-grid')
        
        const imgOne = new Image();
        imgOne.src = Burger;
        imgOne.classList.add('main-picture')
        
        let imgTwo = new Image();
        imgTwo.src = Bowl;
        imgTwo.classList.add('main-picture')

        let imgThree = new Image();
        imgThree.src = GrainBowl;
        imgThree.classList.add('main-picture')
        
        let imgFour = new Image();
        imgFour.src = Soup;
        imgFour.classList.add('main-picture')

        pictureDiv.appendChild(imgOne);
        pictureDiv.appendChild(imgTwo);
        pictureDiv.appendChild(imgThree);
        pictureDiv.appendChild(imgFour);

        return pictureDiv
    },

    generateMainTextDiv() {
        let mainTextDiv = document.createElement('div')
        mainTextDiv.textContent = 'We are the best plant-based restaurant in the city! We offer an extensive menu of flavorful fully vegan foods that are filling and satisfying! Come see us or order online!'
        mainTextDiv.classList.add('text')
        return mainTextDiv
    },

    generateMainDiv(pictureDiv, mainTextDiv) {
        let mainDiv = document.createElement('div')
        mainDiv.classList.add('main')
        mainDiv.appendChild(pictureDiv);
        mainDiv.appendChild(mainTextDiv);
        return mainDiv
    },

    generatePage(contentDiv, navDiv, mainDiv, footerDiv, headerDiv) {
        document.body.appendChild(contentDiv)
        contentDiv.appendChild(headerDiv);
        contentDiv.appendChild(navDiv)
        contentDiv.appendChild(footerDiv);
        contentDiv.appendChild(mainDiv);
    },

    
}

Parts.generatePage(Parts.generateContentDiv(), Parts.generateNav(), Parts.generateMainDiv(Parts.generatePictureGrid(), Parts.generateMainTextDiv()), Parts.generateFooter(), Parts.generateHeader())