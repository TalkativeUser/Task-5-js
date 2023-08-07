
// console.log(col1);
// console.log(col2);
// console.log(col3);
// console.log(cur_temp_c);
// console.log(cur_weth_img);
// console.log(cur_info_weth);




// start selectors html {

    // current day selectors
    var col1=  document.querySelector('.col1') ;
    var cur_temp_c= document.querySelector('.temp-c');
    var cur_weth_img=document.querySelector('.cur-weth-img');
    var cur_info_weth=document.querySelector('.cur-info-weth');
    var searshNameCity=document.querySelector('.searshNameCity');
    var yourLocation=document.querySelector('.yourLocation');

    // next day selectors
    var col2=document.querySelector('.col2') ;
    var next_weth_img=document.querySelector('.next-weth-img') ;
    var nextTemp_c_max=document.querySelector('.nextTemp-c-max') ;
    var nextTemp_c_min=document.querySelector('.nextTemp-c-min') ;
    var next_info_weth=document.querySelector('.next-info-weth') ;
    
    
    // third day selectors
    var col3=  document.querySelector('.col3') ;
    var third_weth_img=document.querySelector('.third-weth-img') ;
    var thirdTemp_c_max=document.querySelector('.thirdTemp-c-max') ;
    var thirdTemp_c_min=document.querySelector('.thirdTemp-c-min') ;
    var third_info_weth=document.querySelector('.third-info-weth') ;


// end selectors html }

async function getInfoWeather () {
    var setNameCityToUrl=searshNameCity.value ;
var weather=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=340eae36d1e140969bc195836230508&q=${setNameCityToUrl}&days=3`)
var conver_info_weather=await weather.json();
  

// current day

var str=conver_info_weather.current.last_updated;
var currentDate = str.substr(0, str.length - 6); 

col1.innerHTML=currentDate;
cur_temp_c.innerHTML=conver_info_weather.current.temp_c;
yourLocation.innerHTML=conver_info_weather.location.country;
cur_weth_img.src =`https:${conver_info_weather.current.condition.icon}` ;
cur_info_weth.innerHTML=conver_info_weather.current.condition.text;

// next day
col2.innerHTML=conver_info_weather.forecast.forecastday['1'].date;
next_weth_img.src=`https:${conver_info_weather.forecast.forecastday['1'].day.condition.icon}`;
nextTemp_c_max.innerHTML=conver_info_weather.forecast.forecastday['1'].day.maxtemp_c;
nextTemp_c_min.innerHTML=conver_info_weather.forecast.forecastday['1'].day.mintemp_c;
next_info_weth.innerHTML=conver_info_weather.forecast.forecastday['1'].day.condition.text;


// third day
col3.innerHTML=conver_info_weather.forecast.forecastday['2'].date;
third_weth_img.src=`https:${conver_info_weather.forecast.forecastday['2'].day.condition.icon}`;
thirdTemp_c_max.innerHTML=conver_info_weather.forecast.forecastday['2'].day.maxtemp_c;
thirdTemp_c_min.innerHTML=conver_info_weather.forecast.forecastday['2'].day.mintemp_c;
third_info_weth.innerHTML=conver_info_weather.forecast.forecastday['2'].day.condition.text;



}




document.querySelector('.searshNameCity').addEventListener('keyup',function() {
    getInfoWeather ();

})







