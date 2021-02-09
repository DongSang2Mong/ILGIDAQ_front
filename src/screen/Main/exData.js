var exampleData = [
    {
        name: "자전거타자전거타자전거타자전거타",
        dairyID: "231",
        date: "2020.12.29",
        writer: "nonokee",
        imgSrc: "../../../resource/Temp/orange.png",
        hashTag: ["정보", "19", "한강"],
        point: 10000,
        like: 230,
        dislike: 12
    },
    {
        name: "빵터지는 최불암 깔깔 유모아",
        dairyID: "232",
        date: "2020.12.29",
        writer: "콩수내비",
        imgSrc: null,
        hashTag: ["유머", "최불암"],
        point: 1900,
        like: 130,
        dislike: 172
    },
    {
        name: "자전거타자전거타자전거타자전거타",
        dairyID: "233",
        date: "2020.12.29",
        writer: "nonokee",
        imgSrc: "../../../resource/Temp/orange.png",
        hashTag: ["정보", "19", "한강"],
        point: 10000,
        like: 230,
        dislike: 12
    },
    {
        name: "빵터지는 최불암 깔깔 유모아",
        dairyID: "234",
        date: "2020.12.29",
        writer: "콩수내비",
        imgSrc: null,
        hashTag: ["유머", "최불암"],
        point: 1900,
        like: 130,
        dislike: 172
    },
    {
        name: "자전거타자전거타자전거타자전거타",
        dairyID: "235",
        date: "2020.12.29",
        writer: "nonokee",
        imgSrc: "../../../resource/Temp/orange.png",
        hashTag: ["정보", "19", "한강"],
        point: 10000,
        like: 230,
        dislike: 12
    },
    {
        name: "빵터지는 최불암 깔깔 유모아",
        dairyID: "236",
        date: "2020.12.29",
        writer: "콩수내비",
        imgSrc: null,
        hashTag: ["유머", "최불암"],
        point: 1900,
        like: 130,
        dislike: 172
    }
]


function getCommaNumber(number) {
    var retStr = "";
    var numString = number.toString();
    
    for(var i = numString.length - 1; i > -1; i--) {
        if(i % 3 == 2 && i != numString.length - 1) retStr = "," + retStr;
        retStr = numString[i] + retStr;
    }

    return retStr;
}

function getPlusNumber(number) {
    if(number < 100) {
        return number;
    }
    else {
        return getCommaNumber(number - (number % 100)) + "+";
    }
}


for(var i = 0; i < exampleData.length; i++) {
    exampleData[i].point = getCommaNumber(exampleData[i].point);
    exampleData[i].like = getPlusNumber(exampleData[i].like);
    exampleData[i].dislike = getPlusNumber(exampleData[i].dislike);
}

export {exampleData};