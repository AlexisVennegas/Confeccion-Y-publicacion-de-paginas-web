
<?php

echo("hola buenos dias mundo")
?>
<!DOCTYPE html>
  <html>
  <head>
    <!-- Basic -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!-- Site Metas -->

    <title>Amunet</title>

    <!-- slider stylesheet -->
    <!-- slider stylesheet -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />

    <!-- bootstrap core css -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- fonts style -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Poppins:400,700&display=swap" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet" />
    <!-- responsive style -->
    <link href="css/responsive.css" rel="stylesheet" />
    <link rel="shortcut icon" href="./images/amunet.png" type="image/x-icon">
  </head>
  <body>
    <header class="header_section">
      <div class="container-fluid" >
        <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <a class="navbar-brand" href="index.html" style="padding: 0 0 !important;">
            <span class="title-header slide-in-elliptic-bottom-fwd">
              Amunet
              
            </span>
            <img class="logo-header slide-in-right" src="./images/animal.png" alt="">
              <div id="pencil-animation" style="width: 150px; height: 150px;  position: absolute; padding-left: 26px;"></div>
          
          
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link activado" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html"> About </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="do.html"> Style </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="network.html"> Network </a>
                </li>
                <li class="nav-item">
                  <p id="contactLink" class="nav-link" href="./api/contacto.php"> Contact </p>
                  <script>
                document.getElementById('contactLink').addEventListener('click', function(event) {
                  event.preventDefault(); // Prevenir el comportamiento predeterminado de navegación
                  
                  // Redirigir a contact.php
                  window.location.href = './contact.php';
                });
              </script>
                </li>
              </ul>
              <div class="user_option">
                  <img src="images/user.png" alt="" id="userIcon">
                  <div class="iniciar-sesion">
                      <div class="inputs">
                        Login
                        <input type="email" placeholder="email...">
                        <input type="password" placeholder="password">
                        </div>
                        <div class="buttons">
                          <button>Login</button>
                          <button>Register</button>
                        </div>
                        <div class="images">
                            <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="">
                            <img src="./images/facebook.png" alt="">

                        </div>

                  </div>
                  <input type="text" id="inputSearchShow" placeholder="search...">
                  <button id="buttonSearch" class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="hero_area">
      <!-- header section strats -->
  
      
      <!-- end header section -->
      <!-- slider section -->
      <section class=" slider_section position-relative" >
        <div class="video">
          <video autoplay muted loop id="myVideo" >
            <source src="images/video.mp4" type="video/mp4" class="videoComplete" >
            </video>
          <video autoplay muted loop id="myVideoMobile" >
            <source src="images/movile.mp4" type="video/mp4" class="videoMobile" >
          </video>
        </div>
        <div class="container" data-aos="fade-up">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col">
                    <div class="detail-box">
                      <div>
                        <h2>
                          welcome to

                        </h2>
                        <h1 class="title-carrousel">
                        Amunet
                          <img class="logo-header-2 scale-in-right" src="./images/ajolote.png" alt="">
                        </h1>
                    <!-- <div id="pencil-animation-2" style="width: 300px; height: 300px;  position: absolute; padding-left: 26px; top: -19%; left: 41%;"></div> -->
                        
                        <p>
                          <!-- mejor titulo para un lugar de tatuajes -->
                          we redesign your old tattoos like our logo
                        </p>
                        <div class="">
                          <a href="./do.html  ">
                            Check our designs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col">
                    <div class="detail-box">
                      <div>
                        <h2>
                          look at the 
                        </h2>
                        <h1 class="title-carrousel">
                          Art
                        </h1>
                        <p>
                        The Calatog of designs is available for you to choose the one that you like the most
                        </p>
                        <div class="">
                          <a href="./do.html">
                            Tattos Catalog
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="col">
                    <div class="detail-box">
                      <div>
                        <h2>turn your idea into a </h2>
                        <h1 class="title-carrousel">
                          tattoo
                        </h1>
                        <p>
                          We can help you to turn your idea into a tattoo, just contact us and we will make it happen
                        </p>
                        <div class="">
                          <a href="./contact.php">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <!-- end slider section -->
    </div>

    <!-- do section -->

    <section class="do_section layout_padding">
      
      <div class="container">
        <div class="heading_container">
          <h2 class="title-carrousel" style="margin-top: 8%;">
            Styles
          </h2>
          <p>
            Select the style that you like the most and we will make it happen for you
          </p>
        </div>
        <div class="do_container" data-aos="fade-up" style="cursor: pointer;">
          <div class="box arrow-start arrow_bg">
            <div class="img-box">
              <img src="https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-1-400x400.jpg" alt="">
            </div>
            <div class="detail-box">
              <h6 class="title-select">
                lineal
              </h6>
            </div>
          </div>
          <div class="box arrow-middle arrow_bg">
            <div class="img-box">
              <img src="https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-2-400x400.jpg" alt="">
            </div>
            <div class="detail-box">
              <h6 class="title-select">
                Color
              </h6>
            </div>
          </div>
          <div class="box arrow-middle arrow_bg">
            <div class="img-box">
              <img src="https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-3-400x400.jpg" alt="">
            </div>
            <div class="detail-box">
              <h6 class="title-select">
                backWork
              </h6>
            </div>
          </div>
          <div class="box arrow-end arrow_bg">
            <div class="img-box">
              <img src="https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-4-400x400.jpg" alt="">
            </div>
            <div class="detail-box">
              <h6 class="title-select">
                Realism
              </h6>
            </div>
          </div>
          <div class="box ">
            <div class="img-box">
              <img src="https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-5-400x400.jpg" alt="">
            </div>
            <div class="detail-box">
              <h6 class="title-select">
                Geometric
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end do section -->

    <!-- who section -->

    <section class="who_section ">
      <div class="container">
        <div class="newcontainer">
          <h2 class="title-carrousel " style="margin: 0 auto; font-weight: bold; text-transform: uppercase; position: relative; text-align: center; margin: 50px auto">
            WHO WE ARE?
          </h2>

        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="img-box" data-aos="fade-down">
              <!-- <h2 class="title-carrousel" >  
                WHO WE ARE?
              </h2> -->
              <img src="https://artcampus.es/wp-content/uploads/2019/08/tatuaje-avanzado.jpg" alt="">
            </div>
          </div>
          <div class="col-md-7">
            <div class="detail-box">
              <div class="heading_container">
              </div>
              <p data-aos="fade-down">
              
                We are a team of professional tattoo artists that are dedicated to make your ideas come true, we have a lot of experience in the field and we are always looking for new challenges to make our clients happy. The vision of our company is to be the best tattoo studio in the world, and we are working hard to make it happen.
              </p>
              <div>
                <a href="./about.html">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end who section -->


    <!-- work section -->
    <section class="work_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2 class="title-carrousel" style="margin: 0 auto;">
            CREATIVE WORKS
          </h2>
          <p  data-aos="fade-up">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation
          </p>
        </div>
        <div class="work_container layout_padding2" style="overflow: hidden;">
          <div class="box b-1 casilla-1" data-aos="fade-right" data-aos-duration="1000">
            <img src="https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-1-400x400.jpg" alt="">
          </div>
          <div class="box b-2 casilla-2" data-aos="fade-left" data-aos-duration="1000">
            <img src="https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-2-400x400.jpg" alt="">

          </div>
          <div class="box b-3 casilla-3" data-aos="fade-up" data-aos-duration="1000">
            <img src="https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-3-400x400.jpg" alt="">

          </div>
          <div class="box b-4 casilla-4" data-aos="fade-up" data-aos-duration="1000">
            <img src="https://www.lamanozurda.es/wp-content/uploads/2022/05/la.mano_.zurda_.tatuajes-madrid-ilustracion-color-andrea-magie-5-400x400.jpg" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- end work section -->

    <!-- client section -->
    <section class="client_section">
      <div class="container">
        <div class="heading_container">
          <h2 class="title-carrousel" style="margin: 0 auto;">
            WHAT CUSTOMERS SAY
          </h2>
        </div>
        <div class="carousel-wrap ">
          <div class="owl-carousel">
            <div class="item">
              <div class="box">
                <div class="img-box">
                  <img src="images/c-1.png" alt="">
                </div>
                <div class="detail-box">
                  <h5>
                    Alan Bernard <br>
                    <span>
                      first customer
                    </span>
                  </h5>
                  <img src="images/quote.png" alt="">
                  <p>
                    this is the best tattoo studio that I have ever been, the quality of the work is amazing and the prices are very good
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="box">
                <div class="img-box">
                  <img src="images/c-2.png" alt="">
                </div>
                <div class="detail-box">
                  <h5>
                    Princess Dianna <br>
                    <span>
                      Recurrent Customer
                    </span>
                  </h5>
                  <img src="images/quote.png" alt="">
                  <p>
                  i love the designs that they have, they are very creative and they can make any idea that you have come true
                  </p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="box">
                <div class="img-box">
                  <img src="images/c-3.png" alt="">
                </div>
                <div class="detail-box">
                  <h5>
                    Alexander Popovich<br>
                    <span>
                      New Customer
                    </span>
                  </h5>
                  <img src="images/quote.png" alt="">
                  <p>
                    I have been looking for a tattoo studio for a long time and I finally found the best one, the quality of the work is amazing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end client section -->

    <!-- target section -->
    <section class="target_section layout_padding2">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="detail-box">
              <h2>
                1000+
              </h2>
              <h5>
                Years of Business
              </h5>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="detail-box">
              <h2>
                20000+
              </h2>
              <h5>
                Tattoos Made
              </h5>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="detail-box">
              <h2>
                10000+
              </h2>
              <h5>
                Satisfied Customers
              </h5>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="detail-box">
              <h2>
                1500+
              </h2>
              <h5>
                tatto artists
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end target section -->


    <!-- contact section -->

    <section class="contact_section layout_padding">
      <div class="container">

        <div class="heading_container">
          <h2>
            Request A Call Back
          </h2>
        </div>
        <div class="">
          <div class="">
            <div class="row">
              <div class="col-md-9 mx-auto">
                <div class="contact-form">
                  <form action="">
                    <div>
                      <input type="text" placeholder="Full Name ">
                    </div>
                    <div>
                      <input type="text" placeholder="Phone Number">
                    </div>
                    <div>
                      <input type="email" placeholder="Email Address">
                    </div>
                    <div>
                      <input type="text" placeholder="Message" class="input_message">
                    </div>
                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn_on-hover">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map_img-box">
          <img src="images/map-img.png" alt="">
        </div>
      </div>
    </section>


    <!-- end contact section -->


    <!-- info section -->
    <section class="info_section ">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="info_contact">
              <h5>
                About Shop
              </h5>
              <div>
                <div class="img-box">
                  <img src="images/location-white.png" width="18px" alt="">
                </div>
                <p>
                  <a href="./about.html" style="color: white;">
                  Address
                  </a>
                </p>
              </div>
              <div>
                <div class="img-box">
                  <img src="images/telephone-white.png" width="12px" alt="">
                </div>
                <p>
                  +01 1234567890
                </p>
              </div>
              <div>
                <div class="img-box">
                  <img src="images/envelope-white.png" width="18px" alt="">
                </div>
                <p>
                  Amunet@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_info">
              <h5>
                Informations
              </h5>
              <p>
                Amunet is a tattoo studio that is dedicated to make your ideas come true, we have a lot of experience in the field and we are always looking for new challenges to make our clients happy.
              </p>
            </div>
          </div>

          <div class="col-md-3">
            <div class="info_insta">
              <h5>
                Instagram
              </h5>
              <div class="insta_container">
                <div>
                  <a href="">
                    <div class="insta-box b-1">
                      <img src="images/instagram.png" alt="" style="width: 20px;">
                    </div>
                  </a>
                  <a href="">
                    <div class="insta-box b-2">
                      <img src="images/instagram.png" alt="" style="width: 20px;">
                    </div>
                  </a>
                </div>

                <div>
                  <a href="">
                    <div class="insta-box b-3">
                      <img src="images/instagram.png" alt="" style="width: 20px;">
                    </div>
                  </a>
                  <a href="">
                    <div class="insta-box b-4">
                      <img src="images/instagram.png" alt="" style="width: 20px;">
                    </div>
                  </a>
                </div>
                <div>
                  <a href="">
                    <div class="insta-box b-3">
                      <img src="images/instagram.png" alt="" style="width: 20px;">
                    </div>
                  </a>
                  <a href="">
                    <div class="insta-box b-4">
                      <img src="images/instagram.png" alt="" style="width: 20px;">
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_form ">
              <h5>
                Newsletter
              </h5>
              <form action="">
                <input type="email" placeholder="Enter your email">
                <button>
                  Subscribe
                </button>
              </form>
              <div class="social_box">
                <a href="">
                  <img src="images/fb.png" alt="">
                </a>
                <a href="">
                  <img src="images/linkedin.png" alt="">
                </a>
                <a href="">
                  <img src="images/youtube.png" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- end info_section -->

    
    <!-- footer section -->
    <section class="container-fluid footer_section">
      <p>
        <a href="./SEO/sidemap.html">Sitemap html</a>
      </p>
      <p>
        &copy; 2024 All Rights Reserved By
        <a href="https://html.design/">Amunet</a>
        Distrubuted By <a href="https://themewagon.com">
          Amunet
        </a>
      </p>
    </section>
    <!-- footer section -->
    <div class="cookiesms" id="cookie1">
      Este sitio web usa cookies, puedes ver la <a href="https://wwww.dominio.com/politica-cookies.html">politica de cookies</a>
      <button onclick="controlCookies()">Aceptar</button>
    </div>
    <div class="cookies2" id="cookie2">
      Politica de cookies + 
    </div>

    <script>
      if (localStorage.controlCookies > 0) {
        cookie1.setatribute('style', "animation: desaparecer 5s;");
      }
      function controlCookies() {
        localStorage.controlCookies = (localStorage.controlCookies || 0)

        localStorage.controlCookies++;

        cookie1.style.display = "none";
      }
    </script>



    <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
    </script>
    <!-- owl carousel script 
    -->
      <script src="./js/index.js"></script>
    <script type="text/javascript">
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        navText: [],
        center: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          1000: {
            items: 3
          }
        }
      });
      </script>
    <!-- end owl carousel script -->
    
    
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

      <script>
        lottie.loadAnimation({
            container: document.getElementById('pencil-animation'), // El contenedor donde se reproducirá la animación
            renderer: 'svg',
            loop: true, // Define si la animación se repetirá
            autoplay: true, // Define si la animación empezará a reproducirse automáticamente
            path: 'https://raw.githubusercontent.com/AlexisVennegas/lottie-animation/main/tDB6eOMz8L.json' // La URL del archivo JSON de la animación
        });
        lottie.loadAnimation({
            container: document.getElementById('pencil-animation-2'), // El contenedor donde se reproducirá la animación
            renderer: 'svg',
            loop: true, // Define si la animación se repetirá
            autoplay: true, // Define si la animación empezará a reproducirse automáticamente
            path: 'https://raw.githubusercontent.com/AlexisVennegas/lottie-animation/main/tDB6eOMz8L.json' // La URL del archivo JSON de la animación
        });
      
    </script>
    <script>
      AOS.init();
    </script>
  </body>

  </html>