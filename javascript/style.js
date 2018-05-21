document.getElementById('motherboard').style.display = 'none';

function displayCategory(category) {
    /*category will store the string depending what category
    has been selected*/

    console.log(category);
    var elemento = document.getElementById(category);
    /**elemento will store the full div depending on which
     * div has been selected.
     */

    if (category === 'home') {

        /*Divs which won't display*/
        document.getElementById('motherboard').style.display = 'none';

        /*Div which will be displayed*/
        elemento.style.display = 'block';

        /*Hidding divs and let the main div displayed*/
        /*document.getElementById('microAtx').style.display = 'none';
        document.getElementById('miniAtx').style.display = 'none';*/
    }

    if (category === 'motherboard') {

        /*Divs which won't display*/
        document.getElementById('home').style.display = 'none';

        /*Div which will be displayed*/
        elemento.style.display = 'block';
        document.getElementById('atx').style.display = 'grid';

        /*Hidding divs and let the main div displayed*/
        document.getElementById('microAtx').style.display = 'none';
        document.getElementById('miniAtx').style.display = 'none';
    }
}

function displaySubcategory(subCategory) {


    console.log(subCategory);

    var element = document.getElementById(subCategory);

    if (element.style.display === "none") {
        document.getElementById('atx').style.display = 'none';
        document.getElementById('microAtx').style.display = 'none';
        document.getElementById('miniAtx').style.display = 'none';
        element.style.display = "grid";
    }
}