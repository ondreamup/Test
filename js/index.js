$(function(){

    function A(){
        $.get('http://192.168.31.110:3000/play/new',function(a){
        for(let i=0;i<a.length;i++){
            for(let k=0;k<a.length;k++){
                $('.index-bao-play-1').append(
                    `<li class="index-bao-play-1-li">
                        <img src="${$(a)[i][k].img}" class="index-bao-play-1-img">
                        <span class="index-bao-play-1-span-1">${$(a)[i][k].text}</span>
                        <span class="index-bao-play-1-span-2">搭载自动避障系统</span>
                        <div class="index-bao-play-1-div">
                            <span>${$(a)[i][k].price}</span>
                            <div>
                                <img src="./img/xin.png">3
                                <img src="./img/reply.png">3
                            </div>
                        </div>
                    </li>
                    `
                )
            }
        }

    })
    }
    A();
    $('.index-bao-play-more-1').click(function(){
        $.get('http://192.168.31.110:3000/play/new',function(a){
        for(let i=0;i<a.length;i++){
            for(let k=0;k<a.length;k++){
                $('.index-bao-play-1').append(
                    `<li class="index-bao-play-1-li">
                        <img src="${$(a)[i][k].img}" class="index-bao-play-1-img">
                        <span class="index-bao-play-1-span-1">${$(a)[i][k].text}</span>
                        <span class="index-bao-play-1-span-2">搭载自动避障系统</span>
                        <div class="index-bao-play-1-div">
                            <span>${$(a)[i][k].price}</span>
                            <div>
                                <img src="./img/xin.png">3
                                <img src="./img/reply.png">3
                            </div>
                        </div>
                    </li>
                    `
                )
            }
        }

    })
    })



    // 图片移动
    let setim=null; //计时器1
    let setim2=null;
    let index=0;
    function B() {
            setim=setInterval(() => {
                index++;
                if(index>=3){
                    index=0;
                }
                // 图片移动
                ydg();
                Left();
                Right();
            }, 2000);
        }
        B()

    function ydg() {
        let step=0; //起始步数
        let maxstep=20; //最大步数
        let start=$('.index-re-tu')[0].scrollLeft;  //起始位置
        let end=$('.index-re-tu')[0].offsetWidth*index; //结束位置
        let everystep=(end-start)/maxstep; //每一步走多少距离
        setim2=setInterval(() => {
            step++;
            if(step>=maxstep){
                clearInterval(setim2);
            }
            start+=everystep;
            $('.index-re-tu')[0].scrollLeft=start;
        }, 10);
    }

    function Left(){
        $('.index-re-left').click(function(){
            index-=1;
            if(index<0){
                index=3;
            }
            clearInterval(setim);
            ydg();
            console.log(index);
        })
        $('.index-re-left').mouseleave(function(){
            B();
        })
    }
    function Right(){
        $('.index-re-right').click(function(){
            index+=1;
            if(index>3){
                index=0;
            }
            clearInterval(setim);
            ydg();
            console.log(index);
        })
        $('.index-re-right').mouseleave(function(){
            B();
        })
    }

    // 离开或隐藏当前页面时，在切回当前页面，会造成轮播图的异常
    document.addEventListener('visibilitychange',function () {
        // console.log(this.visibilityState);
        if(this.visibilityState=="hidden"){
            clearInterval(setim);
            clearInterval(setim2);
        }
        if(this.visibilityState=="visible"){
            B();
        }
    })




    
})