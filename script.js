const boxLocations = {
  ["Common"]: document.getElementById("common-items"),
  ["Uncommon"]: document.getElementById("uncommon-items"),
  ["Rare"]: document.getElementById("rare-items"),
  ["Boss"]: document.getElementById("boss-items"),
  ["Equipment"]: document.getElementById("equipment-items"),
}

const emptyBuild = {
  ["common"]: [],
  ["uncommon"]: [],
  ["rare"]: [],
  ["boss"]: [],
  ["equipment"]: [],
}

const filters = {
  name: "",
  types: []
}

let currentBuild = structuredClone(emptyBuild)
let buildsList = {}

const updateDropdown = () => { // fill in dropdown menu with all saved builds
  $("#build-dropdown").html("")
  for (let build in buildsList) {
    const option = document.createElement("option")
    option.value = build
    option.innerText = build
    $("#build-dropdown").append(option)
  }
}

if (localStorage.getItem("buildsList") != null) { // get buildsList from local storage, or create an empty one if none exists
  buildsList = JSON.parse(localStorage.getItem("buildsList"))
  updateDropdown()
} else {
  localStorage.setItem("buildsList", JSON.stringify({}))
}

const saveBuild = (name) => { // takes name and saves to buildsList and localStorage
  if (buildsList.hasOwnProperty(name)) {
    if (confirm("Overwrite previous build with that name?") == true) {
      buildsList[name] = structuredClone(currentBuild);
      localStorage.setItem("buildsList", JSON.stringify(buildsList))
      updateDropdown()
    }
  } else {
    buildsList[name] = structuredClone(currentBuild);
    localStorage.setItem("buildsList", JSON.stringify(buildsList))
    updateDropdown()
  }
}

const loadBuild = (name) => { // loads build of given name from buildsList
  if (buildsList.hasOwnProperty(name)) {
    currentBuild = structuredClone(buildsList[name])
    updateDisplay()
  } else {
    alert("Something went wrong, no build with that name was found")
  }
}

const deleteBuild = (name) => { // deletes build of given name from buildsList
  if (buildsList.hasOwnProperty(name)) {
    if (confirm(`Are you sure you want to delete ${name}?`) == true) {
      delete buildsList[name]
      localStorage.setItem("buildsList", JSON.stringify(buildsList))
      updateDropdown()
    }
  }
}

const downloadData = () => { // downloads the buildsList as a file
  var blob = new Blob([localStorage.getItem("buildsList")], {
    type: "text/plain"
  });
  var url = window.URL.createObjectURL(blob);
  
  var downloadLink = document.createElement("a");
  downloadLink.download = "RoRR Builds File";
  downloadLink.innerHTML = "Download File";
  downloadLink.href = url;
  downloadLink.onclick = function () {
    document.body.removeChild(event.target);
  };
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}

document.getElementById("file-input-form").reset()
const uploadData = () => { // replaces current buildsList with one from file
  const reader = new FileReader();
  try {
    reader.readAsText($("#file-input").prop("files")[0])
  } catch {
    alert("Please select a valid file first")
  }
  
  reader.onload = function() {
    try {
      const obj = JSON.parse(reader.result)
      const looksGood = Object.values(obj)[0].hasOwnProperty("common")

      if (looksGood) {
        buildsList = obj;
        localStorage.setItem("buildsList", reader.result);
        updateDropdown()
      } else {
        alert("Oops, this looks like the wrong file")
      }
    }
    catch(err) {
      alert(`Oops, this looks like the wrong file: ${err}`)
    }
  };

  reader.onerror = function() {
    alert(reader.error);
  };
}

const doFilter = () => { // Apply filtering, greying-out non-selected items
  const itemBoxes = document.getElementById("item-boxes")
  
  if (filters.name == "" && filters.types.length == 0) { // make all objects unfaded if no filters applied
    for (let i in itemBoxes.querySelectorAll(".item-icon")) {
      const item = itemBoxes.querySelectorAll(".item-icon")[i]
      if (item.classList){
        item.classList.remove("faded")
      }
    }
  } else {
    for (let i in itemBoxes.querySelectorAll(".item-icon")) { // otherwise check each item for the filter condition(s)
      const item = itemBoxes.querySelectorAll(".item-icon")[i]
      
      let filterAllow = false
      
      if (filters.name && item.id.toLowerCase().includes(filters.name.toLowerCase())) { // check name match
        filterAllow = true
      } else {
        for (let i in filters.types) {
          if (item.classList && item.classList.contains(filters.types[i])) { // check category match
            filterAllow = true
          }
        }
      }
      
      if (filterAllow) {
        item.classList.remove("faded")
      } else {
        if (item.classList){
          item.classList.add("faded")
        }
      }
    }
  }
}

