import users from '../data/users.json' assert {type:'json'};
import mobile from '../data/mobile_devices.json' assert {type:'json'};
import iot from '../data/iot_devices.json' assert {type:'json'};


// creating an object that contains users id paired with their devices id
const userDevicePaired = {}


const  createUserDevicePair = () => {
for (let i = 0; i < users.length; i++) {
  userDevicePaired[users[i].id] = [];
  for (let j = 0; j < mobile.length; j++) {
    if (users[i].id === mobile[j].user) {
      userDevicePaired[users[i].id].push(mobile[j].id);
      }; 
    };
  };
};
createUserDevicePair();

//creating an object that contains users id paired with their iot id
const iotPair = {};

const createUserIotPair = () => {
for (const user in userDevicePaired) {
  iotPair[user] = []
    for (let i = 0; i < iot.length; i++) {
      userDevicePaired[user].forEach(element => element === iot[i].mobile ? iotPair[user].push(iot[i].id) : undefined);
    }
  }
};  
createUserIotPair();

//replacing user id with user name
const  userIdToUserName = () => {
for (const user in iotPair) {
  for (let i = 0; i < users.length; i++) {
    users[i].id === user ? iotPair[users[i].name] = iotPair[user] : undefined;
    };
  delete iotPair[user]; 
  };
};

userIdToUserName();

//creating an object that contains merged arrays of same named users 
const userIotPair = {};

const userNameIotPair = () => {
for (const uName in iotPair) {
  const nameArr = uName.split(' ');
  nameArr[0] === uName.split(' ')[0] ? userIotPair[nameArr[0]] = iotPair[uName]  : undefined;
  }
}

userNameIotPair();

console.log(userIotPair);

//I am missing a step where I take the value from users with the same name but a different id and add the iot id to the key with user name. Then output the length of that array. 
