function solveQuadratic() {
            // Get the values of a, b, and c from the input fields
            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);
            let c = parseFloat(document.getElementById("c").value);
            
            // Calculate the discriminant
            let discriminant = b * b - 4 * a * c;
            let result;

            // Check if roots are real or complex
            if (discriminant > 0) {
                let root1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
                let root2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2);
                result = `The two real roots, x1 = ${root1},  and  x2 =  ${root2}`;
            } 
            
            else if (discriminant === 0) {
                let root = -b / (2 * a);
                result = `One real root: ${root}`;
            
            } else {
                
                result = `This equation doesn't actually have a real solution or root. However, it has imaginary solution.`;
            }
            

            // Display the result
            document.getElementById("result").innerText = result;
        }

        function factorQuadratic() {
            // Get the values of e, f, and g from the input fields
            let e = parseFloat(document.getElementById('e').value);
            let f = parseFloat(document.getElementById('f').value);
            let g = parseFloat(document.getElementById('g').value);
        
            // Validate input
            if (isNaN(e) || isNaN(f) || isNaN(g) || e === 0) {
                document.getElementById('result1').innerText = "Please enter valid numbers, and 'a' should not be 0.";
                return;
            }
        
            // Calculate the discriminant
            let discriminant = f * f - 4 * e * g;

            if (discriminant < 0) {
                document.getElementById('result1').innerText = "No real roots (The Solution would be imaginary numbers).";
              
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
        
            document.getElementById('result1').innerText = `The factored form is: ${factor1}${factor2}`;
        }