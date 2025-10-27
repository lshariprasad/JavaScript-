const user1 = {
  name: "Vasavi",
  address: {
    State: "Andhra Pradesh",
  },
};

console.log(user1);
console.log(user1.address);
console.log(user1.address.State);

const user = {
  name: "Vasavi",
  address: {
    State: "Andhra Pradesh",
  },
};

//Option - 1
console.log(user.address ? user.address.city : undefined);

//Option - 2
console.log(user.address && user.address.city);

//Option - 3
console.log(user.address?.city);

//Option - 4
let key = "city";
console.log(user.address?.[key]);

const user_details = {
  userId: "192413023",
  account: {
    accountNumber: "18122006",
    holder: {
      profile: {
        firstName: "Deva",
        lastName: "Krishna",
        birthDate: "2006-10-14",
      },
    },
    contact: {
      address: {
        city: "Chennai",
        state: "Tamil Nadu",
        country: "India",
      },
      phone: [
        {
          type: "Home",
          phonenumber: "9962466372",
        },
        {
          type: "Office",
          phonenumber: "9962466372",
        },
      ],
    },
  },
};

console.log(user_details);
console.log(user_details.account.holder.profile.birthDate);
console.log(
  user_details.account &&
    user_details.account.holder &&
    user_details.account.holder.profile.birthDate
);
console.log(user_details.account?.holder.profile?.birthDate);

user_details.name = "Deva";
console.log(user_details);
