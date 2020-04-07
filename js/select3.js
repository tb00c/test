$(function() {
    var hgS1 = new selectSwiper({
        el: '.select_box1',
        mustSelect: true,
        data: ['全部', '系统消息', '工作消息'],
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
        
});