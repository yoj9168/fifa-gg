$('.submit').click(function(){
    alert("hi");
    var nickname;
    var accessId;
    nickname = $('.input').val();
    $.ajax({
        method:"GET",
        url:"https://api.nexon.co.kr/fifaonline4/v1.0/users?",
        beforeSend:function(xhr){
            xhr.setRequestHeader("Authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjY4OTE3Mjk2IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0OTA4MDM2NCwiZXhwIjoxNjY0NjMyMzY0LCJpYXQiOjE2NDkwODAzNjR9.lbT5SM_ZUaRDuX-YmGRWByFQpenWBYWTWUFbRncjifQ");
        },
        data:{'nickname' : nickname},
        success: function(reponse){
            console.log(reponse);
            $('.nickname').text("nickname : " + reponse.nickname);
            $('.level').text("level  : " + reponse.level);
            accessId = reponse.accessId;
            console.log(accessId);
            },
        error: function(reponse){
            alert(reponse.responseJSON.message);
            }
        });
    });
