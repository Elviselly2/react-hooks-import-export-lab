import { username, city, image } from "../data/user";
console.log(username, city, image);

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
