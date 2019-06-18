$(function() {
    $('.container').fullpage({
        scrollingSpeed: 1000,
        navigation: true,
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        afterLoad: function(link, index) {
            $('.section').eq(index - 1).addClass('now');

        },
        afterRender: function() {

            $('.more').on('click', function() {
                $.fn.fullpage.moveSectionDown();
            });
        },
        onLeave: function(index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {
                $('.section').eq(index - 1).addClass('leaved');
            }

            if (index == 3 && nextIndex == 4) {
                $('.section').eq(index - 1).addClass('leaved');
            }

            if (index == 5 && nextIndex == 6) {
                $('.section').eq(index - 1).addClass('leaved');
                //同步盒子和沙发一起动画
                $('.screen06 .box').addClass('show');
            }
            if (index == 6 && nextIndex == 7) {
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
            }
            
        }
    });
    //清空所加的动画样式类,style属性
    $('.again').on('click', function() {
        $('.now,.show,.leaved').removeClass('now').removeClass('show').removeClass('leaved');
        $('.content [style]').removeAttr('style');
        //跳回第一页
        $.fn.fullpage.moveTo(1);
    });
    //图片跟着鼠标移动的效果  
    $(document).mousemove(function(e) {
        //获取图片所在的位置，使用css设置相对位置（ "position": "absolute"）
        //鼠标相对于文档的左边缘的位置（"left": e.pageX ）
        //鼠标相对于文档的左边缘的位置（ "top": e.pageY ）
        $(".screen08 .hand").css({

            "left": e.pageX - 210,
            "top": e.pageY - 50
        });
    });

});
