const accountData = {
    deposits: [100, 250, 400, 150],
    withdrawals: [50, 100],
    currencies: ["ETH", "BTC", "USDT"],
    authorizedUsers: ["Misky", "Ali", "Riya"],
    accessLogs: [
      { user: "Misky", time: "2025-07-31T10:00:00Z" },
      { user: "Ali", time: "2025-07-30T18:45:00Z" }
    ]
  };
  


const {accessLogs : depo} = accountData;
console.log(depo[1].time);