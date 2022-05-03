var matchtype, division;

fetch("https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json")
.then(res => res.json())
.then(json => {
    matchtype = json;
});

fetch("https://static.api.nexon.co.kr/fifaonline4/latest/division.json")
.then(res => res.json())
.then(json => {
    division = json;
});

function get_desc(matchType){
    for(i = 0; i < matchtype.length; i++){
        if(matchType == matchtype[i].matchtype)
            //console.log(matchtype[i].desc);
            return matchtype[i].desc;
        }
}
function get_divisionName(diVison){
    console.log(diVison);
    console.log(division);
    for(i = 0; i < division.length; i++){
        if(diVison === division[i].divisionId)
            return division[i].divisionName;
    }
}

$('.submit').click(function(){
    //var nickname;
    var nickname = $('.input').val();
    //nickname = "5호선파브르"
    fetch("https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname="+nickname,{
        method:'GET',
        headers:{"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjY4OTE3Mjk2IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0OTA4MDM2NCwiZXhwIjoxNjY0NjMyMzY0LCJpYXQiOjE2NDkwODAzNjR9.lbT5SM_ZUaRDuX-YmGRWByFQpenWBYWTWUFbRncjifQ",
        },
    })
    .then(res=>res.json())
    .then(data =>{
        $('.nickname').text("nickname : " + data.nickname);
        $('.level').text("level  : " + data.level);
        accessId = data.accessId;
        console.log(accessId);
    })
    .catch((error)=> {
        alert(error);
    })
});
$('.rating').click(function(){
    fetch("https://api.nexon.co.kr/fifaonline4/v1.0/users/"+accessId+"/maxdivision", {
        method:'GET',
        headers:{
            "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjY4OTE3Mjk2IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0OTA4MDM2NCwiZXhwIjoxNjY0NjMyMzY0LCJpYXQiOjE2NDkwODAzNjR9.lbT5SM_ZUaRDuX-YmGRWByFQpenWBYWTWUFbRncjifQ",
        },
    })
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        $('.matchtype0').text("경기 종류 : "+ get_desc(data[0].matchType));
        $('.division0').text("최고 티어 : "+ get_divisionName(data[0].division));
        $('.date0').text("달성 날짜 : "+ data[0].achievementDate);
        $('.matchtype1').text("경기 종류 : "+ get_desc(data[1].matchType));
        $('.division1').text("최고 티어 : "+ get_divisionName(data[1].division));
        $('.date1').text("달성 날짜 : "+ data[1].achievementDate);
    })
    .catch((error)=>{
        alert(error);
    })
})
