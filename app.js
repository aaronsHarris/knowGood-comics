const url = 'https://superheroapi.com/api/10222338859491993/search/'
const corsAnywhere = "https://afternoon-plains-69524.herokuapp.com/"


const input = document.querySelector("input")
const searchSection = document.querySelector(".search-section")


//main card div
const mainContainerDiv = document.querySelector(".main-container")


input.addEventListener("keyup", (e) => {
  e.preventDefault()
  let typeInput = input.value
  fetchData(typeInput)
  console.log(typeInput)

})


async function fetchData(typeInput) {
  try {

    let res = await axios.get(`${corsAnywhere}${url}${typeInput}`)
    let charArr = res.data.results
    removeOldContent()
    charArr.forEach((Obj) => {
      console.log(Obj)
      showCharacter(Obj)
    })
  } catch (error) {
    console.log("error")
  }
}
function removeOldContent() {
  mainContainerDiv.innerHTML = "";

}

function removeOldHero() {
  heroNameContainer.innerText = ""
  heroBioContainer.innerText = ""
  //heroContainer.innerHTML = ""
  heroImageContainer.innerText = ""
}
//hero image section
const heroImageContainer = document.querySelector(".hero-image")
const heroNameContainer = document.querySelector(".hero-name")
const heroBioContainer = document.querySelector(".heroBioContainer")
const cardImagecontainer = document.querySelector(".card-image-container")
const heroContainer = document.querySelector(".hero-container")
// heroContainer.append(heroImageContainer)
// heroContainer.append(heroNameContainer)
// heroContainer.append(heroBioContainer)
//heroContainer.append(heroImageContainer)
//hero bio section

function showCharacter(object) {
  //creating cards // appending it to card class
  const cardDiv = document.createElement("div")
  cardDiv.classList.add("card")
  //appending cardDiv to Maincontainer
  mainContainerDiv.append(cardDiv)
  const h2 = document.createElement("h2")
  h2.innerText = object.name
  cardDiv.append(h2)

  const img = document.createElement("img")
  img.classList.add("card-img-container")
  img.src = `${object.image.url}`
  cardDiv.append(img)

  cardDiv.addEventListener("click", (e) => {
    //heroContainer.innerHTML = ""
    //create heroName // add class
    removeOldHero()
    const heroName = document.createElement("div")
    heroName.classList.add("hero-name")
    //append  it 
    heroNameContainer.append(heroName)
    const nameH2 = document.createElement("h2")
    nameH2.innerText = object.name
    heroName.append(nameH2)
    //hero picutre
    const heroPic = document.createElement("img")
    heroPic.classList.add("hero-image")
    heroPic.src = `${object.image.url}`
    heroImageContainer.append(heroPic)
    //powerStats


    //hero biography
    const heroBio = document.createElement("div")
    heroBio.classList.add("hero-biography")
    heroBioContainer.append(heroBio)
    //full name

    let realFullName = "object.biography.full-name"
    const fullName = document.createElement("h2")
    fullName.innerText = `${object.biography["full-name"]}`
    heroBioContainer.append(fullName)
    //alignment
    const alignment = document.createElement("p")
    alignment.innerText = `Alignment: ${object.biography.alignment}`
    heroBioContainer.append(alignment)
    //first appearance
    const firstAppear = document.createElement("P")
    firstAppear.innerText = `Fist Appearance: ${object.biography['first-appearance']}`
    heroBioContainer.append(firstAppear)
    console.log(object.biography.appearance)
    //publisher

    //connections 
    const connections = document.createElement("p")
    connections.innerText = `Connections: ${object.connections["group-affiliation"]}`
    heroBioContainer.append(connections)
    const publisher = document.createElement("p")
    publisher.innerText = `Publisher: ${object.biography.publisher}`
    heroBioContainer.append(publisher)

    const powerStats = document.createElement("div")
    powerStats.classList.add("power-stats")
    heroBioContainer.append(powerStats)
    //combat
    const combat = document.createElement("h3")
    combat.innerText = `Combat: ${object.powerstats.combat}`
    powerStats.append(combat)
    //durability
    const durability = document.createElement("h3")
    durability.innerText = `Durability: ${object.powerstats.durability}`
    powerStats.append(durability)
    //intellegence
    const intelligence = document.createElement("h3")
    intelligence.innerText = `intillegence: ${object.powerstats.intelligence}`
    powerStats.append(intelligence)
    //power
    const power = document.createElement("h3")
    power.innerText = `power: ${object.powerstats.intelligence}`
    powerStats.append(power)
    //speed
    const speed = document.createElement("h3")
    StereoPannerNode.innerText = `Sped: ${object.powerstats.speeed}`
    powerStats.append(speed)
    //strength
    const strength = document.createElement("h3")
    strength.innerText = `Strength: ${object.powerstats.strength}`
    powerStats.append(strength)

  })
}

