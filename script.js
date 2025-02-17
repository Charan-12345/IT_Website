// SearchForm Section code
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
}

$(document).ready(function(){

    $(window).scroll(function(){
        //Navbar-bottom scrolling
        if(this.scrollY > 5){
            $('.navbar-bottom').addClass("sticky");
        }else{
            $('.navbar-bottom').removeClass("sticky");
        }

        //Scrolling Button Btn
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

        //slide up script
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop:0});
        });
        
    //owl owlCarousel
    $('.owl-carousel').owlCarousel({
        margin: 5,
        mavigation: true,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// chatbot code

$(document).ready(function() {
    $(".chat-toggle, .chat-header").click(function() {
        $(".chat-container").toggle();
    });

    $("#sendBtn").click(function() {
        let userText = $("#chatText").val();
        if (userText.trim() === "") return;
        
        $(".chat-body").append(`<div class='chat-message user-message'>${userText}</div>`);
        $("#chatText").val("");
        
        setTimeout(function() {
            let botReply = getBotResponse(userText);
            $(".chat-body").append(`<div class='chat-message bot-message'>${botReply}</div>`);
        }, 1000);
    });

    function getBotResponse(input) {
        let responses = {
            "hello": "Hi there! How can I assist you?",
            "hi": "Hello! What do you need help with?",
            "how are you": "I'm just a bot, but I'm doing great! How about you?",
            "bye": "Goodbye! Have a great day!",
        };
        
        return responses[input.toLowerCase()] || "I'm not sure how to respond to that. Can you try asking differently?";
    }
});