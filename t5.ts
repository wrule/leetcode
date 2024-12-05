type GetDataType<T> = T extends { data: () => any }
  ? ReturnType<T['data']>
  : never;

type GetComputedType<T> = T extends { computed: any }
  ? {
      [K in keyof T['computed']]: ReturnType<T['computed'][K]>
    }
  : never;

type VueThis<T> = GetDataType<T> & GetComputedType<T>;

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
