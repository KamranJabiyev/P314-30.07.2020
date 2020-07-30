$(document).ready(function () {
    let count = 0;
    let imageCount = $(".images .item").length;
    $(".images").width(`${100 * imageCount}%`);
    $(".images .item").width(`${100 / imageCount}%`);

    let interval=setInterval(RightClick,3000);

    $(document).on("mouseover",".nav",function(){
        clearInterval(interval);
    })

    $(document).on("mouseleave",".nav",function(){
        interval=setInterval(RightClick,3000);
    })

    $(document).on("click", ".fa-chevron-right", RightClick)

    function RightClick() {
        count++;
        if (count == imageCount) {
            count = 0;
        }
        $(".images").animate({
            "margin-left": `-${100 * count}%`
        })
    }


    $(document).on("click", ".fa-chevron-left", function () {
        count--;
        if (count == -1) {
            count = imageCount - 1;
        }
        $(".images").animate({
            "margin-left": `-${100 * count}%`
        })
    })

})