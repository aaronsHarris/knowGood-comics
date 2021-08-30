const DOMAIN = "https://comicvine.gamespot.com/api/"
const apiKey = "/?api_key=23e5b584f227a60bcffe650e03c61c3e09644d7e"
const CHAR_URL = `${DOMAIN}characters${apiKey}`
const PUBL_URL = `${DOMAIN}publisher${apiKey}`
const VOL_URL = `${DOMAIN}volumes${apiKey}`
const ISS_URL = `${DOMAIN}issues${apiKey}`



//input and search button
const searchBtn = document.querySelector("#search-btn")
const input = document.querySelector("input")
const searchSection = document.querySelector(".search-section")

searchBtn.addEventListener("click", (e) => {
  e.preventDefault()
  let search = input.value
  fetchData(search)

})


// GET DATA FROM TICKET MASTER
async function fetchData() {
  try {
    let res = await axios.get(`${CHAR_URL}`)
    console.log(res.results)
  } catch (error) {
    console.log("error")
  }
}





// for (const key of Object.keys(attractionsArr)) {
//   console.log(`${key}${attractionsArr[key]}`)
// }

// function showArtistName(attrations) {
//   for (i = 0; i < attractionsArr.length; i++) {
//     console.log(attractionsArr[i].name)
//   }
// }
// function showArtistName(attractions) {
//   attractions.forEach((artit) => {
//     console.log(aatractionsArr)

//   })
// }
//APPEND ARTIST NAME
//APPEND ARTIST IMAGE
//APPEND VENUE LOCATION
//APPEND DATES AND TIMES
//
//CREATE LOOP TO SHOW ALL RESULTS