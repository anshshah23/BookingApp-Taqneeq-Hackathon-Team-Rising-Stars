<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electric Vehicles-The Future</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <nav class="navbar background">
        <ul class="nav-list">
            <div class="logo"><img src="new logo.jpg" alt="logo"></div>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact us</a></li>
        </ul>

    </nav>

    <section class="background firstsection">
        <div class="box-main">
            <div class="firsthalf">
                <p class="text-big">The Future of Vehicles is Here</p>
                <div class="buttons">

                    <input type="text" name="search" placeholder="Current Location" id="search">

                    <input type="text" name="search" placeholder="Enter Destination" id="search"><br>

                    <label for="mode">Choose your Mode of Transport:</label>
                    <select name="Mode Of Transport" id="mode" required>
                        <option value="Car">Car</option>
                        <option value="Bus">Bus</option>
                        <option value="Bike">Bike</option>
                    </select>
                    <button class="btn">Search</button>

                </div>
            </div>

            <div class="secondhalf">
                <img src="new logo.jpg" alt="Laptop Image">

            </div>
        </div>

    </section>
</body>

</html>



















* {
    margin: 0;
    padding: 0;
}

.logo {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo img {
    width: 46%;
    border: 3px solid white;
    border-radius: 70px;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    /* cursor: pointer; */
}

.nav-list {
    width: 100%;
    /* background-color: black; */
    display: flex;
    align-items: center;
}

.nav-list li {
    padding: 43px 97px;
    list-style: none;
    text-align: center;
    font-size: larger;
}

.nav-list li a {
    text-decoration: none;
    color: rgb(255, 255, 255);
}

.nav-list li a:hover {
    text-decoration: none;
    color: rgb(255, 0, 0);
}



#search {
    padding: 5px;
    font-size: 18px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 9px;
}


.background {
    background: rgba(0, 0, 0, 0.7)url('new background.jpg');
    background-size: cover;
    background-blend-mode: darken;

}

.firstsection {
    height: 100vh;
}

.box-main {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 50%;
    margin: auto;
    height: 36%;
}

.firsthalf {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.secondhalf {
    width: 30%;
    height: 57%;
}

.secondhalf img {
    width: 81%;
    border: 3px solid;
    display: block;
    border-radius: 30px;
    margin: auto;
}

.text-big {
    font-size: 39px;
}

.text-small {
    font-size: 17px;
}

.btn {
    font-size: 17px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 7px;
    margin: 11px 1px;
    padding: 3px 6px;
    background: none;
    color: white;
    cursor: pointer;
}

.btn-sm {
    padding: 5px 9px;
}
