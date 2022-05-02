var accessId;
var matchtype, division, date;
function get_matchType(matchtype){
    $.ajax({
        method:"GET",
        url:"https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json",
        success:function(response){
            for(i = 0; i < response.length; i++){
                if(response[i].matchtype == matchtype){
                    console.log(response[i].desc);
                }
            }
        }
    })
}
function get_division(division){
    $.ajax({
        method:"GET",
        url:"https://static.api.nexon.co.kr/fifaonline4/latest/division.json",
        success:function(response){
            for(i = 0; i < response.length; i++){
                if(response[i].divisionId == division){
                    console.log(response[i].divisionName);
                }
            }
        }
    })
}
$('.submit').click(function(){
    var nickname;
    //nickname = $('.input').val();
    nickname = "5호선파브르"
    $.ajax({
        method:"GET",
        url:"https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname="+nickname,
        beforeSend:function(xhr){
            xhr.setRequestHeader("Authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjY4OTE3Mjk2IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0OTA4MDM2NCwiZXhwIjoxNjY0NjMyMzY0LCJpYXQiOjE2NDkwODAzNjR9.lbT5SM_ZUaRDuX-YmGRWByFQpenWBYWTWUFbRncjifQ");
        },
        success: function(response){
            $('.nickname').text("nickname : " + response.nickname);
            $('.level').text("level  : " + response.level);
            accessId = response.accessId;
            console.log(accessId);
        },
        error: function(reponse){
            alert(reponse.responseJSON.message);
        }
    });
});
$('.rating').click(function(){
    $.ajax({
        method:"GET",
        url:"https://api.nexon.co.kr/fifaonline4/v1.0/users/"+accessId+"/maxdivision",
        beforeSend:function(xhr){
            xhr.setRequestHeader("Authorization","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjY4OTE3Mjk2IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0OTA4MDM2NCwiZXhwIjoxNjY0NjMyMzY0LCJpYXQiOjE2NDkwODAzNjR9.lbT5SM_ZUaRDuX-YmGRWByFQpenWBYWTWUFbRncjifQ");
        },
        success: function(response){
            for(i = 0; i < response.length; i++){
                //console.log(response[i]);
                get_matchType(response[i].matchType);
                get_division(response[i].division);
                console.log(response[i].achievementDate);
            }
        },
        error: function(reponse){
            alert(reponse.responseJSON.message);
        }
    });
});


