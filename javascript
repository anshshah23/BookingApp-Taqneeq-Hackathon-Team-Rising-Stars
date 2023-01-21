const getlocation = () => {
fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
        const des = document.querySelector("p");

        des.innerHTML = `Latitude: ${data.latitude} Longitude: ${data.longitude}`;
});
};
const getlocation = () => {
    //Get the location from the user
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("The location is denied by the user")
        }
};







const showPosition = (position) =>
{
    let lat= position.coords.latitude;
    let long= position.coords.longitude;

    const des = document.querySelector("p");
    des.innerHTML = `Latitude: ${lat} <br>Longitude: ${long}`;
    console.log(lat, long)
};

const showError = (error) =>
{
    switch (error.code){
        
        case error.PERMISSION_DENIED:
            alert("The request to get user location has been denied");
            break;
        
        case error.PERMISSION_DENIED:
            alert("The request to get user location has been denied");
            break;
        
        case error.POSITION_UNAVAILABLE:
            alert("The user's location is not available");
            break;

        case error.TIMEOUT:
            alert("The request to get user location has timed out");
            break;        
                
        case error.UNKNOWN_ERROR:
            alert("There was an unknown error");
            break;
           
        default:
            alert("There was an unknown error");
        }
};


