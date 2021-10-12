const initialState = JSON.parse(localStorage.getItem("react-cart")) || {
  headerdata: {
    title: "React shopping cart",
    desc:
      "Below you find a react shopping cart which persists its data to the LocalStorage. Refactor it using Redux!"
  },
  data: [
    {
      id: 0,
      name: "JavaScript: The Definitive Guide, 6th Edition",
      release: "September 2010",
      amount: 0,
      price: "2.99"
    },
    {
      id: 1,
      name: "Ruby on Rails: Up and Running",
      release: "March 2007",
      amount: 0,
      price: "30.99"
    },
    {
      id: 2,
      name: "MongoDB: The Definitive Guide",
      release: "January 2019",
      amount: 0,
      price: "99.99"
    },
    {
      id: 3,
      name: "Linux Cookbook",
      release: "February 2009",
      amount: 0,
      price: "24.99"
    },
    {
      id: 4,
      name: "Eloquent Javascript 3rd Edition",
      release: "October 2018",
      amount: 0,
      price: "24.99"
    }
  ],
  total: 0,
  form: {}
};

export default (state = initialState, { type, input, index, item }) => {
  switch (type) {
    case "GETVALUES":
      const value = input.type === "checkbox" ? input.checked : input.value;
      console.log("GETVALUES", input.id, value);
      const form = { ...state.form, [input.id]: value };
      localStorage.setItem("react-cart", JSON.stringify({ ...state, form }));
      return { ...state, form };

    case "UPDATE":
      console.log("UPDATE", index);
      const data = [...state.data];

      if (index === "like") {
        data[item.id].liked = !data[item.id].liked;
      } else if (index) {
        data[item.id].amount++;
      } else if (data[item.id].amount > 0) {
        data[item.id].amount--;
      }
      data[item.id] = item;

      const total = state.data
        .map(item => item.price * item.amount)
        .reduce((a, b) => a + b, 0);
      localStorage.setItem(
        "react-cart",
        JSON.stringify({ ...state, total, data })
      );
      return { ...state, total, data };

    case "DELETE":
      console.log("Good Bye localStorage");
      localStorage.removeItem("react-cart");
      return;

    default:
      return state;
  }
};
