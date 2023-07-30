for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names=[], eventName)
{
    const hold=[];
    for (let i=0; i<names.length; i++)
    {
        hold[i]= "Thank you, " + names[i] + ", for the wonderful " + eventName + " gift!";
    }
    return hold;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num)
{
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
        console.log("Please provide a positive integer as input.");
        return;
}

for (let i = num; i >= 0; i--) 
{
    console.log(i);
}
}
countDown(10);