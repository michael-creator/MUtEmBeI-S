$(document).ready(function () {
    // ("#cart-img").click(function(){
    //     ("#cart-container").show();
    // });
    $("#small").submit(function () {
        event.preventDefault();

        var quantity = $(".qty").val()
        alert(quantity)
    })

    $("#card-img2").click(function () {
        event.preventDefault();
        alert("Thank you for visiting our pizza place please come again!!");

    });
    // $("#card-img").submit(function(){
    // <input type="button" onclick="alert('Hello World!')" value="Click Me!"></input>

});