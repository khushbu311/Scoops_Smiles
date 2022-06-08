$(function() {
    var pic = $('img:first')
    var images = [
        "/home/neosoft/Desktop/webasic/Scoops_Smiles/b1.jpg",
        "/home/neosoft/Desktop/webasic/Scoops_Smiles/b2.jpg",
        "/home/neosoft/Desktop/webasic/Scoops_Smiles/b3.jpg",
    ]
    var i = 0;
    setInterval(function() {
        i = (i + 1) % images.length
        pic.fadeOut(250, function() {
            $(this).attr("src", images[i])
            $(this).fadeIn(1050)
        })
    }, 2000)

});