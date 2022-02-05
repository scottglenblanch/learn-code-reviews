(function() {

    function getRandomColorValue() {
        return Math.floor(Math.random() * 256)
    }

    function getColorValues() {
        
        const redValue = getRandomColorValue();
        const greenValue = getRandomColorValue();
        const blueValue = getRandomColorValue();

        return { redValue, greenValue, blueValue }
    }

    function changeBackgroundColorStyle() {
        const { redValue, greenValue, blueValue } = getColorValues();
        document.body.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }



    function addListenerToChangeBackgroundColorButton() {
        
        // get the button which we will add the listener to
        const buttonElement = document.querySelector('#clickbutton');

        buttonElement.addEventListener('click', changeBackgroundColorStyle)
    }

    function onload() {
        addListenerToChangeBackgroundColorButton()
    }


    document.onload = onload;document.addEventListener("DOMContentLoaded", function(){
        onload()
    });
})()