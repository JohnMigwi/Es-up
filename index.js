const userProfiles = {
    admin: {
      name: "Misky",
      role: "Super Admin",
      credentials: {
        username: "misky.eth",
        email: "misky@web3.com"
      },
      accessRights: ["read", "write", "delete"]
    },
    moderators: [
      {
        name: "Ali",
        credentials: {
          username: "ali123",
          email: "ali@web3.com"
        },
        accessRights: ["read", "write"]
      },
      {
        name: "Riya",
        credentials: {
          username: "riyaMod",
          email: "riya@web3.com"
        },
        accessRights: ["read"]
      }
    ]
  };
  //Second moderator's name and first access right

  //First moderator's email and access rights.
const {moderators: [mod1, mod2]} = userProfiles;
const {accessRights: rights} = mod1;
const {secondName: secname} = mod2;
console.log(secname);

const {credentials: cred} = mod1;
const {username: name} = cred;

console.log(`${rights} ${name}
  second name ${secname} 
  `);



//Admin's username and role.
const {admin : admin} = userProfiles;
const {name:sname, role:role} = admin;

console.log(`${sname} ${role}`);

