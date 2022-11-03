//-----------Zadanie1----------------------------------------
function combine(foo, array1, array2){
    let arrayWynik = []
    for(var i =0;i<array1.length;i++){
        arrayWynik[i]=foo(array1[i], array2[i])
    }
    return arrayWynik
}


let wynik = combine((a,b)=>a+b, [4, 5, 6], [10, 20, 30])
console.log(wynik)

let wynik2 = combine((a,b) => "{x:"+a+",y:"+b+"}" , [4, 5, 6], [10, 20, 30])
console.log(wynik2)

function combine1(foo, ..._rest){
    let arrayWynik = []
    let one = []
    let two = []
    let three = []
    for(var i = 0;i<arguments.length;i++){
        for(var j = 1; j<arguments[i].length-1;j+=3){
            one = arguments[j]
            two = arguments[j+1]
            three = arguments[j+2]

            arrayWynik[i] = foo(one[i],two[i],three[i])
        }
    }
    return arrayWynik
}

let wynik3 = combine1((a,b,c)=>a+b+c, [1, 2, 3], [5, 6, 7], [10, 20, 30])
console.log(wynik3)

//-----------Zadanie2----------------------------------------
function skarbonka(_owner, _state = 0){
    var state = _state;
    var owner = _owner;

    function skarb(state1){
        if(state1){
            state += state1
            console.log(owner +" set "+ state)
        }
        else{
            console.log(owner +" set "+ state)
            return state;
        }
    }
    
    return skarb;
}

let s = skarbonka("Piotr", 100);
s(20); // wypisuje "Piotr set 120"
let ile = s(); // zwraca 120, wypisuje do konsoli "Piotr get 120"
console.log(ile)

//-----------Zadanie3----------------------------------------

let arrayList = [ { imię: "Piotr", nazwisko: "Nowak", punkty: 63 },
{ imię: "Tomasz", nazwisko: "Kowalski", punkty: 88 },
{ imię: "Julia", nazwisko: "Bagińska", punkty: 75 },
{ imię: "Julian", nazwisko: "Bagiński", punkty: 95 },
{ imię: "Jakub", nazwisko: "Tomaszewski", punkty: 88 },
{ imię: "Pawel", nazwisko: "Gada", punkty: 51 },
{ imię: "Tomasz", nazwisko: "Jarosz", punkty: 65 },
{ imię: "Grzegorz", nazwisko: "Kowal", punkty: 91 }  ]


const arrSum = arr => arr.reduce((a,b) => a + b, 0)

let points = arrayList.map( student => {
    return student.punkty
})
let summary = arrSum(points);
let average = summary/points.length;
console.log(average);

//-----------------------------------------------------------

let moreThan = arrayList.filter(student => 
        student.punkty > average
   )

   console.log(moreThan)

//----------------------------------------------------------


function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      const curGroup = acc[key] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  }

  const groupedStudents = groupBy(arrayList, "punkty");
  console.log(groupedStudents)



  var keys = Object.keys(groupedStudents)


console.log(keys)
let whichLast = keys.length - 3

console.log("Wartosc graniczna: "+keys[whichLast])

let topThree = arrayList.filter(student => 
    student.punkty >= keys[whichLast]
)
console.log(topThree)


//---------------------------------------------------------

arrayList.sort(function(a, b) {
 if(a.nazwisko < b.nazwisko)
 return -1;
 if(b.nazwisko < a.nazwisko)
 return 1;
 return 0;
});
console.log(arrayList)


function whichGrade(points){
    let wynik=""
    switch(true){
        case (points<50):
        wynik ="ndst"
        break
        case (points<60):
        wynik ="dst"
        break
        case points<70:
        wynik ="dst+"
        break
        case points<80:
        wynik = "db"
        break
        case points<90:
        wynik = "db+"
        break
        case points<101:
        wynik = "bdb"
        break
        default:
            wynik="WTF"
    }
    return wynik
}



let score
let arraySurenames = []
let sureNames = arrayList.filter(student =>
    arraySurenames.push(student.nazwisko +" "+ student.punkty.toString() + " - " + whichGrade(student.punkty)
    )
)
console.log(arraySurenames)
let wynikSurenames

let gradeArray =[]
let grades = arrayList.filter(student =>
        gradeArray.push(whichGrade(student.punkty))
)

const result2 = gradeArray.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null));
console.log(result2);

