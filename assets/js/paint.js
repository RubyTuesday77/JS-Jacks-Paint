// Function to assign event listeners to color blocks
function configureListeners() {
    let images = document.getElementsByTagName('img');  // Selected img elements for color blocks
    for(let i = 0; i < images.length; i++) {   // Set iteration to apply below event listeners to each color block
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false) // Activates event listener to dim image when mouseover occurs
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false) // Activates event listener to undim image when mouseout occurs
    }
}

// Function changes color block opacity and calls getProductInfo function when mouseover event is triggered 
function addOpacity(event) {
    if(!this.classList.contains('dim')) {  // Set conditional to determine if corresponding ("this") color block (img tag) does NOT have "dim" CSS property (classList)
        this.classList.add('dim'); // If true, activates (or "adds") it
    }
    getProductInfo(event.target.id);  // getProductInfo function invoked with color block id, i.e., "pn1" passed as paintColor parameter (line 34)
}

// Function invoked when event-listener is occuring
function removeOpacity(event) {   // removeOpacity triggers when mouseout event occurs
    if(this.classList.contains('dim')) { // Set conditional to determine if the "dim" CSS property (classList) of the color block (img tag) is currently active
        this.classList.remove('dim');  // If true, removes the "dim" CSS property (classList) to corresponding ("this") color block (img tag)
    }
    /* When mouseover event triggered (or 'dim' CSS is activated) on a color block, the getProductInfo function that is executed 
    displays the corresponding name and price */
    let colorPrice = document.getElementById('color-price');  // Same variable declared on line 88 (could be commented out)
        colorPrice.textContent = ''; // Text field will be empty until mouseover event occurs, which inserts paintPrice value (line 89)

    let colorName = document.getElementById('color-name');  // Same variable declared on line 91 (could be commented out)
        colorName.textContent = ''; // Text field will be empty until mouseover event occurs, which inserts paintName value (line 92)

    event.preventDefault();  // not sure about this (could be commented out)
}

// Function returns corresponding color block's price and name, to be displayed when mouseover is triggered
function getProductInfo(paintColor) {
    let paintPrice;
    let paintName;
    
    switch(paintColor) {
        case 'pn1':  // declared paintPrice/paintName for color block id pn1
            paintPrice = '$14.99'
            paintName = 'Lime Green'
            updatePrice(paintName, paintPrice)
            break;
        case 'pn2':  // declared paintPrice/paintName for color block id pn2
            paintPrice = '$11.14'
            paintName = 'Medium Brown'
            updatePrice(paintName, paintPrice)
            break;
        case 'pn3':  // declared paintPrice/paintName for color block id pn3
            paintPrice = '$22.99'
            paintName = 'Royal Blue'
            updatePrice(paintName, paintPrice)
            break;
        case 'pn4':  // declared paintPrice/paintName for color block id pn4
            paintPrice = '$13.42'
            paintName = 'Solid Red'
            updatePrice(paintName, paintPrice)
            break;
        case 'pn5':  // declared paintPrice/paintName for color block id pn5
            paintPrice = '$21.98'
            paintName = 'Solid White'
            updatePrice(paintName, paintPrice)
            break;
        case 'pn6':  // declared paintPrice/paintName for color block id pn6
            paintPrice = '$4.99'
            paintName = 'Solid Black'
            updatePrice(paintName, paintPrice)
            break;
        case 'pn7':  // declared paintPrice/paintName for color block id pn7
            paintPrice = '$8.22'
            paintName = 'Solid Cyan'
            updatePrice(paintName, paintPrice)
            break;
        case 'pn8':  // declared paintPrice/paintName for color block id pn8
            paintPrice = '$11.99'
            paintName = 'Solid Purple'
            updatePrice(paintName, paintPrice)
            break;
        case 'pn9':  // declared paintPrice/paintName for color block id pn9
            paintPrice = '$14.99'
            paintName = 'Solid Yellow'
            updatePrice(paintName, paintPrice)
            break;
        default:
    }
    // Function to be executed for corresponding color block resolved in above switch statement
    function updatePrice(paintName, paintPrice) { 
        let colorPrice = document.getElementById('color-price'); // Variable declared targeting h2 tag with color-price id
        colorPrice.textContent = paintPrice; // paintName value added to tag (replaces empty string in line 26)
        
        let colorName = document.getElementById('color-name'); // Variable declared targeting h2 tag with color-name id
        colorName.textContent = paintName; // paintName value added to tag (replaces empty string in line 29)
    }
}
