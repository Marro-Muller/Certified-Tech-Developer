import WeatherEmoji from "weather-emoji";
const weatherEmoji = new WeatherEmoji(secretApiKey);

const emojiParis = weatherEmoji.getWeather("paris", true).then(data => data);

console.log(emojiParis.emoji); // return emoji
