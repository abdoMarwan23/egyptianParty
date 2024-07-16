let links = document.querySelectorAll('#leftMenu a');
let btn = document.getElementById("btn");



$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
    $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
    $("#home-content").animate({marginLeft :'0px'},50)
})


// scroll


links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// singer

$('#sliderDown .toggle').click(function() {
    var $nextInner = $(this).next('.inner');
    if ($nextInner.is(':visible')) {
        $nextInner.slideUp(500);
    } else {
        $('#sliderDown .inner:visible').slideUp(500);
        $nextInner.slideDown(500);
    }
}); 



// counter


window.onload = function() {
    countDownToTime("27 november 2020 9:00:00");
}

function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);
    let now = new Date();
    now = (now.getTime() / 1000);
    timeDifference = (futureDate - now);


    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))
    

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)


    setInterval(
        function () {
            countDownToTime(countTo);
        }, 1000);
}







// contact


var maxLength = 100;


$('textarea').keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;

    
    if (AmountLeft < 0) {
        $("#chars").text("your available character finished");
        btn.setAttribute("disabled", true)
    }
    else if (AmountLeft == 0){
        $("#chars").text("your available character finished");
        btn.removeAttribute("disabled")
    } else if (length == 0) { 
        btn.setAttribute("disabled", true)
    } else {
        $("#chars").text(AmountLeft);
        btn.removeAttribute("disabled")
    }
});




// validation
document.getElementById("nameInput").addEventListener("focus", () => {
    nameInput = true
})

document.getElementById("emailInput").addEventListener("focus", () => {
    emailInput = true
})


let nameInput = false;
let emailInput = false; 


function inputsValidation() {
    if (nameInput) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInput) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }
    // if (nameValidation() && emailValidation() ) {
    //     btn.removeAttribute("disabled")
    // } 
    // else {
    //     btn.setAttribute("disabled", true)
    // }
}


function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}