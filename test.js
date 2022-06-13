let apiString = "";
for (i = 1; i <= 149; i++) {
	apiString += i + ",";
}
let finalApiString =
	"https://rickandmortyapi.com/api/character/" + apiString.slice(0, -1);
console.log(finalApiString);
