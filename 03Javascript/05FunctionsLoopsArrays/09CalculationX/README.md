[Exercise on Codepen](https://codepen.io/noreading/pen/EeqwyK?editors=0010)  
[Solution on Codepen](https://codepen.io/noreading/pen/EeqvNJ?editors=0010)

*******************************************************************
# Create a calculator
*******************************************************************

Create a function that calculates 2 numbers based on the operation,
which should be the first parameter and can have the values:
"add", "subtract", "multiply", "divide", "modulo"

Then add all the needed JavaScript to calculate the result when the
numbers in the input fields change.

# Take this starter HTML
```
<!DOCTYPE html>
<html>

<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">

  <style media="screen">
    .operator {
  min-width: 1rem;
  text-align: center;
}

h1 {
  font-size: 2rem;
  line-height: 2rem;

}
  @media all and (min-width: 576px) {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
  </style>
</head>

<body>
  <header>
    <div class="jumbotron jumbotron-fluid bg-warning">
      <div class="container">
        <h1 class="text-center text-uppercase align-middle">
          <i class="fas fa-calculator"></i>
          Calculation X</h1>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <h2>Basic Arithmatic</h2>
      <form>
        <div class="form-row align-items-center mb-3">
          <div class="col">
            <input type="number" id="add_1" class="operand form-control" value="0" step="1">
          </div>
          <span class="operator font-weight-bold lead">+</span>
          <div class="col">
            <input type="number" id="add_2" class="operand form-control" value="0" step="1">
          </div>
          <span class="operator font-weight-bold lead">=</span>
          <div class="col">
            <input type="number" id="add_result" readonly class="result form-control" value="0" data-operation="add">
          </div>
        </div>

        <div class="form-row align-items-center mb-3">
          <div class="col">
            <input type="number" id="subtract_1" class="operand form-control" value="0" step="1">
          </div>
          <span class="operator font-weight-bold lead">-</span>
          <div class="col">
            <input type="number" id="subtract_2" class="operand form-control" value="0" step="1">
          </div>
          <span class="operator font-weight-bold lead">=</span>
          <div class="col">
            <input type="number" id="subtract_result" readonly class="result form-control" value="0" data-operation="subtract">
          </div>
        </div>

        <div class="form-row align-items-center mb-3">
          <div class="col">
            <input type="number" id="multiply_1" class="operand form-control" value="0" step="1">
          </div>
          <span class="operator font-weight-bold lead">&times;</span>
          <div class="col">
            <input type="number" id="multiply_2" class="operand form-control" value="0" step="1">
          </div>
          <span class="operator font-weight-bold lead">=</span>
          <div class="col">
            <input type="number" id="multiply_result" readonly class="result form-control" value="0" data-operation="multiply">
          </div>
        </div>

        <div class="form-row align-items-center mb-3">
          <div class="col">
            <input type="number" id="divide_1" class="operand form-control" value="0" step="0.01">
          </div>
          <span class="operator font-weight-bold lead">&divide;</span>
          <div class="col">
            <input type="number" id="divide_2" class="operand form-control" value="0" step="0.01">
          </div>
          <span class="operator font-weight-bold lead">=</span>
          <div class="col">
            <input type="number" id="divide_result" readonly class="result form-control" value="0" data-operation="divide">
          </div>
        </div>
      </form>

      <h2>Special operations</h2>
      <form>
        <legend>Modulo</legend>
        <div class="form-row align-items-center mb-3">
          <div class="col">
            <input type="number" id="modulo_1" class="operand form-control" value="0" step="1">
          </div>
          <span class="operator font-weight-bold lead">%</span>
          <div class="col">
            <input type="number" id="modulo_2" class="operand form-control" value="0" step="1">
          </div>
          <span class="operator font-weight-bold lead">=</span>
          <div class="col">
            <input type="number" id="modulo_result" readonly class="result form-control" value="0" data-operation="modulo">
          </div>
        </div>
      </form>
    </div>
  </main>
  <script>
    /*********************************************************************
     * EXERCISE
     *********************************************************************
     *
     * Create a function that calculates 2 numbers based on the operation,
     * which should be the first parameter and can have the values:
     * "add", "subtract", "multiply", "divide", "modulo"
     *
     * Then add all the needed JavaScript to calculate the result when the
     * numbers in the input fields change.
     */

    /*
     * First we store all available operations in an array.
     *
     * Check the HTML code and you'll see that these strings are used as a
     * pattern to always have 3 input fields per operation:
     * {operation}_1  {operation}_2  {operation}_result
     *
     * Using the same pattern for the IDs of all input fields, we can loop
     * the array of operators and reduce the amount of needed code.
     * We don't need to write the same lines again and again, as we use
     * template literals to combine the operator with the pattern to
     * get all elements by their ID.
     */
  </script>
</body>

</html>

```
