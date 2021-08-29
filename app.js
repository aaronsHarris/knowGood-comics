// const DOMAIN = "https://app.ticketmaster.com/discovery/v2/"
// const apiKey = "apikey=McHHlW14GgvchUam7XP8frZipsqMiCMm"
// // const BASE_URL = `${DOMAIN}venues.json?${apiKey}`
// const attractions = "attractions.json?"
// const venues = "venues.json?"

// //input and search button
// const searchBtn = document.querySelector("#search-btn")
// const input = document.querySelector("input")
// const searchSection = document.querySelector(".search-section")

// searchBtn.addEventListener("click", (e) => {
//   e.preventDefault()
//   let search = input.value
//   fetchData(search)

// })


// // GET DATA FROM TICKET MASTER
// async function fetchData(shows) {
//   try {
//     let res = await axios.get(`${DOMAIN}${attractions}${apiKey}`)
//     let attractionsArr = res.data
//     console.log(attractionsArr)
//     // showArtistName(attractionsArr)
//   } catch (error) {
//     console.log("error")
//   }
// }





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