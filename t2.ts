
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
};

type A = MyOmit<Todo, 'title'>;
