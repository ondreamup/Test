$(function(){
    $.get('http://192.168.31.110:3000/guid/new',function(a){
        for(let i=0;i<a.length-3;i++){
            $('.guid-box-ul').append(`
                <li class="guid-box-li">
                    <div class="guid-box-dic1"></div>
                    <div class="guid-box-dic2"></div>
                    <div class="guid-box-dic3">
                        <img src="${$(a)[i].img}" class="guid-box-img">
                        <span class="guid-box-span">${$(a)[i].text}</span>
                        <div class="guid-box-div1">
                            <div>
                                <img src="/img/xin.png">3
                                <img src="/img/reply.png">3
                            </div>
                        </div>
                    </div>
                </li>
            `)
            $('.guid-box-ul').append(`
                <li class="guid-box-li">
                    <div class="guid-box-dic1"></div>
                    <div class="guid-box-dic2"></div>
                    <div class="guid-box-dic3">
                        <img src="${$(a)[i+2].img}" class="guid-box-img">
                        <span class="guid-box-span">${$(a)[i+2].text}</span>
                        <div class="guid-box-div1">
                            <div>
                                <img src="/img/xin.png">3
                                <img src="/img/reply.png">3
                            </div>
                        </div>
                    </div>
                </li>
            `)
        }
    })

    $.get('http://192.168.31.110:3000/guid/hot',function(a){
        for(let i=0;i<a.length-3;i++){
            $('.guid-box-ul-2').append(`
                <li class="guid-box-li">
                <div class="guid-box-dic1"></div>
                <div class="guid-box-dic2"></div>
                <div class="guid-box-dic3">
                        <img src="${$(a)[i].img}" class="guid-box-img">
                        <span class="guid-box-span">${$(a)[i].text}</span>
                        <div class="guid-box-div1">
                            <div>
                                <img src="/img/xin.png">3
                                <img src="/img/reply.png">3
                            </div>
                        </div>
                    </div>
                </li>
            `)
            $('.guid-box-ul-2').append(`
                <li class="guid-box-li">
                    <div class="guid-box-dic1"></div>
                    <div class="guid-box-dic2"></div>
                    <div class="guid-box-dic3">
                        <img src="${$(a)[i+2].img}" class="guid-box-img">
                        <span class="guid-box-span">${$(a)[i+2].text}</span>
                        <div class="guid-box-div1">
                            <div>
                                <img src="/img/xin.png">3
                                <img src="/img/reply.png">3
                            </div>
                        </div>
                    </div>
                </li>
            `)
        }
    })

    $('.index-guid-2>div').click(function(){
        $('.index-guid-2>div').removeClass('index-guid-red');
        $(this).addClass("index-guid-red");
        let index=$(this).index();
        $('.guid-box>div').hide();
        $('.guid-box>div').eq(index).show();
    })

    $(".guid-box-1-xin").click(function(){
        $.get('http://192.168.31.110:3000/guid/new',function(a){
        for(let i=0;i<a.length-11;i++){
            $('.guid-box-ul ').append(`
                <li class="guid-box-li">
                    <div class="guid-box-dic1"></div>
                    <div class="guid-box-dic2"></div>
                    <div class="guid-box-dic3">
                        <img src="${$(a)[i].img}" class="guid-box-img">
                        <span class="guid-box-span">${$(a)[i].text}</span>
                        <div class="guid-box-div1">
                            <div>
                                <img src="/img/xin.png">3
                                <img src="/img/reply.png">3
                            </div>
                        </div>
                    </div>
                </li>
            `)
        }
    })
    })



    $(".guid-box-1-xin-2").click(function(){
        $.get('http://192.168.31.110:3000/guid/hot',function(a){
        for(let i=0;i<a.length-7;i++){
            $('.guid-box-ul-2').append(`
                <li class="guid-box-li">
                    <div class="guid-box-dic1"></div>
                    <div class="guid-box-dic2"></div>
                    <div class="guid-box-dic3">
                        <img src="${$(a)[i].img}" class="guid-box-img">
                        <span class="guid-box-span">${$(a)[i].text}</span>
                        <div class="guid-box-div1">
                            <div>
                                <img src="/img/xin.png">3
                                <img src="/img/reply.png">3
                            </div>
                        </div>
                    </div>
                </li>
            `)
        }
    })
    })



})