<?php

$EmailFrom = "livehiv.ee";
$EmailTo = "livehiv@thinkforce.eu";
$Subject = "Message from livehiv.ee";
$Name = Trim(stripslashes($_POST['Name'])); 

$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// validation
$validationOK=true;

if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
$success = mail("janika.leoste@gmail.com", $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  // print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
	print "<meta http-equiv=\"refresh\" content=\"0;URL=/?result=success\">";
}
else {
  // print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
	print "<meta http-equiv=\"refresh\" content=\"0;URL=/?result=error\">";
}
?>