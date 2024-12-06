// 第一题
// Implement the built-in Readonly<T> generic without using it.
// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
// For example:

interface Todo1 {
  title: string;
  description: string;
}

type MyReadonly1<T> = {
  readonly [P in keyof T]: T[P];
};

const todo1: MyReadonly1<Todo1> = {
  title: "Hey",
  description: "foobar",
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property

// 第二题
// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
// For example

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type MyReadonly2<T, K extends keyof T> = {
  readonly [P in K]: T[P];
} & Omit<T, K>;

const todo2: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

// todo2.title = "Hello" // Error: cannot reassign a readonly property
// todo2.description = "barFoo" // Error: cannot reassign a readonly property
// todo2.completed = true // OK
