<?php
$name = $_POST['name'];
$visitor_email =$_POST['email'];
$subject = $_POST['subject'];
$messsage = $_POST['message'];

$email_form = 'zk432824@gmail.com';
$email_subject = 'New Form Submission';
$email_body = "User Name: $name./n".
               "User Email: $visitor_email./n".
               "Subject: $subjact./n".
               "User Message: $messsage./n";

 $to ='zk432824@gmail.com';
 $headers = "Form: $email_form /r/n";
 $headers .="Reply-To: $visitor_email /r/n";

 mail($to,$email_subject,$email_body,$headers);
 header("location: contact.html");

?>