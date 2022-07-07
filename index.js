const needsLicense=(kind) =>{
  if (kind===car || kind===truck) {
    return true
  }
  else {
    return false
  }
}
const car=true
const bike=false
const results=needsLicense(car)
console.log("1 car", true || false)
console.log("bike", bike)

//2
const chooseVehicle=(option1, option2)=> {
  if(option1<option2){
    return option1 + ' is clearly the better choice.'
  } else {
    return option2 + ' is clearly the better choice.'
  }
}
const Vehicle1=chooseVehicle('Wuling Hongguang', 'Toyota Corolla')
const Vehicle2=chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf')
console.log(Vehicle1)
console.log(Vehicle2)
//3
const calculateResellPrice=(originalPrice, age)=> {
  if(age<3) {
    return 0.8*originalPrice
  }
  if(age>10) {
    return 0.5*originalPrice
  }
  else {age<=3 ||age<10
        return 0.7*originalPrice
       }
}
const ResellPrice=calculateResellPrice(1000, 1)
const ReselllPrice=calculateResellPrice(1000, 5)
const ResellllPrice=calculateResellPrice(1000, 15)

console.log("3", ResellPrice)
console.log("3", ReselllPrice)
console.log("3", ResellllPrice)