$(function(){
    
    // $.post('http://192.168.31.110:3000/users/login',function(a){
        

    // })

    $('.record-div5').click(function(){
        if($('.record-div3-span1').val()=='' || $('.record-div3-span2').val()==''){
            $('.record-div4').text('请输入手机号、密码');
        }else if($('.record-div3-span1').val()!='17837402121' || $('.record-div3-span2').val()!='123456'){
            $('.record-div4').text('手机号码或密码不正确');
        }else{
            window.location.href="index.html";
        }
    })













})