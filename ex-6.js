// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
async function getProfile() {
  try {
    const onSuccess = await getJohnProfile();
    console.log(onSuccess);
  } catch (error) {
    console.log(error);
  }
}
async function getOrder() {
  try {
    const onSuccess = await getJohnOrders();
    console.log(onSuccess);
  } catch (error) {
    console.log(error);
  }
}
getProfile()
getOrder()


