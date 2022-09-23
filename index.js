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

const userNameIotPair = () => {
for (const uName1 in iotPair) {
  for (const uName2 in iotPair) {
  const nameArr1 = uName1.split(' ');
  const nameArr2 = uName2.split(' ');
  if (uName1 !== uName2 && nameArr1[0] === nameArr2[0]) {
    const sentence = `${nameArr1[0]} uses ${iotPair[uName1].length + iotPair[uName2].length} IoT devices.`
    console.log(sentence)
      } 
    }
  }
}

userNameIotPair();

