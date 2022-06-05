import React, { memo } from "react";
import type { NextPage } from "next";
import { GroceryList } from "@prisma/client";

interface CardProps {
  children: React.ReactNode;
}

export const Card: NextPage<CardProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-100">
      {children}
    </div>
  );
};

export const CardContent: NextPage<CardProps> = ({ children }) => {
  return (
    <div className="bg-white w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 rounded-lg drop-shadow-md">
      {children}
    </div>
  );
};

interface CardHeaderProps {
  title: string;
  listLength: number;
  clearAllFn?: () => void;
}

export const CardHeader: NextPage<CardHeaderProps> = ({
  title,
  listLength,
  clearAllFn,
}) => {
  return (
    <div className="flex flex-row items-center justify-between p-3 border-b border-slate-200">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-base font-medium tracking-wide text-gray-900 mr-2">
          {title}
        </h1>
        <span className="h-5 w-5 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full text-xs">
          {listLength}
        </span>
      </div>
      <button
        className="text-sm font-medium text-gray-600 underline"
        type="button"
        onClick={clearAllFn}
      >
        Clear all
      </button>
    </div>
  );
};

export const List: NextPage<CardProps> = ({ children }) => {
  return <div className="overflow-y-auto h-72">{children}</div>;
};

interface ListItemProps {
  item: GroceryList;
  onUpdate?: (item: GroceryList) => void;
}

const ListItemComponent: NextPage<ListItemProps> = ({ item, onUpdate }) => {
  return (
    <div className="h-12 border-b flex items-center justify-start px-3">
      <input
        type="checkbox"
        className="w-4 h-4 border-gray-300 rounded mr-4"
        defaultChecked={item.checked as boolean}
        onChange={() => onUpdate?.(item)}
      />
      <h2 className="text-gray-600 tracking-wide text-sm">{item.title}</h2>
    </div>
  );
};

export const ListItem = memo(ListItemComponent);

interface CardFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submit: () => void;
}

export const CardForm: NextPage<CardFormProps> = ({
  value,
  onChange,
  submit,
}) => {
  return (
    <div className="bg-white w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 rounded-lg drop-shadow-md mt-4">
      <div className="relative">
        <input
          className="w-full py-4 pl-3 pr-16 text-sm rounded-lg"
          type="text"
          placeholder="Grocery item name..."
          onChange={onChange}
          value={value}
        />
        <button
          className="absolute p-2 text-white -translate-y-1/2 bg-blue-600 rounded-full top-1/2 right-4"
          type="button"
          onClick={submit}
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
