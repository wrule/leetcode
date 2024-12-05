type GetDataType<T> = T extends { data: () => any }
  ? ReturnType<T['data']>
  : { };

type GetComputedType<T> = T extends { computed: any }
  ? {
      [K in keyof T['computed']]: ReturnType<T['computed'][K]>
    }
  : { };

type GetMethodsType<T> = T extends { methods: any }
  ? {
      [K in keyof T['methods']]: T['methods'][K] extends (this: any, ...args: infer A) => infer R
        ? (this: void, ...args: A) => R
        : T['methods'][K]
    }
  : {};


type Options<D, C> = {
  data?: () => D,
  computed?: C & ThisType<D>,
}

// 6. 最终的 SimpleVue 函数类型
function SimpleVue<
  D,
  C extends Record<string, any>,
>(options: Options<D, C>) {
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
})
