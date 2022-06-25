const stations = [
  "Museum",
  "St. James",
  "Circular Quay",
  "Wynyard",
  "Townhall",
  "Central",
  "Redfern",
  "Macdonaldtown",
  "Newtown",
]

const travelForm = (stationS, stationE) => {
  let numberOfStops
  const station1 = stationS.split(" ")
  let startStation = station1
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase()
    })
    .join(" ")

  const station2 = stationE.split(" ")
  let endStation = station2
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase()
    })
    .join(" ")

  console.log(startStation)
  if (
    stations.indexOf(startStation) != -1 &&
    stations.indexOf(endStation) != -1 &&
    stations.indexOf(endStation) > stations.indexOf(startStation)
  ) {
    numberOfStops =
      stations.indexOf(endStation) - stations.indexOf(startStation) - 1
    console.log(
      `To go from ${startStation} to ${endStation} - you will need to go though ${numberOfStops} stops`
    )
  } else if (
    stations.indexOf(startStation) != -1 &&
    stations.indexOf(endStation) != -1 &&
    stations.indexOf(endStation) < stations.indexOf(startStation)
  ) {
    numberOfStops =
      stations.indexOf(startStation) - stations.indexOf(endStation) - 1
    console.log(
      `To go from ${startStation} to ${endStation} - you will need to go though ${numberOfStops} stops`
    )
  } else console.log("Please enter valid station")
}
// Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
travelForm("Wynyard", "Museum")
// // // Make this work if you want to go backwards! e.g. 'You want to travel from "Redfern" to "St. James"'
travelForm("Museum", "Wynyard")
// // // If someone passes in a station that doesn't exist, tell them
travelForm("Mugjh", "Wynyard")
// Make it case-insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
travelForm("CirculaR QuAy", "Museum")
// Printout the names of stations in seprate lines
stations.map((station) => {
  console.log(station)
})
