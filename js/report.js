$(function(){
    function A(b){
        $.get('http://192.168.31.110:3000/report/new',function(a){
            for(let i=0;i<a.length-b;i++){
                $('.report-xin-1').append(`
                    <div class="report-div1">
                        <img src="${$(a)[i].img}" class="report-img">
                        <span class="report-text">${$(a)[i].text}</span>
                        <div class="report-div2">
                            <div class="report-div2-left">
                                <div class="report-div2-left-1">
                                    <img src="/img/tx.jpg">
                                </div>
                                <span>苏苏</span>
                                <div class="report-div2-left-2">2016-01-25</div>
                            </div>
                            <div class="report-div2-right">
                                <img src="/img/zan.png">3
                                <img src="/img/reply.png">3
                            </div>
                        </div>
                    </div>
                    <div class="report-text-2">关于格林威特空气净化器还有4篇报告，点击查看</div>           
                `)
            }

        })
    }

    A(12);

    function B(b){
        $.get('http://192.168.31.110:3000/report/new',function(a){
            for(let i=0;i<a.length-b;i++){
                $('.report-re-1').append(`
                    <div class="report-div1">
                        <img src="${$(a)[i].img}" class="report-img">
                        <span class="report-text">${$(a)[i].text}</span>
                        <div class="report-div2">
                            <div class="report-div2-left">
                                <div class="report-div2-left-1">
                                    <img src="/img/tx.jpg">
                                </div>
                                <span>苏苏</span>
                                <div class="report-div2-left-2">2016-01-25</div>
                            </div>
                            <div class="report-div2-right">
                                <img src="/img/zan.png">3
                                <img src="/img/reply.png">3
                            </div>
                        </div>
                    </div>
                    <div class="report-text-2">关于格林威特空气净化器还有4篇报告，点击查看</div>           
                `)
            }

        })
    }


    B(14)
    $('.report-jiazai').click(function(){
        // A(14);
        // console.log($('.index-guid-red').index());
        if($('.index-guid-red').index()==0){
            A(14);
        }else{
            B(14);
        }
    })


    $('.index-guid-2>div').click(function(){
        $('.index-guid-2>div').removeClass('index-guid-red');
        $(this).addClass('index-guid-red');
        let index=$(this).index();
        $('.report-xin>div').hide();
        $('.report-xin>div').eq(index).show();
    })



})