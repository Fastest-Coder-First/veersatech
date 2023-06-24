export const FormBuilder = {
  AddTransaction: [
    {
      type: "number",
      name: "amount",
      label: "Amount",
      placeholder: "Enter Amount",
      required: true,
    },
    {
      type: "select",
      name: "type",
      label: "Type",
      placeholder: "Enter Type",
      required: true,
      options: [
        { value: 0, label: "Income" },
        { value: 1, label: "Expense" },
      ],
    },
    {
      type: "select",
      name: "category",
      label: "Category",
      placeholder: "Enter Category",
      required: true,
    },
    {
      type: "text",
      name: "description",
      label: "Description",
      placeholder: "Enter Description",
      required: true,
    },
    {
      type: "date",
      name: "date",
      label: "Date",
      placeholder: "Enter Date",
      required: true,
    },
  ],
  // create a new key for categories
  AddCategory: [
    {
      type: "text",
      name: "name",
      label: "Name",
      placeholder: "Enter Name",
      required: true,
    },
    {
      type: "text",
      name: "description",
      label: "Description",
      placeholder: "Enter Description",
      required: true,
    },
    {
      type: "radio",
      name: "isParent",
      label: "Is Parent",
      required: true,
    },
    {
      type: "select",
      name: "categoryId",
      label: "Category",
      required: true,
    },
  ],
};
