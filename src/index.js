/* Imports for webpack/assets */

import './style.css'
import Leaves from './leaves.jpg'
import Soup from './soup.jpg'
import Salad from './salad.jpg'
import Fruit from './fruit.jpg'
import Toast from './toast.jpg'
import Burger from './veggie-burger-deryn-macey.jpg'
import Bowl from './bowl-jo-sonn.jpg'
import GrainBowl from './grain-bowl-olena-sergienko.jpg'



/*This class contains every function necessary for the construction of the
main page; it will be extended into other classes for the other pages;
this is the scaffold to build from.*/

class MainPage {

    generateContentDiv() {
        let contentDiv = document.createElement('div')
        contentDiv.classList.add('content')
        return contentDiv
    }

    generateHeader() {
        let headerDiv = document.createElement('div');
        headerDiv.classList.add('header')
        headerDiv.innerHTML = '<h1>Welcome to Plant-B</h1>';
        return headerDiv
    }

    generateButtons() {
        const menuButton = document.createElement('button');
        const contactButton = document.createElement('button');
        const aboutButton = document.createElement('button');
        menuButton.id = 'menu-button';
        aboutButton.id = 'about-button';
        contactButton.id = 'contact-buttons';
        menuButton.class
        menuButton.addEventListener('click', this.loadMenuPage);
        aboutButton.addEventListener('click', this.makeHomePage());
        buttons = [menuButton, aboutButton, contactButton];
        return buttons;
    }



    generateNav() {
        const navDiv = document.createElement('div');
        navDiv.classList.add('nav');
        

        const aboutButton = document.createElement('button')
        aboutButton.id = 'about-button'
        aboutButton.className = 'button';
        aboutButton.textContent = 'About Us'

        const menuButton = document.createElement('button')
        menuButton.id = 'menu-button';
        menuButton.className = 'button';
        menuButton.textContent = 'Menu'
        
        const contactButton = document.createElement('button');
        contactButton.id = 'contact-button';
        contactButton.className = 'button';
        contactButton.textContent = 'Contact Us'
    

        navDiv.appendChild(aboutButton)
        navDiv.appendChild(menuButton)
        navDiv.appendChild(contactButton)
        
        return navDiv
    }

 
    
    generateFooter() {
        let footerDiv = document.createElement('div');
        footerDiv.classList.add('footer')
        footerDiv.textContent = 'footer text footer text footer text';
        return footerDiv
    }

    generatePictureGrid() {
        let pictureDiv = document.createElement('div');
        pictureDiv.classList.add('picture-grid')
        
        const imgOne = new Image();
        imgOne.src = Burger;
        imgOne.classList.add('main-picture')
        
        const imgTwo = new Image();
        imgTwo.src = Bowl;
        imgTwo.classList.add('main-picture')

        const imgThree = new Image();
        imgThree.src = GrainBowl;
        imgThree.classList.add('main-picture')
        
        const imgFour = new Image();
        imgFour.src = Soup;
        imgFour.classList.add('main-picture')

        pictureDiv.appendChild(imgOne);
        pictureDiv.appendChild(imgTwo);
        pictureDiv.appendChild(imgThree);
        pictureDiv.appendChild(imgFour);

        return pictureDiv
    }

    generateMainTextDiv() {
        let mainTextDiv = document.createElement('div')
        mainTextDiv.textContent = 'We are the best plant-based restaurant in the city! We offer a great menu of flavorful and fully vegan dishes that are filling and satisfying! Come see us!'
        mainTextDiv.classList.add('text')
        return mainTextDiv
    }

    generateMainDiv(pictureDiv, mainTextDiv) {
        let mainDiv = document.createElement('div')
        mainDiv.classList.add('main')
        mainDiv.appendChild(pictureDiv);
        mainDiv.appendChild(mainTextDiv);
        return mainDiv
    }

    generatePage(contentDiv, navDiv, mainDiv, footerDiv, headerDiv) {
        document.body.appendChild(contentDiv)
        contentDiv.appendChild(headerDiv);
        contentDiv.appendChild(navDiv)
        contentDiv.appendChild(footerDiv);
        contentDiv.appendChild(mainDiv);
    }

    makeHomePage() {
        this.generatePage(
            this.generateContentDiv(),
            this.generateNav(),
            this.generateMainDiv(
                this.generatePictureGrid(),
                this.generateMainTextDiv()
            ),
            this.generateFooter(),
            this.generateHeader()
        )
        this.addListenersToButtons()
    }

    appendStaticElements(containerDiv, navDiv, footerDiv, headerDiv){
        document.body.appendChild(containerDiv);
        containerDiv.appendChild(headerDiv);
        containerDiv.appendChild(navDiv)
        containerDiv.appendChild(footerDiv);
    }

    clearPage() {
        document.body.replaceChildren()
    }

    addListeners() {
        document.body.addEventListener('click', function(e){
            if (e.target.id= 'menu-button') {
                menuPage.clearPage();
                menuPage.loadMenuPage();
            }
            else if (e.target.id = 'about-button') {
                homePage.clearPage();
                homePage.makeHomePage();
            }
            else if (e.target.id = 'contact-button') {
                contactPage.clearPage();
                contactPage.generateForm();
            }
            else {
                return false
            }
        })
    }

    addListenersToButtons() {
       const aboutButton = document.getElementById('about-button');
       const menuButton = document.getElementById('menu-button');
       const contactButton = document.getElementById('contact-button');

       aboutButton.addEventListener('click', () =>{
           this.clearPage()
           this.makeHomePage()
       })

       menuButton.addEventListener('click', () => {
           this.clearPage();
           menuPage.loadMenuPage()
       })

       contactButton.addEventListener('click', () => {
       this.clearPage();
       contactPage.loadContactPage()
        })
    }

}

