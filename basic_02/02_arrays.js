// to merge two or more arrays use concat


const marvel_heros = ["thor", "wanda", "Ironman", "spiderman"]
const dc_heros = ["superman", "falsh", "batman"]

// marvel_heros.push(dc_heros)   //this is not the correct way to merge two arrays\

const all_heros = marvel_heros.concat(dc_heros);   //it is used to merge two arrays
// console.log(all_heros);

//here we have more good ways to merge the array
//using the spread method

const allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros);



//multidimensional array here we are a array inside a array which already inside another aaray

const another_array = [1, 2, 3, [8, 5, 2, 4], 5, 9, 7, [4, 5, [2, 6, 3]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


console.log(Array.from("Harshal")); //convert it into array  like ['h', 'a'...]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  // creats a array
