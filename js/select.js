$(function() {
    var hgS1 = new selectSwiper({
        el: '.select_box1',
        mustSelect: true,
        data: ['电气一种工作票', '电气二种工作票', '热力机械一种工作票', '热力机械二种工作票',
         '热控一种工作票', '热控二种工作票', '一级动火工作票', '二级动火工作票',
          '有限空间作业工作票', '高空作业工作票'],
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
        data: ['生产技术部', '监理部门', '发电运行部', '安监保卫部', '环保办', '设备维修部'],
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
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn2').on('click',
    function() {
        hgS2.openSelectSwiper();
    });
    var hgS3 = new selectSwiper({
        el: '.select_box3',
        mustSelect: true,
        data: ['待受理', '待审核', '待上报'],
        init: function(index) {
            if (index !== -1) {
                $('.btn3').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn3').html(this.data[index]);
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn3').on('click',
    function() {
        hgS3.openSelectSwiper();
    }); 
    var hgS4 = new selectSwiper({
        el: '.select_box4',
        mustSelect: true,
        data: ['工单', '巡检异常工单', '缺陷填报工单'],
        init: function(index) {
            if (index !== -1) {
                $('.btn4').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn4').html(this.data[index]);
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn4').on('click',
    function() {
        hgS4.openSelectSwiper();
    });  
    var hgS5 = new selectSwiper({
        el: '.select_box5',
        mustSelect: true,
        data: ['一级', '二级', '三级'],
        init: function(index) {
            if (index !== -1) {
                $('.btn5').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn5').html(this.data[index]);
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn5').on('click',
    function() {
        hgS5.openSelectSwiper();
    });   
    var hgS6 = new selectSwiper({
        el: '.select_box6',
        mustSelect: true,
        data: ['已转', '转工单被拒绝', '未转工单'],
        init: function(index) {
            if (index !== -1) {
                $('.btn6').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn6').html(this.data[index]);
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn6').on('click',
    function() {
        hgS6.openSelectSwiper();
    });    
    var hgS7 = new selectSwiper({
        el: '.select_box7',
        mustSelect: true,
        data: ['待确认', '已确认'],
        init: function(index) {
            if (index !== -1) {
                $('.btn7').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn7').html(this.data[index]);
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn7').on('click',
    function() {
        hgS7.openSelectSwiper();
    });   
    var hgS8 = new selectSwiper({
        el: '.select_box8',
        mustSelect: true,
        data: ['正常','轻微','报警', '危险'],
        init: function(index) {
            if (index !== -1) {
                $('.btn8').html(this.data[index]);
            }
        },
        okFunUndefind: function() {
            alert('必须选择一项');
            return false;
        },
        okFun: function(index) {
            console.log(index);
            $('.btn8').html(this.data[index]);
        },
        closeFun: function() {
            console.log('取消');
        },
    });
    $('.btn8').on('click',
    function() {
        hgS8.openSelectSwiper();
    });   
});