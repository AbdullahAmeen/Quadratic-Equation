function solveQuadratic() {
  // Get the values of a, b, and c from the input fields
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let result;

  // Check if 'a' is invalid or zero
  if (isNaN(a) || a === 0) {
    document.getElementById("result").innerText =
      "Please enter a valid number for 'a'. 'a' should not be 0.";
    return;
  }

  // If 'b' is zero, solve the equation with 'b' = 0
  if (b === 0) {
    if (c === 0) {
      result = "With 'b' and 'c' both equal to zero, the solution is x = 0.";
    } else {
      let root = Math.sqrt(-c / a).toFixed(2);
      result = `With 'b' = 0, the solutions are x1 = ${root}, x2 = ${-root}`;
    }
    document.getElementById("result").innerText = result;
    return;
  }

  // If 'c' is zero, solve the equation with 'c' = 0
  if (c === 0) {
    let root1 = 0;
    let root2 = (-b / a).toFixed(2);
    result = `With 'c' = 0, the solutions are x1 = ${root1}, x2 = ${root2}`;
    document.getElementById("result").innerText = result;
    return;
  }

  // Calculate the discriminant
  let discriminant = b * b - 4 * a * c;

  // Check if roots are real or complex
  if (discriminant > 0) {
    let root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    let root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
    result = `The two real roots are x1 = ${root1}, and x2 = ${root2}`;
  } else if (discriminant === 0) {
    let root = (-b / (2 * a)).toFixed(2);
    result = `There is one real root: x = ${root}`;
  } else {
    result =
      "This equation has no real solutions, but has complex roots (Imaginary numbers).";
  }

  // Display the result
  document.getElementById("result").innerText = result;
}

function factorQuadratic() {
  // Get the values of e, f, and g from the input fields
  let e = parseFloat(document.getElementById("e").value);
  let f = parseFloat(document.getElementById("f").value);
  let g = parseFloat(document.getElementById("g").value);

  // Validate input
  if (isNaN(e) || isNaN(f) || isNaN(g) || e === 0) {
    document.getElementById("result1").innerText =
      "Please enter valid numbers, and 'a' should not be 0.";
    return;
  }

  // Calculate the discriminant
  let discriminant = f * f - 4 * e * g;

  if (discriminant < 0) {
    document.getElementById("result1").innerHTML =
      'No real roots (The Solution would be <a href="https://www.mathsisfun.com/numbers/imaginary-numbers.html" target="_blank">Imaginary numbers</a>).';
    return;
  }

  // Calculate the roots
  let root1 = (-f + Math.sqrt(discriminant)) / (2 * e);
  let root2 = (-f - Math.sqrt(discriminant)) / (2 * e);

  // Format roots to display decimals
  root1 = parseFloat(root1.toFixed(4)).toFixed(2); // Round to 4 decimal places
  root2 = parseFloat(root2.toFixed(4)).toFixed(2); // Round to 4 decimal places

  // Display the factored form
  let factor1 = `(${e}x + ${-root1 * e})`;
  let factor2 = `(${e}x + ${-root2 * e})`;

  document.getElementById(
    "result1"
  ).innerText = `The factored form is: ${factor1}${factor2}`;
}


document.getElementById('factorButton').onclick = function() {
  const input = document.getElementById('numberInput').value;
  const number = parseInt(input);

  if (isNaN(number) || number <= 0) {
      document.getElementById('result2').innerText = 'Please enter a valid positive number.';
      return;
  }

  let factors = [];
  for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
          factors.push(i);
      }
  }

  document.getElementById('result2').innerText = 'Factors: ' + factors.join(', ');
};