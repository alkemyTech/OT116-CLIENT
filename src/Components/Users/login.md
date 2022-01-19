# Login test documentation

## Test cases:

### renders Login component

In this case, I try to render de Login component to verify the correct implementation of the test and renderization of component. Once the test is OK, I can continue with other tests.

To do this, I should found an element that contains 'Iniciar sesión', and then, expect to this element be in the document after renderization.

### all input is required

Here expect to all inputs have a required attribute to ensure that login doesn't occur if this condition doesn'true.

To that, I use toBeRequired assertive function provided by React Testing Library.

### shouldn't submit if inputs are empty

Using getByPlaceholderText search function, email and password inputs were founded, and then I evaluate if their values are falsy or not (empty strings returns a falsy value).

When this part of the test is succesfully done, test simulate a click event in the submit button, and verify that onSubmit mock function has been called once.

### show error message if email input is empty

Similar to the previous tests, after empty email imput value is verified, we expect that user begins to fill input password and then, click submit button.

Values tested are invalid, so we expect a failed test. After that, the error message 'Este campo es obligatorio' should to be render.

### api should be called when inputs are not empty and returns error message when data is wrong

In this test I try to call an spy function of loginUser. Email and password inputs should receive invalid values (but not empty), so the async function should to be called once.

Here there is a problem with the loginUser's catch block evaluation, wich I can't solve due to lack of time to finish this aceleration.

### api should be called when inputs are not empty and validate data when input values are correct

Finally, in this case email and password inputs have correct values, and expect to loginUser was called and returns a token value.