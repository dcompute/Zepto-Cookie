# Zepto Cookie 插件

一个读取、设置、删除cookie的简单插件。这个插件基于[Zepto.js](https://github.com/madrobby/zepto)，扩展了一个方法：$.cookie。

本插件来自：[Zepto-Cookie](https://github.com/dcompute/Zepto-Cookie)


## 加载

通过script标签，将zepto.cookie.min.js放到zepto.min.js之后即可:

    <script type="text/javascript" src="zepto.min.js"></script>
    <script type="text/javascript" src="zepto.cookie.min.js"></script>

如果你想将zepto.cookie.js文件合并到zepto.js中，只需要将zepto.cookie.js拷贝到
 `zepto/src/` 目录下。在[Zepto project](https://github.com/madrobby/zepto)项
目中下载源码。也可以参考我的博客[Zepto.js使用](http://siberiawolf.github.io/zepto/)
按照给出的命令，执行即可。

`$ npm install`
`$ npm run-script dist`

然后在 `zepto/dist/` 目录下，会找到合并完的zepto.js文件，里面已经包含了zepto
和zepto.cookie。之后就只需要引用一个zepto文件即可。

    <script type="text/javascript" src="zepto.min.js"></script>

使用zepto.cookie，就像使用zepto一样简单.

## 语法

语法: `$.fn.cookie(key, value, options);`

`key` (string), 你需要读取/ 设置的cookie的名字。

`value` (string), 你设置的cookie的值

`options` (object), 给cookie添加参数，例如 保存时间, 保存路径, 或者 域名.


## 例子

`$.fn.cookie('foo', 'bar');`

设置一个名字为 `foo` ，值为 `bar` 的cookie。

`$.fn.cookie('foo');`

读取名字为 `foo` 的cookie的值。如果想上面那样设置了cookie，则返回 `bar` 。

`$.fn.cookie('foo', null);`

删除名字为 `foo` 的cookie。

`$.fn.cookie('foo', 'bar', { expires: 7 });`

给名字为 `foo` 的cookie设置保存时间，设置为7天。

## 选项

`options` 参数是一个对象，接受如下的属性：

`{ expires : 7 }`

设置cookie的保存时间，以天数为单位。设置的值为正数类型。默认cookie为session
cookie。

`{ path: '/foo' }`

cookie保存的路径。如果没有指定，默认为设置cookie时的路径

`{ domain: 'example.com' }`

cookie保存的域名。如果没有指定，默认为设置cookie是的域名

`{ secure: true }`

是否启用安全连接（https），默认为false。

`{ raw: true }`

是否对cookie值进行URI encode，默认为false。
