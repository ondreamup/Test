$(function(){
    $('.regist-handset>input').blur(function(){
            let ar=$('.regist-handset>input').val();
            let sar=/^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
            $('.regist-handset>div').text('');
            $('.regist-handset>input').removeClass('regist-red');
            if(ar==""){
                $('.regist-handset>div').text('手机号码不能为空');
                $('.regist-handset>input').addClass('regist-red');
            }
            else if(!sar.test(ar)==true){
                $('.regist-handset>div').text('请输入正确的手机号码');
                $('.regist-handset>input').addClass('regist-red');
            }
        })
        $('.regist-picture>input').blur(function(){
            $('.regist-picture>div').text('');
            $('.regist-picture>input').removeClass('regist-red');
            if($('.regist-picture>input').val()==""){
                $('.regist-picture>div').text('验证码不能为空');
                $('.regist-picture>input').addClass('regist-red');
            }
            else if($('.regist-picture>input').val()!="r2B7"){
                $('.regist-picture>div').text('请输入正确的验证码');
                $('.regist-picture>input').addClass('regist-red');
            }
        })
    
        $('.regist-captcha>input').blur(function(){
            $('.regist-captcha>.regist-error').text('');
            $('.regist-captcha>input').removeClass('regist-red');
            if($('.regist-captcha>input').val()==""){
                $('.regist-captcha>.regist-error').text('验证码不能为空');
                $('.regist-captcha>input').addClass('regist-red');
            }
        })
        $('.regist-name>input').blur(function(){
            let aar=$('.regist-name>input').val();
            let saar=/[A-Za-z0-9-\-\u4e00-\u9fa5]{4,8}$/;
            $('.regist-name>div').text('');
            $('.regist-name>input').removeClass('regist-red');
            if($('.regist-name>input').val()==""){
                $('.regist-name>div').text('用户名不能为空');
                $('.regist-name>input').addClass('regist-red');
            }
            else if(saar.test(aar)==false){
                $('.regist-name>div').text('请输入正确格式的用户名:字母数字 下划线汉字4-8位');
                $('.regist-name>input').addClass('regist-red');
            }
        })
        $('.regist-password>input').blur(function(){
            let aaar=$('.regist-password>input').val();
            let saaar=/^[a-zA-Z0-9_-]{6,12}$/;
            $('.regist-password>div').text('');
            $('.regist-password>input').removeClass('regist-red');
            if($('.regist-password>input').val()==""){
                $('.regist-password>div').text('密码不能为空');
                $('.regist-password>input').addClass('regist-red');
            }else if(saaar.test(aaar)==false){
                $('.regist-password>div').text('密码格式不正确：（字母数字下划线6-12）');
                $('.regist-password>input').addClass('regist-red');
            }
        })
        $('.regist-psw>input').blur(function(){
            $('.regist-psw>div').text('');
            $('.regist-psw>input').removeClass('regist-red');
            if($('.regist-psw>input').val()==""){
                $('.regist-psw>div').text('确认密码不能为空');
                $('.regist-psw>input').addClass('regist-red');
            }else if($('.regist-psw>input').val()!=$('.regist-password>input').val()){
                $('.regist-psw>div').text('两次密码不同');
                $('.regist-psw>input').addClass('regist-red');
            }
        })
    


    $('.regist-set').click(function(){
        let i=60;
        setInterval(() => {
            i--;
            $('.regist-set').text(i);
            if(i==0){
                $('.regist-set').text("重新获取验证码");
                i=60;
            }
        }, 1000);

    })

    $('.regist-zhuce').click(function(){
        let ar=$('.regist-handset>input').val();
        let sar=/^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        let aar=$('.regist-name>input').val();
        let saar=/[A-Za-z0-9-\-\u4e00-\u9fa5]{4,8}$/;
        let aaar=$('.regist-password>input').val();
        let saaar=/^[a-zA-Z0-9_-]{6,12}$/;
        if(ar=='' || sar.test(ar)==false || aar=='' || saar.test(aar)==false || aaar=='' || saaar.test(aaar)==false){
            console.log('格式有误');
        }else {
            $.post('http://192.168.31.110:3000/users/register',{
                phone:ar,
                name:aar,
                password:aaar           
            });
            // console.log($(a),ar,aar,aaar);
            window.location.href="record.html";
            // $.ajax({
            //     url:'http://192.168.31.110:3000/users/register',
            //     type:'post',  
            //     global:false,  //异步
            //     date:{
            //         phone:ar,
            //         name:aar,
            //         password:aaar 
            //     },
            //     success:function(){
            //         console.log('aa');
            //     }

            // })
            // $.post('http://192.168.31.110:3000/users/register',function(a){
            //     console.log($(a));
            // })
        }
        
        
    })
    
    







})