// 给定一个字符串 s ，返回 s 是否是一个 有效数字。

// 例如，下面的都是有效数字："2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"，而接下来的不是："abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"。

// 一般的，一个 有效数字 可以用以下的规则之一定义：

// 一个 整数 后面跟着一个 可选指数。
// 一个 十进制数 后面跟着一个 可选指数。
// 一个 整数 定义为一个 可选符号 '-' 或 '+' 后面跟着 数字。

// 一个 十进制数 定义为一个 可选符号 '-' 或 '+' 后面跟着下述规则：

// 数字 后跟着一个 小数点 .。
// 数字 后跟着一个 小数点 . 再跟着 数位。

// 一个 小数点 . 后跟着 数位。


// 指数 定义为指数符号 'e' 或 'E'，后面跟着一个 整数。
// 数字 定义为一个或多个数位。

function isNumber(s: string): boolean {
  const num = `(\\d+)`;
  const integer = `([\\-\\+]?${num})`;
  const exponent = `([eE]${integer})`;
  const decNum = `([\\-\\+]?((${num}\\.)|(${num}\\.${num})|(\\.${num})))`;
  const result = `^((${integer}${exponent}?)|(${decNum}${exponent}?))$`;
  return RegExp(result).test(s);
}

enum CHAR_TYPE { CHAR_NUM, CHAR_SIGN, CHAR_EXP, CHAR_POINT };
enum STATE {
  STATE_INIT = 'STATE_INIT',
  STATE_SIGN = 'STATE_SIGN',
  STATE_LEFT_POINT = 'STATE_LEFT_POINT',
  STATE_POINT = 'STATE_POINT',
  STATE_NUM = 'STATE_NUM',
  STATE_DECIMAL_NUM = 'STATE_DECIMAL_NUM',
  STATE_EXP = 'STATE_EXP',
  STATE_EXP_NUM = 'STATE_EXP_NUM',
  STATE_EXP_SIGN = 'STATE_EXP_SIGN',
};
const STATE_TREE: any = {
  [STATE.STATE_INIT]: {
    [CHAR_TYPE.CHAR_NUM]: STATE.STATE_NUM,
    [CHAR_TYPE.CHAR_SIGN]: STATE.STATE_SIGN,
    [CHAR_TYPE.CHAR_POINT]: STATE.STATE_LEFT_POINT,
  },
  [STATE.STATE_SIGN]: {
    [CHAR_TYPE.CHAR_NUM]: STATE.STATE_NUM,
    [CHAR_TYPE.CHAR_POINT]: STATE.STATE_LEFT_POINT,
  },
  [STATE.STATE_LEFT_POINT]: {
    [CHAR_TYPE.CHAR_NUM]: STATE.STATE_DECIMAL_NUM,
  },
  [STATE.STATE_POINT]: {
    [CHAR_TYPE.CHAR_NUM]: STATE.STATE_DECIMAL_NUM,
    [CHAR_TYPE.CHAR_EXP]: STATE.STATE_EXP,
  },

  [STATE.STATE_NUM]: {
    [CHAR_TYPE.CHAR_NUM]: STATE.STATE_NUM,
    [CHAR_TYPE.CHAR_EXP]: STATE.STATE_EXP,
    [CHAR_TYPE.CHAR_POINT]: STATE.STATE_POINT,
  },
  [STATE.STATE_DECIMAL_NUM]: {
    [CHAR_TYPE.CHAR_NUM]: STATE.STATE_DECIMAL_NUM,
    [CHAR_TYPE.CHAR_EXP]: STATE.STATE_EXP,
  },

  [STATE.STATE_EXP]: {
    [CHAR_TYPE.CHAR_SIGN]: STATE.STATE_EXP_SIGN,
    [CHAR_TYPE.CHAR_NUM]: STATE.STATE_EXP_NUM,
  },
  [STATE.STATE_EXP_SIGN]: {
    [CHAR_TYPE.CHAR_NUM]: STATE.STATE_EXP_NUM,
  },
  [STATE.STATE_EXP_NUM]: {
    [CHAR_TYPE.CHAR_NUM]: STATE.STATE_EXP_NUM,
  },
};

function isNumberEx(s: string): boolean {
  let state = STATE.STATE_INIT;
  for (const char of s.trim()) {
    let type: CHAR_TYPE;
    if (char >= '0' && char <= '9') type = CHAR_TYPE.CHAR_NUM;
    else if (char === '+' || char === '-') type = CHAR_TYPE.CHAR_SIGN;
    else if (char === 'e' || char === 'E') type = CHAR_TYPE.CHAR_EXP;
    else if (char === '.') type = CHAR_TYPE.CHAR_POINT;
    else return false;
    const nextState: STATE = STATE_TREE[state]?.[type];
    // console.log(nextState);
    if (!nextState) return false;
    state = nextState;
  }
  return (
    state === STATE.STATE_NUM ||
    state === STATE.STATE_DECIMAL_NUM ||
    state === STATE.STATE_EXP_NUM ||
    state === STATE.STATE_POINT
  );
}

console.log(isNumberEx('.'));
