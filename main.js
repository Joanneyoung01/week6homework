//check document is ready
$(document).ready(function (){
console.log('document ready')

    //Use $.on(submit) or ```$.on(click)``` to figure out when the user clicks the "submit" button or submits the form
    $('#submit-btn').click(function(event){
        event.preventDefault()
    
        //store new york city variables
        var newYork = "New York";
        var newYork2 = "NYC";
        var newYork3 = "New York City";

        var sanFran = "San Francisco";
        var sanFran2 = "SF";
        var sanFran3 = "Bay Area";
    
        var losAngeles = "Los Angeles";
        var losAngeles2 = "LA";
        var losAngeles3 = "LAX";

        var austin = "Austin";
        var austin2 = "ATX";    

        var sydney = "Sydney";
        var sydney2 = "SYD";

        //Call ```$.val()``` on inputs to get the string value of your user's input
        // lowercase the user's input and check against the lowercased
        // var city = $("input[name='city-type']").val();
        var city = $("#city-type").val().toLowerCase().trim();
        console.log(city)

        //Create ```if / else if / else``` conditionals to control the flow of your application
        if (city === 'new york' || city === 'nyc' || city === 'new york city') {
            $('#bg').removeAttr('class');
            $('#bg').addClass('nyc');
            console.log('New York')

        }  else if (city === 'san francisco' || city === 'sf' || city === 'bay area')  {
            $('#bg').removeAttr('class');
            $('#bg').addClass('sf');
            console.log('San Fran')

        } else if (city === 'los angeles' || city === 'la' || city === 'lax') {
            $('#bg').removeAttr('class');
            $('#bg').addClass('la');
            console.log('LA')
        
        } else if (city === 'austin' || city === 'atx' ) {
            $('#bg').removeAttr('class');
            $('#bg').addClass('austin');
            console.log('Austin')

        } else if (city === 'sydney' || city === 'syd') {
            $('#bg').removeAttr('class');
            $('#bg').addClass('sydney');
            console.log('Sydney')

        } else {
            console.log ('do nothing');
        }
    });


});