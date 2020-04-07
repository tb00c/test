$(function() {
    var hgS1 = new selectSwiper({
        el: '.select_box1',
        mustSelect: true,
        data: ['正常', '异常'],
        init: function(index) {
            if (index !== -1) {
                $('.btn1').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn1').html(this.data[index]);
            if (index == 1) {
                $('.btn1').addClass('red');
            }
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn1').on('click',
    function() {
        hgS1.openSelectSwiper();
    });
    var hgS2 = new selectSwiper({
        el: '.select_box2',
        mustSelect: true,
        //activeIndex: 0,
        data: ['正常', '异常'],
        init: function(index) {
            if (index !== -1) {
                $('.btn2').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
        },
        okFun: function(index) {
            $('.btn2').html(this.data[index]);
            if (index == 1) {
                $('.btn2').addClass('red');
            }
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn2').on('click',
    function() {
        hgS2.openSelectSwiper();
    });
    
});