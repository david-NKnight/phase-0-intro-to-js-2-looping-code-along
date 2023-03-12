function writeCards(namesArray, eventName) {
    let messages = [];
    for (let i = 0; i < namesArray.length; i++) {
      messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
  }

  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }