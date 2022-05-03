var matchtype, accessId;
fetch("https://static.api.nexon.co.kr/fifaonline4/latest/matchtype.json")
.then(res => res.json())
.then(json => {
    matchtype = json;
});

$('.submit').click(function(){
    var nickname = $('.input').val();
    fetch("https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname="+nickname,{
        method:'GET',
        headers:{"Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjY4OTE3Mjk2IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTY0OTA4MDM2NCwiZXhwIjoxNjY0NjMyMzY0LCJpYXQiOjE2NDkwODAzNjR9.lbT5SM_ZUaRDuX-YmGRWByFQpenWBYWTWUFbRncjifQ",
        },
    })
    .then(res=>res.json())
    .then(data =>{
        accessId = data.accessId;
        console.log(accessId);
    })
    .catch((error)=> {
        alert(error);
    })
});

console.log($('.matchtype option:selected').val());