class MenuPage extends MainPage {
    
    generateMenuContainer() {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'menu';
        const menuHeaderDiv = document.createElement('div');
        menuHeaderDiv.className = 'menu-header';
        return menuContainer
    }

    generateImages(){
        const img1 = new Image();
        img1.src = Soup;
        const img2 = new Image();
        img2.src = Salad;
        const img3 = new Image();
        img3.src = Toast;
        const img4 = new Image();
        img4.src = Bowl;

        const images = [img1, img2, img3, img4];
        const imageDiv = document.createElement('div')
        imageDiv.className = 'image-div'

        images.forEach(image => image.classList.add('menu-img'));
        images.forEach(image => {
            imageDiv.appendChild(image)
        })

        return imageDiv
    }

    generateDescriptions() {

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description-div';

        const title1 = document.createElement('h3');
        title1.className = 'title'
        title1.textContent = 'Butternut Bisque - $6'
        const desc1 = document.createElement('p');
        desc1.textContent = 'Butternut squash bisque with warm crusty bread.';
        descriptionDiv.appendChild(title1)
        title1.appendChild(desc1)

        const title2 = document.createElement('h3')
        title2.className = 'title'
        title2.textContent = 'Garden Salad - $10'
        const desc2 = document.createElement('p');
        desc2.textContent = "Salad, huh? Oh yeah, we got salad.";
        const finishedItem2 = title2.appendChild(desc2);
        descriptionDiv.appendChild(title2);
        title2.appendChild(desc2);
        
        const title3 = document.createElement('h3')
        title3.className = 'title'
        title3.textContent = 'Toast Board - $10'
        const desc3 = document.createElement('p');
        desc3.textContent = "We hate to tell you this, but you'll never own a house if you keep getting this. Might be worth it though?"
        const finishedItem3 = title3.appendChild(desc3);
        descriptionDiv.appendChild(title3);
        title3.appendChild(desc3);

        const title4 = document.createElement('h3')
        title4.className = 'title'
        title4.textContent = 'Grain Bowl - $10'
        const desc4 = document.createElement('p');
        desc4.textContent = 'Hearty and filling grain bowl with fresh ingredients and your choice of dressing.'
        descriptionDiv.appendChild(title4)
        title4.appendChild(desc4)

        
        
        return descriptionDiv
    }


    generateMenu(descriptionDiv, imageDiv, menuDiv) {
            
            const title = document.createElement('h2');
            title.textContent = 'Menu'
            const titleDiv = document.createElement('div')
            titleDiv.className = 'menu-header'
            titleDiv.appendChild(title)


            
            document.querySelector('.menu').appendChild(menuDiv);
            menuDiv.appendChild(titleDiv)
            menuDiv.appendChild(imageDiv);
            menuDiv.appendChild(descriptionDiv);        
        }
    

    generateMenuDiv() {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu-div');
        return menuDiv
    }

    loadMenuPage() {
        
        this.appendStaticElements(
            this.generateMenuContainer(),
            this.generateNav(),
            this.generateFooter(),
            this.generateHeader()
        )

        this.generateMenu(
            this.generateDescriptions(),
            this.generateImages(),
            this.generateMenuDiv()
        )
        
        this.addListenersToButtons()
    }
}

class ContactPage extends MainPage {
    
    generateContactContainer() {
        const contactContainer = document.createElement('div')
        contactContainer.className = 'contact'
        return contactContainer
    }

    generateForm() {

        const form = document.createElement("form");
        form.className = 'form';

        const contactHeader = document.createElement('div')
        contactHeader.className = 'contact-header'
        const title = document.createElement('h2');
        title.textContent = 'Want to get in touch?'
        contactHeader.appendChild(title)
        form.appendChild(contactHeader)

        const nameFieldDiv = document.createElement('div')
        nameFieldDiv.className = 'name-field'
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name')
        nameLabel.textContent = 'Name:'
        nameFieldDiv.appendChild(nameLabel);
        nameFieldDiv.appendChild(nameInput);
        

        const emailDiv = document.createElement('div');
        emailDiv.className = 'email-field'
        const emailInput = document.createElement('input');
        emailInput.type ='email';
        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email')
        emailLabel.textContent = 'Email:'
        emailDiv.appendChild(emailLabel);
        emailDiv.appendChild(emailInput);

        const messageDiv = document.createElement('div');
        messageDiv.className = 'message-field';
        const messageInput = document.createElement('input');
        messageInput.type = 'text';
        messageInput.value = "What's on your mind?"
        const messageLabel = document.createElement('label')
        messageLabel.setAttribute('for', 'message')
        messageDiv.appendChild(messageLabel);
        messageDiv.appendChild(messageInput)

        const submitDiv = document.createElement('div');
        submitDiv.className = 'submit';
        const submitInput = document.createElement('input');
        submitInput.type = 'submit';
        submitInput.value = 'Send';
        submitInput.className= 'button';
        const submitLabel = document.createElement('label');
        submitDiv.appendChild(submitLabel);
        submitDiv.appendChild(submitInput);



        const contactDiv = document.querySelector('.contact');


        form.appendChild(nameFieldDiv);
        form.appendChild(emailDiv);
        form.appendChild(messageDiv);
        form.appendChild(submitDiv)

        contactDiv.appendChild(form);
        document.body.appendChild(contactDiv);
    }

    loadContactPage() {
        
        this.appendStaticElements(
            this.generateContactContainer(),
            this.generateNav(),
            this.generateFooter(),
            this.generateHeader()
        )

        this.generateForm()
        this.addListenersToButtons()
    }
}

const menuPage = new MenuPage();
const homePage = new MainPage();
const contactPage = new ContactPage();
homePage.makeHomePage();





/*const homePage = new MainPage()

homePage.makeHomePage()*/