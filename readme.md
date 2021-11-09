# 俊泽生成器Web应用程序 - 帮助

[toc]

## 概述

一个用来表达对俊泽和赵总的思念，以及生成一些其他奇怪东西的程序。

俊泽生成器Web应用程序的诞生离不开[junze-generator](https://github.com/CrSjimo/junze-generator)，[random](https://github.com/transitive-bullshit/random)，[axios](https://github.com/axios/axios)，[corpusZh](https://github.com/liwenzhu/corpusZh)，[material-web](https://github.com/material-components/material-web)，[JueJueZiGenerator](https://github.com/kingcos/JueJueZiGenerator)等开源项目。俊泽生成器本身也是一个使用DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE的[开源项目](https://github.com/CrSjimo/junze)。

## 模板

俊泽生成器模板是生成字符串的模板。这句话不是废话文学，因为上一句话里的第一个模板是pattern，第二个模板是template。例如：

```
%[%a:%{俊泽,cmb,crs,std}]不在的第%d天，%[a]%n(v)了%r(int,1,100)个%[a]的%n(n)
```

可能的生成结果：

```
std不在的第164天，俊泽破土动工了45个cmb的主管部门
```

模板中可以包含一些以`%`开头的使用特定语法的表达式。这些表达式包括：函数，随机列表，变量定义与引用。

### 函数

语法：

````
%函数名(<参数1>, <参数2>, ...)
%函数名
````

没有参数的函数可以省略参数列表。

#### c (<u>c</u>haracter)

在U+4E00到U+9fff范围内随机生成一个字符。

- 语法：

  ```
  %c
  ```

- 参数列表：

  无参数。

- 样例：

  - 模板：

    ```
    %c
    ```

  - 可能的生成结果：

    ```
    媝
    ```


#### C (<u>C</u>alculate)

计算逆波兰表达式。

- 语法：

  ```
  %C(<op>, ...)
  ```

- 参数列表：

  | 参数名 | 数据类型       | 描述           |
  | ------ | -------------- | -------------- |
  | `op`   | 浮点数\|运算符 | 运算数或运算符 |

  其中，可用的运算符如下：

  | 运算符 | 描述                                             |
  | ------ | ------------------------------------------------ |
  | `+`    | 将两个运算数相加                                 |
  | `-`    | 用前一个运算数减去后一个运算数                   |
  | `*`    | 将两个运算数相乘                                 |
  | `/`    | 用前一个运算数除以后一个运算数                   |
  | `//`   | 用前一个运算数除以后一个运算数，并向下取整       |
  | `^`    | 以前一个运算数为底数，后一个运算数为次数，计算幂 |
  | `_`    | 将前一个运算数保留到小数点后后一个运算数位       |

- 样例：

  - 模板1：

    ```
    %C(1,2,+,4,*,17,4,//,+)
    ```

  - 生成结果1：

    ```
    16
    ```

    计算了表达式：$(1+2)\times 4+\lfloor 17\div 4 \rfloor$。

  - 模板2：

    ```
    %C(5,3,^,7,/,3,_)
    ```

  - 生成结果2：

    ```
    17.857
    ```

    计算了表达式：$5^3\div 7$，并将结果保留到小数点后三位。
    
#### d (<u>d</u>ate)

计算设置的日期到今天的日数。

- 语法：

  ```
  %d
  ```

- 参数列表：

  无参数。

#### e (dat<u>e</u>)

计算今天到设置的日期的日数。

- 语法：

  ```
  %e
  ```

- 参数列表：

  无参数。
  
#### j (<u>j</u>uejuezi)

直通[绝绝子生成器](https://kingcos.me/jjz)。

- 语法：

  ```
  %j(<verb>, <noun>)
  ```

- 参数列表：

  | 参数名 | 数据类型 | 描述 |
  | ------ | -------- | ---- |
  | `verb` | 字符串   | 动词 |
  | `noun` | 字符串   | 名词 |

- 样例：

  - 模板1：

  - ```
    %j(撸, cmb)
    ```

  - 可能的生成结果1：

    ```
    忙里偷闲的生活碎片💜，救命🆘，今天又是撸 cmb的一天啦，不管啦，哈哈哈，这件🉑️‼️‼️‼️这件奶茶也绝绝子～～～冲鸭，路边捡到了一分钱，笑死，哒哒哒，我是一面镜子 所以 晚安 我碎啦🖤
    ```

  - 模板2：

    ```
    %j(%n(v), 俊泽的%n(n))
    ```

  - 可能的生成结果2：

    ```
    投递日常❤️ 救命🆘 今天又是巩固 俊泽的有机化学的一天啦 噎死莫拉 嘿嘿嘿 这件太牛了‼️‼️‼️这家店的小蛋糕也真的绝！！！无语子 路边捡到了一分钱 不管啦 嘿嘿嘿 我是一面镜子 所以 晚安 我碎啦💜
    ```

#### n (<u>n</u>atural language processing)

自然语言处理，其实就是指定随机生成词语的词性。

- 语法：

  ```
  %n(<p>, ...)
  ```

- 参数列表：

  | 参数名 | 数据类型 | 描述     |
  | ------ | -------- | -------- |
  | p      | 字符串   | 词性标记 |

  其中，词性标记如下：

  | 标记 | 词性      | 例子                                                         | 收词数量 |
  | ---- | --------- | ------------------------------------------------------------ | -------- |
  | a    | 形容词    | 精辟，常见，骤然，愤恨                                       | 8850     |
  | c    | 连词      | 即使，其次，假使，但是                                       | 466      |
  | d    | 副词      | 已经，肆力，大加，动不动                                     | 2096     |
  | e    | 叹词      | 唔呀，吗，啊唷，罢                                           | 179      |
  | f    | 区别词    | 无形，长途，内在，自来                                       | 253      |
  | g    | 语素字    | 早                                                           | 1        |
  | h    | 前接成分  | 伪，反，新，轻                                               | 87       |
  | i    | 习用语    | 添砖加瓦，旦夕祸福，阔步前进，有滋有味                       | 7564     |
  | j    | 缩略语    | 中共，社科，市府，共盟                                       | 2113     |
  | k    | 后接成分  | 热，等，剂，炎                                               | 166      |
  | m    | 数词      | 二·三，二十七亿，七点三，三百五十四万二千                    | 3596     |
  | mq   | 数词+量词 | 一部，一通，一套，一池                                       | 130      |
  | n    | 普通名词  | 老乡，核装置，电子游戏，司徒                                 | 54686    |
  | nd   | 方位名词  | 内心，东边，四外，头前                                       | 667      |
  | nh   | 人名      | 李传卿，邵太豹，丁秋生，李肇基                               | 24609    |
  | nhf  | 姓        | 冷，恩，裘，戚                                               | 500      |
  | nhs  | 名        | 探奇，灵子，秀莲，二黑                                       | 2605     |
  | ni   | 机构名    | 中国科学院滨海市分院生理研究所，上海市物价局，沈阳铁西区公安局，上海市服装鞋帽公司 | 6003     |
  | nl   | 处所名词  | 后方，榜上，篮中，核内                                       | 1707     |
  | nn   | 族名      |                                                              | 0        |
  | ns   | 地名      | 隶融州，羊马河，马尔宾沙机场，越江                           | 14308    |
  | nt   | 时间名词  | 后年，金秋，季候，酉时                                       | 1913     |
  | nz   | 其他专名  | 撒哥，锡伯尔台，金山庄，大贺                                 | 403      |
  | o    | 拟声词    | 叮零零，嘁嚓，扑咚，叽叽喳喳                                 | 725      |
  | p    | 介词      | 就是，给，正如，据此                                         | 258      |
  | q    | 量词      | 法郎，匣，卡路里，泡                                         | 849      |
  | r    | 代词      | 上一次，这下子，怎么回事儿，两者                             | 592      |
  | u    | 助词      | 一来，末，那，得已                                           | 265      |
  | v    | 动词      | 专任，织花，渴慕，贴                                         | 32427    |
  | vd   | 趋向动词  | 挂上，扑来，浮上，找来                                       | 311      |
  | vl   | 联系动词  | 竟是，好象是，诚为，作为                                     | 155      |
  | vu   | 能愿动词  | 似可，挺会，自应，可得                                       | 175      |
  | x    | 非语素字  | 疖，眦，茏，卍                                               | 970      |

- 样例：

  - 模板：

    ```
    俊泽距离高考还有%e天，CuteMB想要和他在%n(nl)%n(d)%n(v)%n(n)
    ```

  - 可能的生成结果：
  
    ```
    俊泽距离高考还有240天，CuteMB想要和他在行间多么理会条件反射
    ```
  
    

#### r (<u>r</u>andom)

生成随机数：

- 语法：

  ```
  %r(int, <min>, <max>)
  %r(float, <min>, <max>, [digits])
  ```

- 参数列表：

  | 参数名   | 数据类型     | 描述                       |
  | -------- | ------------ | -------------------------- |
  | `min`    | 整数\|浮点数 | 最小值（包含）             |
  | `max`    | 整数\|浮点数 | 最大值（包含）             |
  | `digits` | 整数         | 生成结果保留到小数点后位数 |

- 样例：

  - 模板1：

    ```
    %r(int, 1, 100)
    ```

  - 可能的生成结果1：

    ```
    42
    ```

  - 模板2：

    ```
    %r(float, 10000, 20000, 3)
    ```

  - 可能的生成结果2：

    ```
    19260.817
    ```

### 随机列表

在列表中的项目中随机选择一个。

```
%{item, ...}
```

### 变量的定义与引用

变量定义可以保存模板或者生成的值，以供之后再次使用。变量名只能使用连字符，下划线，拉丁字母和美元符号。

#### 直接赋值模式

在使用直接赋值模式定义变量时，会将生成的值存储进变量中。

- 语法：

  - 定义变量：

    ```
    %[<变量名>:<模板>]
    ```

  - 调用变量：

    ```
    %[<变量名>]
    ```

- 样例：

  - 模板：

    ```
    %[a:%c]%[b:%c]%[a]%[b]%[a]%[b]%[a:%c]%[a]
    ```

  - 可能的生成结果：

    ```
    俊泽俊泽俊泽强强
    ```


#### 模板赋值模式

在使用模板赋值模式定义变量时，会将生成使用的模板存储进变量，下次调用时会使用存储的模板重新生成。

- 语法：

  - 定义变量：

    ```
    %[%<变量名>:<模板>]
    ```

  - 调用变量：

    ```
    %[<变量名>]
    ```

- 样例：

  - 模板：

    ```
    %[%a:%r(int,1,100)] %[b:%r(int,1,100)] %[a] %[b] %[a] %[b]
    ```

  - 可能的生成结果：

    ```
    42 15 38 15 86 15
    ```

## 生成模式

### eval模式

eval模式允许在生成时使用[JavaScript模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)。

在eval模式下，以`%`开头的表达式将不再可用，取而代之的是一些全局对象：

| 全局对象名称 | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| `junze`      | 函数列表                                                     |
| `context`    | 生成器当前的上下文（详见[定义](https://github.com/CrSjimo/junze-generator/blob/master/src/Context.ts)） |
| `random`     | random模块（详见[官方文档](https://www.npmjs.com/package/random)） |

其中，函数列表的方法键值即为上述列出的所有函数名称，例如：

```
俊泽不在的第%r(int,1,100)天，%n(v)他。
```

使用eval模式即为：

```
俊泽不在的第${junze.r('int',1,100)}天，${junze.n('v')}他。
```

eval模式具有潜在的风险，是因为它可以执行任意JavaScript代码，攻击者可能以此进行跟踪或者执行恶意代码。

### HTML输出模式

在输出时启用HTML，例如：

```
<iframe src="//player.bilibili.com/player.html?bvid=%{BV1GJ411x7h7,BV1AK411g7xc,BV1Qt411T7VS,BV1j4411W7F7}&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

会随机生成一个视频播放的嵌入式框架。

HTML输出模式具有潜在的风险，是因为它可以向网页中嵌入任何内容，攻击者可能以此进行跟踪或者执行恶意代码。

## 故障排除

### 生成时错误

#### `... is not defined (jz001)`

函数未定义。可能输入了错误的函数名称。

#### `Expected '...' or '...', but read end of input (jz101)`

输入在不应结束的地方结束。请检查括号是否匹配。

#### `Unexpected token: ... (jz102)`

意外的符号。请检查语法。

#### `Invalid character in tag name: '...'. Only hyphen, underline, latin letter and '$' are valid (jz103)`

变量名中出现非法字符。

#### `Runtime error: ... (jz201)`

运行时错误。请检查函数的参数列表以及参数的数据类型是否合法。

#### `Internal error: ... (jz202)`

内部错误。可能是由于俊泽生成器存在漏洞。

### 词库同步错误

请检查网络是否科学。