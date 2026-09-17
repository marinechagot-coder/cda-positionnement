//Écrire une fonction fizzBuzz(n) qui affiche les nombres de 1 à n avec les règles suivantes:

function fizzBuzz(n) {
  for (let i = 1; i < n + 1; i++) {
    if ((i % 3 == 0) & (i % 5 == 0)) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  return;
}
//Écrire une fonction isPalindrome(str) qui retourne true si la chaîne est un palindrome

function isPalindrome(str) {
  strArray = str.split(/\s+/);
  CleanString = strArray.join("");
  NoSpaceString = CleanString.trim();
  strf = NoSpaceString.toLowerCase();
  console.log(strf);
  test = true;
  for (i = 0; i < strf.length / 2; i++) {
    if (
      strf.substring(i, i + 1) !=
      strf.substring(strf.length - i, strf.length - i + 1)
    ) {
      test = false;
    }
  }
  return test;
}
//console.log(isPalindrome("kayak"));
//console.log(isPalindrome("hello"));
//console.log(isPalindrome("A man a plan a canal Panama"));
//Énoncé: Écrire une fonction areAnagrams(str1, str2) qui retourne true si les deux chaînes sont
//des anagrammes, false sinon.
function areAnagrams(str1, str2) {
  //suppression espace et majuscule
  strArray = str1.split(/\s+/);
  CleanString = strArray.join("");
  NoSpaceString = CleanString.trim();
  strf1 = NoSpaceString.toLowerCase();
  strArray = str2.split(/\s+/);
  CleanString = strArray.join("");
  NoSpaceString = CleanString.trim();
  strf2 = NoSpaceString.toLowerCase();
  console.log(strf2);
  //comparaison chaine
  if (strf1.length != strf2.length) {
    return false;
  } else {
    var dico = new Map();
    for (i = 0; i < strf1.length; i++) {
      key = strf1.substring(i, i + 1);
      if (dico.has(key)) {
        dico.set(key, dico.get(key) + 1);
      } else {
        dico.set(key, 1);
      }
    }
    var test = true;
    for (i = 0; i < strf2.length; i++) {
      key = strf2.substring(i, i + 1);
      if (dico.has(key)) {
        val = dico.get(key) - 1;
        if ((val = 0)) {
          dico.delete(key);
        } else {
          dico.set(key, val);
        }
      } else {
        test = false;
      }
    }
    return test;
  }
}
//console.log(areAnagrams("listen", "silent"));
//console.log(areAnagrams("hello", "world"));
//console.log(areAnagrams("Astronomer", "Moon starer"));

//Énoncé: Écrire une fonction fibonacci(n) qui retourne le nième nombre de la suite de Fibonacci.
// Version récursive
function fibonacci(n) {
  if (n == 0) {
    val = 0;
  } else if (n == 1) {
    val = 1;
  } else {
    val = fibonacci(n - 2) + fibonacci(n - 1);
  }
  return val;
}
// Version itérative (bonus)
function fibonacciIterative(n) {
  if (n == 0) {
    val = 0;
  } else {
    valn0 = 0;
    valn1 = 1;
    for (i = 0; i < n - 1; i++) {
      val = valn0 + valn1;
      valn0 = valn1;
      valn1 = val;
    }
  }
  return val;
}
//console.log(fibonacci(0), "  ", fibonacciIterative(0));
//console.log(fibonacci(1), "  ", fibonacciIterative(1));
//console.log(fibonacci(6), "  ", fibonacciIterative(6));
//console.log(fibonacci(10), "  ", fibonacciIterative(10));
function sortArray(arr) {
  test = true;
  while (test) {
    test = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        val = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = val;
        test = true;
      }
    }
  }
  return arr;
}
function findMax(arr) {
  val = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > val) {
      val = arr[i];
    }
  }
  return val;
}
//console.log(sortArray([3, 1, 4, 1, 5, 9, 2]));
//console.log(findMax([3, 1, 4, 1, 5, 9, 2]));

//Exercice 3.6: Manipulation de données (Avancé)
function filterByCategory(products, category) {
  tabl = [];
  //console.log(products.length);
  for (i = 0; i < products.length; i++) {
    if (products[i].category == category) {
      //redim tabl(j)
      tabl.push(products[i]);
    }
  }
  return tabl;
}

function getAveragePrice(products) {
  tot = 0;
  for (i = 0; i < products.length; i++) {
    tot = tot + products[i].price;
  }
  val = tot / products.length;
  return val;
}
function getMostExpensive(products) {
  // En cas de plusieurs produits de meme valeur; renvoie le premier listé
  index = 0;
  for (i = 1; i < products.length; i++) {
    if (products[i].price > products[index].price) {
      index = i;
    }
  }
  return products[index];
}

function groupByCategory(products) {
  listkey = [];
  var dico = new Map();
  for (i = 1; i < products.length; i++) {
    key = products[i].category;
    if (!dico.has(key)) {
      dico.set(key, key);
      //console.log(key);
      listkey.push(key);
    }
  }
  console.log(listkey);
  objgroup = {};
  for (i = 0; i < listkey.length + 1; i++) {
    console.log(listkey[i], "/", i);
    objgroup[listkey[i]] = filterByCategory(products, listkey[i]);
  }
  return objgroup;
}

const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Phone", price: 699, category: "Electronics" },
  { id: 3, name: "Desk", price: 299, category: "Furniture" },
  { id: 4, name: "Chair", price: 199, category: "Furniture" },
  { id: 5, name: "Monitor", price: 299, category: "Electronics" },
];
//console.log(filterByCategory(products, "Electronics"));
//console.log(getAveragePrice(products));
//console.log(getMostExpensive(products));
console.log(groupByCategory(products));
