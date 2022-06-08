$(function() {
    var pic = $('img:first')
    var images = [
        "https://img.perfumerflavorist.com/files/base/allured/all/image/2021/07/pf.ice_cream_flavors.png?auto=format&fill=solid&fit=fill&h=720&w=1280",
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