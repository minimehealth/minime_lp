
<?php

$webEmail = "nina@minime.health";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

if(mail($webEmail,$email_subject,$email_body,$headers)){
  echo "Sent";
  }

?>

