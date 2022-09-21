import users from '../data/users.json' assert {type:'json'};
import mobile from '../data/mobile_devices.json' assert {type:'json'};
import iot from '../data/iot_devices.json' assert {type:'json'};


//let count = 0;

// for (let i = 0; i < userId.length; i++) {
//   for (let j = 0; j < mobileId[i].length; j++) {
//     if (userId[i] === mobileIdUser[j]) {
//       for (let k = 0; k < iotId[i].length; k++) {
      //  count = count + 1; 
//       }
//     }
    
//   }
  
// }

//let userId = users[0].id
let mobileName = mobile.map(mobile => mobile.name);



// for (let j =  0; j < mobileId.length; j++) {
//   if (userId === mobileIdUser[j]){
//      for (let k = 0; k < iot.length; k++) {
//       console.log(k)
//       // if (iotId[k] === mobileId[k]) {
//       //    let count =+ 1;
//       //   console.log(count) }
//       }
//      }
//   };

 //for (let j =  0; j < mobile.length; j++){
  // for (let k = 0; k < iotId.length; k++){
  //     console.log(mobileId[k])
    
  
    // if (userId === mobileIdUser[j]){

    //   console.log(count);
    //     count =+ 1;
    //     console.log(count)
      // if (iotId[k] === mobileId[k]) {
      //    let count =+ 1;
      //   console.log(count) }
  
// mobile + iot loop

// let a = []
// for (let j = 0; j < mobileId.length; j++) {
//   //.log(mobileId[j]);}
// }
// for (let k = 0; k < iotId.length; k++) {
//     // if (mobileId[j] === iotId[k]) {
//     //  count = count + 1;
//     console.log(iotId[k]);}



// //iot loop




// const firstUserMobile = []
// mobileUserId.map(x => x === firstUserId ? firstUserMobile.push(mobile.id) : 'O')
// console.log(firstUserMobile);
// const firstUserIot = [];

// const newArr = mobileUserId.filter((element) => element === userId.map(element => element.id))

// console.log(newArr);

// let count = [];

// console.log(count);



// for (let i = 0; i < mobileUserId.length; i++) {
//   if (firstUserId === mobileUserId[i]) {
//     count++
//   }
// }


//   for (let i = 0; i < mobileId.length; i++) {
//     for (let j = 0; j < iotMobileId.length; j++) {
//       if (mobileId[i] === iotMobileId[j]) {
//         count.push(i);
//       }
//     }
//   }

// for (let i = 0; i < userId.length; i++) {
//   for (let j = 0; j < mobileUserId.length; j++) {
// }
// }

// console.log(count);


// let userId = users.map(user => user.id);
// console.log(userId);
// let mobileUserId = mobile.map(mobile => mobile.user);
// console.log(mobileUserId);
// let mobileId = mobile.map(mobile => mobile.id);
// console.log(mobileId);
// let iotMobileId = iot.map(iot => iot.mobile);
// console.log(iotMobileId);


// let firstUserId = users[0].id;
// let firstUserDevice = [];
// console.log(firstUserDevice);

// for (let i = 0; i < mobileUserId.length; i++) {
//   if (firstUserId === mobileUserId[i]) {
//  firstUserDevice.push(mobileUserId[i]);
//   }
// }

// console.log(firstUserDevice);

console.log(users);
console.log(mobile);
console.log(iot);


// creating an object that contains users id paired with their devices id
let obj = {}
for (let i = 0; i < users.length; i++) {
  obj[users[i].id] = [];
  for (let j = 0; j < mobile.length; j++) {
    if (users[i].id === mobile[j].user) {
      obj[users[i].id].push(mobile[j].id);
  }; }
}

//console.log(obj);

const obj2 = {};
for (const user in obj) {
 // console.log(obj[user]);
  for (let i = 0; i < obj[user].length; i++) {
    //console.log(obj[user][i]);
    for (let j = 0; j < iot.length; j++) {
      if (obj[user][i] === iot[j].mobile) {
        obj[user].push(iot[j]);
        }
      }
    }
  }
console.log(obj);