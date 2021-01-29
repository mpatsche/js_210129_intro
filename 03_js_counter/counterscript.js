(function(){
    const buttons = document.querySelectorAll('.counterBtn')
    let count = 0

    // Add event listener and functionality to each button
    buttons.forEach(function(button){
        button.addEventListener('click', counterFunction)

        function counterFunction(){
            if (button.classList.contains('prevBtn')){
                count--  // the same as: count = count - 1
            } else if (button.classList.contains('nextBtn')){
                count++  // the same as: count = count + 1
            }
            // Select the counter text
            const counter = document.querySelector('#counter')
            counter.textContent = count

            // changes color of count
            if (count < 0){
                counter.style.color = 'red'
            } else if (count === 0){
                counter.style.color = 'black'
            } else {
                counter.style.color = 'green'
            } 


        }   // ends counterFunction
    })  // ends forEach
})() // ends immediately invoked function
