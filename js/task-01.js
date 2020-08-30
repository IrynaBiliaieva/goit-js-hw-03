let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

//Write code under this line
user.mood = "happy";
user['"full time"'] = true;
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
  message += key + " : " + user[key] + "\n";
}

// const values = Object.values(user);
// for (const value of values) {
// }
// const entries = Object.entries(user);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }
// message = user.keys : user. values;
console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
