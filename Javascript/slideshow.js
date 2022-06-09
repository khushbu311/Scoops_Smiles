$(function() {
    var pic = $('img:first')
    var images = [
        "https://img.perfumerflavorist.com/files/base/allured/all/image/2021/07/pf.ice_cream_flavors.png?auto=format&fill=solid&fit=fill&h=720&w=1280",
        "https://images.indianexpress.com/2021/07/ice-cream-pixabay-1200.jpg",
        "https://assets3.thrillist.com/v1/image/2836428/1200x600/scale;",
        "https://image.shutterstock.com/image-photo/gourmet-summer-dessert-artisanal-craft-260nw-1647372625.jpg",
        "https://media.gettyimages.com/photos/chocolate-ice-cream-in-a-glass-cup-picture-id936205852?s=612x612",

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