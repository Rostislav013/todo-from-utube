import React, { useState, SyntheticEvent } from "react";

function useInputValue(defaultValue: string = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: (event: any) => setValue(event.target.value), // note sure here anout "any"
    },
    clear: () => setValue(""),
    value: () => value,
  };
}
interface Props {
  onCreate: (title: string) => void;
}
function AddTodo(props: Props) {
  const { onCreate } = props;
  const input = useInputValue("");

  function submitHandler(event: SyntheticEvent) {
    event.preventDefault(); // not reload page again

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
