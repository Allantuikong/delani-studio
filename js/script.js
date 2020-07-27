$(document).ready(function() {
    $("#design, .design").click(function() {
        $("#design").toggle();
        $(".design").toggle();
        document.querySelector("h4")
    });

    $("#development, .development").click(function() {
        $("#development").toggle();
        $(".development").toggle();
        $("h4");

    });

    $("#management, .management").click(function() {
        $("#management").toggle();
        $(".management").toggle();
        $("h4");
    });

    $(".work4").hover(function() {
        $(".work4caption").toggle();
    });

    $(".work3").hover(function() {
        $(".work3caption").toggle();
    });

    $(".work2").hover(function() {
        $(".work2caption").toggle();
    });

    $(".work1").hover(function() {
        $(".work1caption").toggle();
    });
    $(".work5").hover(function() {
        $(".work5caption").toggle();
    });
    $(".work6").hover(function() {
        $(".work6caption").toggle();
    });
    $(".work7").hover(function() {
        $(".work7caption").toggle();
    });

    $(".work8").hover(function() {
        $(".work8caption").toggle();
    });

    window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
    formbutton("create", {action: "https://formspree.io/xrgyrjer"})
    
    $("form").submit(function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        alert("Thank you for reaching out to us " + name + "!" + " Your message is well recieved :).");
        document.getElementById("contactForm").reset();
    });
});