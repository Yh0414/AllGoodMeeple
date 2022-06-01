function validateForm() {
    let x = document.forms["login-form"]["name"].value;
    let y= document.forms["login-form"]["email"].value;
    let z = document.forms["login-form"]["password"].value;
    let w = document.forms["login-form"]["confirm-password"].value;

    if (x == "") 
    {
      alert("Name must be filled out");
      return false;
    } else if (y == "") 
    {
        alert("Email must be filled out");
        return false;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(y) != true) {
        alert("You have entered an invalid email address!")
        return (false)
    } else if (z == "") 
    {
        alert("Password must be filled out");
        return false;
    } else if (w == "") 
    {
        alert("Confirm Password must be filled out");
        return false;
    } else if (w != z) 
    {
        alert("Confirm Password is not match with the password");
        return false;
    }
  }