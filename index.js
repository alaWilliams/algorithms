import users from '../data/users.json' assert {type:'json'};
import mobile from '../data/mobile_devices.json' assert {type:'json'};
import iot from '../data/iot_devices.json' assert {type:'json'};

console.log(users);
console.log(mobile);
console.log(iot);


// creating an object that contains users id paired with their devices id
let userDevicePaired = {}
for (let i = 0; i < users.length; i++) {
  userDevicePaired[users[i].id] = [];
  for (let j = 0; j < mobile.length; j++) {
    if (users[i].id === mobile[j].user) {
      userDevicePaired[users[i].id].push(mobile[j].id);
  }; }
}

//creating an object that contains users id paired with their iot id
const obj2 = {};
for (const user in userDevicePaired) {
  obj2[user] = []
    for (let i = 0; i < iot.length; i++) {
      userDevicePaired[user].forEach(element => element === iot[i].mobile ? obj2[user].push(iot[i].id) : undefined);
      }
    }
  

//replacing user id with user name
for (const user in obj2) {
  for (let i = 0; i < users.length; i++) {
    users[i].id === user ? obj2[users[i].name] = obj2[user] : undefined;
  }
  delete obj2[user]; 
}


console.log(obj2)

//creating an object 
const obj3 = {};

for (const uName in obj2) {
  const nameArr = uName.split(' ');
  for (let i = 0; i < users.length; i++) {
   // nameArr[0] === uName[i].split(' ')[0] ? obj3[nameArr[0]] = obj2[user[j]] : undefined;
  }
}
//missing steps: second loop so when the condition is met I add the value to obj3; count the length of the array to return the total number of iot assigned to users 
