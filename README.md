# Zepto Cookie Plugin

A simple plugin to read, set, and delete cookies. This plugin extends [Zepto.js](https://github.com/madrobby/zepto) with a `$.cookie` method.

It is a modification of the [jQuery-Cookie](https://github.com/carhartl/jquery-cookie) plugin made to work with Zepto.


## Including

Simply include the script in your site's templates, after zepto.min.js:

    <script type="text/javascript" src="zepto.cookie.min.js"></script>

Alternatively, you could also build the plugin into the Zepto library itself. To do so, drop `zepto.cookie.js` into the `src` folder of the [Zepto](https://github.com/madrobby/zepto) project. Then build Zepto with the following command:

`rake concat[zepto.cookie] dist`

This will build the default zepto library, with the inclusion of zepto.cookie. You can then simple include the Zepto library as you normally would.

## Usage

Use as such: `$.cookie(key, value, options);`

`key` (string), The name of the cookie you want to read/ set.

`value` (string), The value of the cookie you're setting.

`options` (object), Additional cookie parameters such as expires, path, or domain.


## Examples

Set a cookie:

`$.cookie('user', 'johnd');`

Read the value of a cookie:

`$.cookie('user');`

If ran after the first example, would return `johnd`.