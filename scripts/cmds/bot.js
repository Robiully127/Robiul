module.exports = {
config: {
name: "bot",
version: "1.0",
author: "ARYAN",
role: 0,
category: "fun",
guide: {

vi: "FUN",
en: "FUN"

		} 

	},
onStart: async function ({ api, event }) {
const data = ["বার বার আমাকে ডাকস কেন 🤬","উম্মাহ জান তুমার ওইখানে উম্মাহ 😉","আমাকে এতো না ডেকে বস রবিউল কে একটা gf দে😎","বেশি বট বট করলে লিভ নিবো কিন্তু😾","তোর কি কোনো কাজ নেই সব সময় বট বট করিস🫤"],
return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);

	}

};
