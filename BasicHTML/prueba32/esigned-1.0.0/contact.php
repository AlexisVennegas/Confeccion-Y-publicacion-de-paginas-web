<!-- Abro PHP -->
<?php
//Definir las variables y establecer valores vacíos
$nameErr = $apellidoErr = $emailErr = $subjectErr = $messageErr = "";//todos los Err valen nada
$name = $apellido = $email = $subject = $message = "";//estas variables no valen nada

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //validación del nombre
    if(empty($_POST["name"])) {
        $nameErr = "El nombre es obligatorio";
    } else {
        $name = test_input($_POST["name"]);
        if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
            $nameErr = "Sólo se permitn letras y espacios en blanco";
        }
    }
    //validación del apellido
    if(empty($_POST["apellido"])) {
        $apellidoErr = "El apellido es obligatorio";
    } else {
        $apellido = test_input($_POST["apellido"]);
        if (!preg_match("/^[a-zA-Z-' ]*$/", $apellido)) {
            $apellidoErr = "Sólo se permitn letras y espacios en blanco";
        }
    }

    //validación del correo electrónico
    if(empty($_POST["email"])) {
        $emailErr = "El correo electrónico es obligatorio";
    } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Formato de correo inválido";
        }
    }

    //Validación del asunto
    if(empty($_POST["subject"])) {
        $subjectErr = "El asunto es obligatorio";
    } else {
        $subject = test_input($_POST["subject"]);
    }

    //validación del mensaje
    if(empty($_POST["message"])) {
        $messageErr = "El mensaje es obligatorio";
    } else {
        $message = test_input($_POST["message"]);
    }

    //Si no hay errores, vamos a procesar el formulario enviándolo por correo
    if($nameErr == "" && $apellidoErr == "" && $emailErr == "" && $subjectErr == "" && $messageErr == "") {
        $to = "elcorreodondevaallegar@hotmail.com";//aquí el correo donde queréis mandarlo
        $headers =  "From: " .$email."\r\n". 
                    "Reply-to: ".$email."\r\n".
                    "X-Mailer: PHP/".phpversion();
        $full_message = "Nombre: $name\nApellido: $apellido\n Correo: $email\n\nMensaje:\n$message";
        if (mail($to, $subject,$full_message,$headers)) {
            echo "<h3>Gracias por contactarnos, $name. Te responderemos lo antes posible</h3>";
            $name = $apellido = $email = $subject = $message = "";
        } else {
            echo "<h3>Lo siento, ocurrió un error al enviar tu mensaje. Inténtalo de nuevo</h3>";
        }
        //limpiar los valores después de enviar
        $name = $apellido = $email = $subject = $message = "";
        
    }
}
function test_input($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
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
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="author" content="" />
  <!-- comienza Slider -->
  
  <!-- fin del Slider -->
    <title>Questions</title>

    <style>
    .error {
        color:red;
    }
</style>

  <!-- bootstrap core css -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />

  <!-- fonts style -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Poppins:400,700&display=swap" rel="stylesheet">
  <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet" />
  <!-- responsive style -->
    <link href="css/responsive.css" rel="stylesheet" />
</head>

<body class="sub_page">
  <header class="header_section" style="background-color: rgba(0, 0, 0, 0.438);">
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
                <a class="nav-link " href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html"> About </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="do.html"> Style </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html"> Contact Us </a>
              </li>
              <li class="nav-item">
                <a class="nav-link activado" href="contact.html"> Question`s </a>
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
  <h2 class="title-carrousel " style="margin: 0 auto; font-weight: bold; text-transform: uppercase; position: relative; text-align: center; margin-top: 40px;">
    Contact Us
  </h2>
  <div class="hero_area">
    <!-- header section strats -->
   
    <!-- end header section -->
  </div>

  <!-- contact section -->

  <section class="contact_section layout_padding">
    <div class="container">

      <div class="heading_container" style="margin: 0 !important;">
        
      </div>
      <div class="">
        <div class="">
          <div class="row">
            <div class="col-md-9 mx-auto">
              <div class="contact-form">
              <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                  <div>
                    <input type="text" name="name" value="<?php echo $name;?>" placeholder="Nombre">
                    <span class="error"><?php echo $nameErr;?></span>
                  </div>
                  <div>
                    <input type="text" name="apellido" value="<?php echo $apellido;?>" placeholder="Apellido">
                    <span class="error"><?php echo $apellidoErr;?></span>
                  </div>
                  <div>
                    <input type="email" name="email" value="<?php echo $email;?>" placeholder="Correo">
                    <span class="error"><?php echo $emailErr;?></span>
                  </div>
                  <div>
                    <input type="text" name="subject" value="<?php echo $subject;?>" placeholder="Asunto"> 
                    <span class="error"><?php echo $subjectErr;?></span>
                  </div>
                  <div>
                    <textarea style="border-radius: 15px" name="message" rows="5" cols="96" placeholder="mensaje"><?php echo $message;?></textarea>
                    <span class="error"><?php echo $messageErr;?></span>
                  </div>
                  <div class="d-flex justify-content-center">
                    <input class="btn_on-hover" type="submit" name="submit" value="Enviar">
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
                Address
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
                demo@gmail.com
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
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
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
                    <img src="images/insta.png" alt="">
                  </div>
                </a>
                <a href="">
                  <div class="insta-box b-2">
                    <img src="images/insta.png" alt="">
                  </div>
                </a>
              </div>

              <div>
                <a href="">
                  <div class="insta-box b-3">
                    <img src="images/insta.png" alt="">
                  </div>
                </a>
                <a href="">
                  <div class="insta-box b-4">
                    <img src="images/insta.png" alt="">
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div class="insta-box b-3">
                    <img src="images/insta.png" alt="">
                  </div>
                </a>
                <a href="">
                  <div class="insta-box b-4">
                    <img src="images/insta.png" alt="">
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
                <img src="images/twitter.png" alt="" style="width: 20%;">
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
      &copy; 2020 All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
      Distrubuted By <a href="https://themewagon.com">ThemeWagon</a>
    </p>
  </section>
  <!-- footer section -->

  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
  </script>
  <!-- owl carousel script 
    -->
  
</body>

</html>