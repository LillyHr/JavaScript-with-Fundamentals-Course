function phoneShop(arr) {
    let phones = arr.shift().split(", ");
    
    for (let i = 0; i < arr.length; i++) {
      let curCommand = arr[i].split(" - ");
      let command = curCommand[0];
      let phone = curCommand[1];
      
      switch (command) {
        case "Add":
        if(!phones.includes(phone)) {
          phones.push(phone);
        }
        break;
        case "Remove":
        if (phones.includes(phone)) {
          let index = phones.indexOf(phone);
          phones.splice(index,1);
        }
        break;
        case "Bonus phone":
        phone = phone.split(":");
        let oldPhone = phone[0];
        let newPhone = phone[1];
        
        if(phones.includes(oldPhone)) {
          let indexIf = phones.indexOf(oldPhone);
          phones.splice(indexIf+1, 0, newPhone);
        }
        break;
        case"Last":
        if (phones.includes(phone)) {
          let ind = phones.indexOf(phone);
          let phoneLast = phones.splice(ind,1);
          phones.push(phoneLast);
        }
        break;
      }
    }
    console.log(phones.join(", "));
  }