$("#clear-button").on("click", () => {
  if (confirm("Really remove all items from your current build?")) {
    currentBuild = structuredClone(emptyBuild) 
    updateDisplay()
  }
})

$("#name-input").val("")

$("#save-button").on("click", () => {
  if ($("#name-input").val() != "") {
    saveBuild($("#name-input").val())
  } else {
    alert("Enter a name for the build")
  }
})


$("#load-button").on("click", () => {
  if ($("#build-dropdown").val()) {
    loadBuild($("#build-dropdown").val())
  } else {
    alert("Error, no build selected")
  }
})

$("#delete-button").on("click", () => {
  if ($("#build-dropdown").val()) {
    deleteBuild($("#build-dropdown").val())
  }
})

$("#more-options-button").on("click", () => {
  $("#more-options-pane").css("visibility", ($("#more-options-pane").css("visibility") === "visible") ? "hidden" : "visible")
})

$("#download-button").on("click", () => {
  downloadData()
})

$("#upload-button").on("click", () => {
  uploadData()
})

$("#info-button").on("click", () => {
  $("#info-pane").css("visibility", $("#info-pane").css("visibility") == "visible" ? "hidden" : "visible")
})

$("#close-info-button").on("click", () => {
  $("#info-pane").css("visibility", "hidden")
})



const updateFilterType = (name, bool) => {
  if (bool) {
    filters.types.push(name)
    doFilter()
  } else {
    filters.types = filters.types.filter((e) => e !== name)
    doFilter()
  }
}

$("#damage-checkbox").on("click", () => {
  updateFilterType("Damage", event.target.checked)
})

$("#healing-checkbox").on("click", () => {
  updateFilterType("Healing", event.target.checked)
})

$("#utility-checkbox").on("click", () => {
  updateFilterType("Utility", event.target.checked)
})

$("#search-input").on("input", () => {
  filters.name = event.target.value
  doFilter()
})

const clearFilters = () => {
  $("#damage-checkbox").prop("checked", false);
  $("#healing-checkbox").prop("checked", false);
  $("#utility-checkbox").prop("checked", false);
  $("#search-input").val("");
  
  filters.name = "";
  filters.types = [];
  doFilter()
}

document.getElementById("clear-filters").addEventListener("click", () => {
  clearFilters()
})


const parseFullUrl = (url) => {
  return `https://raw.githubusercontent.com/Wwilli04/RorrBuild/main/${url}`
}

const getWikiUrl = (name) => {
  const noSpace = name.split(" ").join("_")
  return `https://riskofrainreturns.wiki.gg/wiki/${noSpace}`
}


for (let key in items) { // fill in the main item grid
  const thisItem = items[key]
  
  const icon = document.createElement("div") // create item-icon element
  icon.classList.add("item-icon")
  for (let i in thisItem.Category){
    icon.classList.add(thisItem.Category[i])
  }
  icon.id = (key)
  
  const img = document.createElement("img") // get the png and add it to the icon
  img.src = parseFullUrl(thisItem.Icon)
  img.classList.add("item-img")
  img.addEventListener("click", () => {
    addToBuild(key)
    updateDisplay()
  })
  icon.appendChild(img)
  
  const toolTip = document.createElement("span") // get the tooltip, add a wiki link, and add the tip to the icon
  const tipWithWikiLink = thisItem.Desc.concat(`<a href="${getWikiUrl(key)}" style="text-decoration:none" target="_blank"> <i class="fa fa-info-circle" style="color:grey;"></i> </a>`)
  const fullText = `<b>${key}:</b><br/>` + tipWithWikiLink
  toolTip.classList.add("tooltip")
  toolTip.innerHTML = fullText
  if (thisItem.Rarity == "Common") {
    toolTip.style.left = "0px"
  } else if (thisItem.Rarity == "Equipment") {
    toolTip.style.right = "0px"
  } else {
    toolTip.style.left = "-60px"
  }
  icon.appendChild(toolTip)
  
  boxLocations[thisItem.Rarity].appendChild(icon)
}
clearFilters() // make sure no filters continue on page reload

