function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
    // To keep it from happening we can can call e.preventDefault()
    // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;
    // add our validations here
    if (theForm.paymentMethod.value === "creditCard") {
      // normally we would need contact the credit card company to verify the number...we are only going to allow one number as valid to keep things simple.
      if (theForm.creditCardNumber.value !== "1234123412341234") {
        isValid = false;
        errors.push("Invalid Credit Card Number");
      }
    }
    if (theForm.fullName.value !== "Bob") {
      isValid = false;
      errors.push("Your name is not Bob");
    }
    // if we ran into any problems above valid will be false.
    if (!isValid) {
      //stop the form from being submitted
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
  }
  // attach a submit event handler to the form
  document
    .querySelector("#checkoutForm")
    .addEventListener("submit", validateForm);