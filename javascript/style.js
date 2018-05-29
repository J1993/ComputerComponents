document.getElementById('motherboard').style.display = 'none';
document.getElementById('cpu').style.display = 'none';
document.getElementById('cpu-cooler').style.display = 'none';
document.getElementById('power-supply').style.display = 'none';
document.getElementById('info').style.display = 'none';

function displayCategory(category) {
    /*category will store the string depending what category
    has been selected*/

    console.log('Ha sido seleccionado ' + category);
    var elemento = document.getElementById(category);
    /**elemento will store the full div depending on which
     * div has been selected.
     */

    if (category === 'home') {

        /*Divs which won't display*/
        document.getElementById('motherboard').style.display = 'none';
        document.getElementById('cpu').style.display = 'none';
        document.getElementById('cpu-cooler').style.display = 'none';
        document.getElementById('power-supply').style.display = 'none';
        document.getElementById('info').style.display = 'none';

        /*Div which will be displayed*/
        elemento.style.display = 'block';

        /*Hidding divs and let the main div displayed*/
        /*document.getElementById('microAtx').style.display = 'none';
        document.getElementById('miniAtx').style.display = 'none';*/
    }

    if (category === 'motherboard') {

        /*CATEGORY Divs which won't display*/
        document.getElementById('home').style.display = 'none';
        document.getElementById('cpu').style.display = 'none';
        document.getElementById('cpu-cooler').style.display = 'none';
        document.getElementById('power-supply').style.display = 'none';
        document.getElementById('info').style.display = 'none';

        /*CATEGORY and SUBCATEGORY Div which will be displayed*/
        elemento.style.display = 'block';
        document.getElementById('atx').style.display = 'grid';

        /*SUBCATEGORY Divs which won't display*/
        document.getElementById('microAtx').style.display = 'none';
        document.getElementById('miniAtx').style.display = 'none';
    }

    if (category === 'cpu') {

        /*CATEGORY Divs which won't display*/
        document.getElementById('home').style.display = 'none';
        document.getElementById('motherboard').style.display = 'none';
        document.getElementById('cpu-cooler').style.display = 'none';
        document.getElementById('power-supply').style.display = 'none';
        document.getElementById('info').style.display = 'none';

        /*CATEGORY and SUBCATEGORY Div which will be displayed*/
        elemento.style.display = 'block';
        document.getElementById('i3').style.display = 'grid';

        /*SUBCATEGORY Divs which won't display*/
        document.getElementById('i5').style.display = 'none';
        document.getElementById('i7').style.display = 'none';
    }

    if (category === 'cpu-cooler') {

        /*CATEGORY Divs which won't display*/
        document.getElementById('home').style.display = 'none';
        document.getElementById('motherboard').style.display = 'none';
        document.getElementById('cpu').style.display = 'none';
        document.getElementById('power-supply').style.display = 'none';
        document.getElementById('info').style.display = 'none';

        /*CATEGORY and SUBCATEGORY Div which will be displayed*/
        elemento.style.display = 'block';
        document.getElementById('air').style.display = 'grid';

        /*SUBCATEGORY Divs which won't display*/
        document.getElementById('liquid').style.display = 'none';
    }

    if (category === 'power-supply') {

        /*CATEGORY Divs which won't display*/
        document.getElementById('home').style.display = 'none';
        document.getElementById('motherboard').style.display = 'none';
        document.getElementById('cpu').style.display = 'none';
        document.getElementById('cpu-cooler').style.display = 'none';
        document.getElementById('info').style.display = 'none';

        /*CATEGORY and SUBCATEGORY Div which will be displayed*/
        elemento.style.display = 'block';
        document.getElementById('modular').style.display = 'grid';

        /*SUBCATEGORY Divs which won't display*/
        document.getElementById('non-modular').style.display = 'none';
    }
    
    if (category === 'info') {

        /*CATEGORY Divs which won't display*/
        document.getElementById('home').style.display = 'none';
        document.getElementById('motherboard').style.display = 'none';
        document.getElementById('cpu').style.display = 'none';
        document.getElementById('cpu-cooler').style.display = 'none';
        document.getElementById('power-supply').style.display = 'none';

        /*CATEGORY Div which will be displayed*/
        elemento.style.display = 'block';

    }
}

function displaySubcategory(subCategory) {

    console.log(subCategory);
    var element = document.getElementById(subCategory);

    /*MOTHERBOARD*/
    if (document.getElementById('motherboard').style.display === 'block') {
        console.log('Has seleccionado mother');

        if (element.style.display === "none") {
            document.getElementById('atx').style.display = 'none';
            document.getElementById('microAtx').style.display = 'none';
            document.getElementById('miniAtx').style.display = 'none';
            element.style.display = "grid";
        }
    }

    /*CPU*/
    if (document.getElementById('cpu').style.display === 'block') {
        console.log('Has seleccionado cpu');

        if (element.style.display === "none") {
            document.getElementById('i3').style.display = 'none';
            document.getElementById('i5').style.display = 'none';
            document.getElementById('i7').style.display = 'none';
            element.style.display = "grid";
        }
    }

    /*CPU-COOLER*/
    if (document.getElementById('cpu-cooler').style.display === 'block') {
        console.log('Has seleccionado cpu-cooler');

        if (element.style.display === "none") {
            document.getElementById('air').style.display = 'none';
            document.getElementById('liquid').style.display = 'none';
            element.style.display = "grid";
        }
    }   
    
    /*POWER SUPPLY*/
    if (document.getElementById('power-supply').style.display === 'block') {

        if (element.style.display === "none") {
            document.getElementById('modular').style.display = 'none';
            document.getElementById('non-modular').style.display = 'none';
            element.style.display = "grid";
        }
    }   
}

function getTheColour() {
    var color = document.getElementById('colourPallete').value;
    document.documentElement.style.setProperty('--mainColor', color);
    console.log(color);
}