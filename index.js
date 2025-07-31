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
  


const { accessLogs: logs} = accountData;

const [firstlog, secondlog] = logs;

const {user: user, time:time} = firstlog;
const {user: user2, time:time2} = secondlog;

console.log(user2);