<?php
$nama_lg="Qunita Afif Mirror Khusnul";
$nama="Qunita";
$insta="qntnitaa";
$email="qonitaaf04@gmail.com"
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas 1</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
<div class="card text-bg-dark">
  <img src="https://i.pinimg.com/564x/b0/80/b9/b080b9e80341f09b40bc223b545660ae.jpg" class="card-img" alt="..." height="600">
  <div class="card-img-overlay">
    <h1 class="card-title" color=black><?=$nama_lg?></h1>
    <p class="card-text">a mentee at Nurul Fikri Akademi</p>
    <!-- <p class="card-text"><small>Last updated 3 mins ago</small></p> -->
  </div>
</div>

<div class="card text-bg-dark">
  <div class="card-body">
    <h3>Hello my name is <?=$nama?></h3>
    <p>Currently, I am interested in the field of Full Stack Web Development, which is why I am participating in MSIB activities</p>
    <br><br>
    <h4>How to reach me?</h4>
    <p>Instagram : <a href="#" class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><?=$insta?></a></p>
    <p>email : <?=$email?></p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>