const addToBuild = (itemName) => { // takes item name and adds one copy to the current build in the correct rarity section
  const rarity = items[itemName].Rarity.toLowerCase()
  if (currentBuild[rarity].length && currentBuild[rarity][currentBuild[rarity].length -1][0] === itemName) {
    currentBuild[rarity][currentBuild[rarity].length -1][1] += 1
  } else {
    currentBuild[rarity].push([itemName, 1]) 
  }
}

const removeFromBuild = (rarity, index) => { // takes rarity and index of an item and removes it from currentBuild
  if (currentBuild[rarity][index][1] == 1) {
    currentBuild[rarity].splice(index, 1)
  } else {
    currentBuild[rarity][index][1] --
  }
}

const updateDisplay = () => { // updates all the icons in the build rarity containers 
  for (let rarity in currentBuild) {
    const box = document.getElementById(`build-${rarity}`)
    box.innerHTML = ""
    
    if (currentBuild[rarity].length > 15 ) { // make the build boxes taller if needed for lots of items.
      // This doesn't work properly with the narrow boss items box shown on phones, but it's only a problem if you have more than 6 boss items in your build, which is pretty unlikely
      
      if (screen.width > 800) { // large screens
        box.style.height = `${3.5 * (Math.ceil(currentBuild[rarity].length / 5))}vw` 
        document.getElementById("build-boxes").style.height = `${3.5 * (Math.ceil(currentBuild[rarity].length / 5))}vw`
      } else { // phones
        box.style.height = `${28 * (Math.ceil(currentBuild[rarity].length / 5))}px`
        document.getElementById("build-boxes").style.height = `${28 * (Math.ceil(currentBuild[rarity].length / 5))}px`
      }
      
    }
    
    for (let item of currentBuild[rarity]) {
      const icon = document.createElement("div") // create item-icon element
      icon.classList.add("item-icon")
      const index = currentBuild[rarity].indexOf(item)
      icon.addEventListener("click", () => {
        removeFromBuild(rarity, index)
        updateDisplay()
      })

      const img = document.createElement("img") // get the png and add it to the icon
      img.src = parseFullUrl(items[item[0]].Icon)
      img.classList.add("item-img")
      icon.appendChild(img)
      
      if (item[1] > 1) {
        const stackNumber = document.createElement("div")
        stackNumber.innerText = `${item[1]}`
        stackNumber.classList.add("stack-number")
        icon.appendChild(stackNumber)
      }
      
      box.appendChild(icon)
    }
  }
  calculateStats() // is this the best place? !!!
}

const calculateStats = () => { // calculate crit rate and dodge chance
  const stats = {
    critRate: 0.01,
    dodgeChance: 0
  }

  let allItems = {}
  
  for (let category in currentBuild) {
    if (currentBuild[category].length) {
      
      currentBuild[category].forEach((itemArr) => {
        if (Object.hasOwn(allItems, (itemArr[0]))) {
          allItems[itemArr[0]] += itemArr[1]
        } else {
          allItems[itemArr[0]] = itemArr[1]
        }
      }) 
    }
  }

  // -- crit rate --
  stats.critRate = 0.01
  for (let item in allItems) {
    switch (item) {
      case "Lens Maker's Glasses":
        stats.critRate += (0.07 * allItems[item]) + 0.03
        break
      case "Razor Penny":
        stats.critRate += (0.03 * allItems[item])
        break
      case "Harvester's Scythe":
        stats.critRate += 0.05
        break
      case "Predatory Instincts":
        stats.critRate += 0.05
        break
      case "Wicked Ring":
        stats.critRate += (0.1 * allItems[item]) - 0.05
        break
    }
  }

  // -- dodge chance --
  stats.dodgeChance = 0
  for (let item in allItems) {
    switch (item) {
      case "Hermit's Scarf":
        stats.dodgeChance = (0.1 * allItems[item]) / (0.1 * allItems[item] + 1)
        break
    }
  }

  // -- Print to screen --
  let statsText = ""
  if (stats.critRate > 0.01) {statsText += stats.critRate <= 1 ? `Crit Rate: ${Math.round(stats.critRate * 100)}%` : "Crit Rate: >100%"}
  if (stats.critRate > 0.01 && stats.dodgeChance > 0) {statsText += `  `}
  if (stats.dodgeChance > 0) {statsText += `Dodge Chance: ${Math.round(stats.dodgeChance * 100)}%`}
  document.getElementById('stats-div').innerText = statsText
}