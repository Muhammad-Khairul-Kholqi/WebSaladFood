<template>
    <div class="logo-navbar">
        <div class="logo">
            <div class="logo-1">
                <a href=""><img src="@/assets/img/logowhite.png" alt=""></a>
            </div>
            <div class="logo-2">
                <img src="@/assets/img/logoblack.png" alt="">
            </div>
        </div>
        <div class="navbar">
            <nav>
                <a href=""><p>Home</p></a>
                <a href="/salad-menus"><p>Menus</p></a>
                <a href=""><p>About Us</p></a>
                <a href=""><p>Gallery</p></a>
                <a href=""><p>Contact</p></a>
                <div class="hamburger">
                    <i class="bi bi-list"></i>
                </div>
            </nav>
        </div>
        <div class="dark-light">
            <div class="dark">
                <i class="bi bi-moon-stars-fill"></i>
            </div>
            <div class="light">
                <i class="bi bi-sun-fill"></i>
            </div>
        </div>
    </div>
</template>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .logo-navbar {
        background-color: #1D1D1D;
        display: flex;
        justify-content: space-between;
        padding: 10px 5%;
        position: fixed;
        z-index: 999;
        top: 0;
        right: 0;
        left: 0;
    }

    .logo-1 img {
        width: 50px;
        cursor: pointer;
    }
    
    nav {
        display: flex;
        gap: 20px;
        margin-bottom: -5px;
    }
    
    nav a {
        color: #fff;
        text-decoration: none;
        transition: all 0.3s ease-in;
    }

    nav a:hover {
        color: #FF9800;
    }

    i {
        font-size: 20px;
        color: #fff;
    }

    .hamburger {
        display: none;
    }

    .logo-2 img {
        display: none;
        width: 50px;
    }

    .dark {
        margin-top: 10px;
    }

    .dark i {
        color: #fff;
        cursor: pointer;
    }

    .light {
        display: none;
    }
</style>