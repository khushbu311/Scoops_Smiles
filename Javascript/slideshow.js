$(function() {
    var pic = $('img:first')
    var images = [
        "/home/neosoft/Desktop/webasic/Scoops&Smiles/Image/b1.jpg",
        "/home/neosoft/Desktop/webasic/Scoops&Smiles/Image/b2.jpg",
        "/home/neosoft/Desktop/webasic/Scoops&Smiles/Image/b3.jpg",
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