import { ChangeEvent } from "react";

interface Props<T extends string | number> {
  value: T;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function Input<T extends string | number>(props: Props<T>): JSX.Element {
  return (
    <input
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
