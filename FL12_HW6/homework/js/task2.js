// Your code goes here
function triangles(n1, n2, n3) {
    if (n1 === '' || isNaN(n1)) {
        alert('Enter valid number A')
    }
    if (n2 === '' || isNaN(n2)) {
        alert('Enter valid number B')
    }
    if (n3 === '' || isNaN(n3)) {
        alert('Enter valid number C')
    }
    function isInvalid(n) {
        return typeof n !== 'number';
    }

    if (isInvalid(n1) || isInvalid(n2) || isInvalid(n3)) {
        throw new TypeError('Not a number');
    } 

    let len = Object.keys([n1, n2, n3].reduce((a,b) => {
         a[b] = (a[b] || 0) + 1; return a; 
        }, {})).length;
        const two = 2;
        const three = 3;

        if (len === three) {
            return 'Scalene'
        } else if (len === two) {
            return 'Isosceles'
        } else {
            return 'Equilateral'
        }
}

let a = +prompt('Enter side A');
let b = +prompt('Enter side B');
let c = +prompt('Enter side C');

console.log(triangles(a, b, c));