const SimpleBankAccount = {
    owner: "Misky",               
    accountNumber: "ACC123456",   
    balance: 0,                   
    currency: "ETH",              
    isActive: true,               
    creationDate: "2025-07-31",   
    withdrawalLimit: 5,           
    dailyWithdrawn: 0,            
    transactionHistory: [],       
    accountType: "personal",      
    authorizedUsers: ["Misky"],   
    locked: false                 
  };
  

  const {owner : hid, currency: mon, authorizedUsers} = SimpleBankAccount;
  console.log(`${mon}`);