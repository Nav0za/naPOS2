export const products = () => {
  const products = ref([
    {
      id: 1,
      name: "Hot",
      items: [
        {
          id: 1,
          name: "Hot americano",
          price: 50,
        },
        {
          id: 2,
          name: "Hot latte",
          price: 50,
        },
        {
          id: 3,
          name: "Hot cappucino",
          price: 50,
        },
        {
          id: 4,
          name: "Hot mocha",
          price: 50,
        },
      ],
    },
    {
      id: 2,
      name: "Iced",
      items: [
        {
          id: 1,
          name: "Iced americano",
          price: 60,
        },
        {
          id: 2,
          name: "Iced latte",
          price: 60,
        },
        {
          id: 3,
          name: "Iced cappucino",
          price: 60,
        },
        {
          id: 4,
          name: "Iced mocha",
          price: 60,
        },
      ],
    },
    {
      id: 3,
      name: "Frappe",
      items: [
        {
          id: 1,
          name: "Coffee frappe",
          price: 70,
        },
        {
          id: 2,
          name: "Mocha frappe",
          price: 70,
        },
        {
          id: 3,
          name: "Thai tea frappe",
          price: 70,
        },
        {
          id: 4,
          name: "Green tea frappe",
          price: 70,
        },
      ],
    },
    {
      id: 4,
      name: "Smoothie",
      items: [
        {
          id: 1,
          name: "Strawberry smoothie yoghurt",
          price: 80,
        },
        {
          id: 2,
          name: "Lime smoothie",
          price: 80,
        },
        {
          id: 3,
          name: "Watermelon smoothie",
          price: 80,
        },
        {
          id: 4,
          name: "Mango smoothie",
          price: 80,
        },
      ],
    },
  ]);
  return products;
};
