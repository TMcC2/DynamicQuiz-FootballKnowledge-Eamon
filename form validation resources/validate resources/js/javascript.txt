function validate(form) {
    fail  = validateForename(form.forename.value);
    fail += validateSurname(form.surname.value);
    fail += validateUsername(form.username.value);
    fail += validatePassword(form.password.value);
    fail += validateAge(form.age.value);
    fail += validateEmail(form.email.value);

    if   (fail == "")
        return true;
    else { 
        alert(fail);
        return false;
    }
}

//Basically check if Forename is empty
function validateForename(field) {
    return (field == "") ? "No Forename was entered.\n" : "";
}

//Basically check if Surname is empty
function validateSurname(field) {
    return (field == "") ? "No Surname was entered.\n" : "";
}

//Check that the username has valid characters only using a Regular expression
function validateUsername(field) {
    if (field == "")
        return "No Username was entered.\n";
    else if (field.length < 5)
      return "Usernames must be at least 5 characters.\n";
    else if (/[^a-zA-Z0-9_-]/.test(field))
      return "Only a-z, A-Z, 0-9, - and _ allowed in Usernames.\n";

    return "";
}


//Check that the password has at least some Capital letters and numbers using a Regular expression
function validatePassword(field) {
    if (field == "")
        return "No Password was entered.\n";
    else if (field.length < 6)
      return "Passwords must be at least 6 characters.\n";
    else if (! /[a-z]/.test(field) ||
             ! /[A-Z]/.test(field) ||
             ! /[0-9]/.test(field))
      return "Passwords require one each of a-z, A-Z and 0-9.\n";

    return "";
}

//Check that the age is valid - adult age
function validateAge(field) {
    if (isNaN(field))
        return "No Age was entered.\\n";
    else if (field < 18 || field > 110)
        return "Age must be between 18 and 110.\n";

    return "";
}

/* Check that it looks like an email address i.e. contains at 
   least one '.' and the @ symbol using a Regular expression */
function validateEmail(field) {
    if (field == "")
        return "No Email was entered.\n";
      else if (!((field.indexOf(".") > 0) &&
                 (field.indexOf("@") > 0)) ||
                 /[^a-zA-Z0-9.@_-]/.test(field))
          return "The Email address is invalid.\n";

    return "";
}