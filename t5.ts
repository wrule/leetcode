// 1. 首先处理 data 返回值的类型
type GetData<T> = T extends { data(): any } 
  ? ReturnType<T['data']> 
  : never;

// 2. 处理 this 的类型，它应该包含 data 返回的所有属性
type GetComputed<T> = T extends { computed: any }
  ? {
      [K in keyof T['computed']]: ReturnType<T['computed'][K]>
    }
  : {};

// 3. 合并 data 和 computed 的类型，作为 this 的类型
type VueThis<T> = GetData<T> & GetComputed<T>;

// 4. 处理 methods 的类型
type GetMethods<T> = T extends { methods: any }
  ? {
      [K in keyof T['methods']]: T['methods'][K] extends (this: any, ...args: infer A) => infer R
        ? (this: void, ...args: A) => R
        : T['methods'][K]
    }
  : {};

// 5. 主类型定义
type Options<D, C, M> = {
  data?: () => D,
  computed?: C & ThisType<D>,
  methods?: M & ThisType<D & GetComputed<{ computed: C }>>
}

// 6. 最终的 SimpleVue 函数类型
function SimpleVue<
  D,
  C extends Record<string, any>,
  M extends Record<string, any>
>(options: Options<D, C, M>) {
  return options;
}

const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})
