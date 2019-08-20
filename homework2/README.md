### 课后作业

#### Why should you have minimum scope for variables?

在写代码是确实需要尽可能的定义最小范围,这是出于代码清洁度的考虑,用最小范围申明变量有利于代码的阅读,会是得程序员更好的理解变量使用方式与来源.

#### Why should you understand performance of String Concatenation?

一般而言,java有四种拼接字符串的方式,分别是StringBuilder(A),StringBuffer(B),concat(C),字符串加号拼接(D).笼统的说,在循环拼接字符串中,效率是A>B>>C>D;在大量字符串拼接时C>A>B>D.所以可以归纳为以下四点:
* 加号拼接基本在各种情况都是最慢的
* 拼接少数字符串时,concat效率最高
* 多个字符串拼接时, StringBuilder和StringBuffer效率好
* 不需要考虑线程安全问题时, StringBuilder效率更好

#### What are the best practices with Exception Handling?

* 在Finally块中清理资源或者使用Try-With-Resource语句
* 优先使用更明确的异常
* 在文档中记录你的异常
* 将异常与它的描述信息一并抛出
* 优先捕获更明确的异常
* 不要捕获Throwable
* 别忽略异常
* 不要打印异常日志的同时将其抛出
* 包裹某个异常的同时不要丢弃它原本的信息

#### When is it recommended to prefer Unchecked Exceptions?

如果方法的调用方可以通过这个Exception做出某些处理，那么可以考虑把这个异常定义成Checked Exception，并在方法签名处声明，反之，可以定义成Unchecked Exception.正如oracle的java tutorials中所写:
> 其实我们可以猜测一下Java设计者当初的想法，最稳妥的方式是全部都是Checked Exception，这样你能处理的异常你就处理，你不能处理的就忽略（或者仅仅只记日志）.但是，这样的话，代码中会充斥着大量的异常处理代码，比如，空指针，数组越界等等.所以，对于一些我们无能为力的异常，不妨把它定义成Unchecked Exception

#### When do you use a Marker Interface?

引用自互联网:
> 显然，如果标记应用于类或接口之外的任何程序元素，则必须使用标记注解，因为只有类和接口才能实现或扩展接口.如果标记只适用于类和接口，那么可以问自己这样一个问题：「我是否可以编写一个或多个方法，只接受具有这种标记的对象？」如果是这样，你应该使用标记接口而不是标记注解.这将使你能够将接口用作相关方法的参数类型，这将带来编译时类型检查的好处.如果你确信自己永远不会编写只接受带有标记的对象的方法，那么最好使用标记注解.此外，如果框架大量使用注解，那么标记注解就是明确的选择.

#### Why are ENUMS important for Readable Code?

因为开发者可以一眼搞清楚如果改变了value将发生什么,减少因为置换了这个值缩产生错误的几率

#### Why should you minimize mutability?

因为不可变类要比可变类更加易于设计，实现和使用.它们不容易出错，且更加安全.不可变类有以下优点：
* 不可变对象比较简单.不可变对象可以只有一种状态，即被创建时的状态.
* 不可变对象本质上是线程安全的，它们不要去同步.当多个线程并发访问这样的对象时，它们不会遭到破坏.
* 不可变对象可以被自由地共享.

#### What is functional programming?

一种理论上没有副作用的编程方式,起核心思想接近数学表达式,确定输入就能确定输出.这是一种理论上的，实际上函数不可能完全没有副作用.函数会在某个时刻返回一个值，而这个值可能是变化的，这就是一个副作用.也可能会造成内存耗尽的错误，或者堆栈溢出的错误，导致应用程序奔溃，正在某种意义上就是一个可观测到的副作用.所以函数式编程其实就是编写非故意的副作用的程序——副作用是程序预期的一部分.非故意的副作用也应该越少越好.

#### Why should you prefer Builder Pattern to build complex objects?

* 方便用户创建复杂的对象（不需要知道实现过程）
* 代码复用性 & 封装性（将对象构建过程和细节进行封装 & 复用）

#### Why should you avoid floats for Calculations?

为了避免丢失精度的问题

#### Why should you build the riskiest high priority features first?

这是出于降低项目整体风险考虑做出的决策,高风险往往意味着带来危害的可能性较大,需要尽快排除.