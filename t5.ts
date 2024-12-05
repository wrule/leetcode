// 算法主观题目
// 请总结算你在做算法的一些心得
// 个人认为主要是需要掌握几点
// 1.排序算法的不同类型的实现
// 2.递归，分治，回溯思想的理解和实现
// 3.题目中常用数据结构的实现
// 4.题目理解力，有些题目表达比较晦涩，可能需要特别留意提示，或者题目中的一些特殊的关键词去探索题目场景背后的含义
// 遇到不会的问题怎么办？遇到会的能回忆起来么？
// 1.如果是远程面试的话，无论是会还是不会的问题，我都尽可能寻找一个AI兜底方案。
// 2.如果不是远程面试的话，只能多复习了。
// 3.所有题目我都需要重新不看AI做两遍，才能保证有一个稳定的发挥。
// 遇到的很熟的能控制住情绪么？
// 1.可以控制好情绪，稳定输出

// 《TS每日一题》
type GetData<T> = T extends { data(): any }
  ? ReturnType<T['data']>
  : { };

type GetComputed<T> = T extends { computed: any }
  ? {
      [K in keyof T['computed']]: ReturnType<T['computed'][K]>
    }
  : { };

type GetMethods<T> = T extends { methods: any }
  ? T['methods']
  : { };

type VueThis<D, C, M> = D & C & M;

type Options<D, C, M> = {
  data?: () => D,
  computed?: C & ThisType<D & C & M>,
  methods?: M & ThisType<D & C & M>
}

function SimpleVue<
  D,
  C extends Record<string, (...args: any[]) => any>,
  M extends Record<string, (...args: any[]) => any>
>(options: Options<D, C, GetComputed<{computed: C}>>): VueThis<D, GetComputed<{computed: C}>, M> {
  return options as any;
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