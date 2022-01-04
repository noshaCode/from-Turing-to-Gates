const img = $(".images img")
img.click(function(){
    const newImg = $(this).data("alt");
    const oldImg = $(this).attr('src');
    $(this).attr('src', newImg)
    $(this).data("alt", oldImg);

})