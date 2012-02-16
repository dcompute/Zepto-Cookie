Zepto Cookie Plugin
=============

This plugin extends [Zepto.js](https://github.com/madrobby/zepto) with a `$.cookie` method.


Usage
-----

Simply include the script in your site's templates, after zepto.min.js:

    <script type="text/javascript" src="zepto.cookie.min.js"></script>

Use as such: `$.cookie(key, value, options);`.

`key`, String, The name of the cookie you want to read/ set.

`value`, String, The value of the cookie you're setting.

`options`, object, Additional cookie parameters such as expires, path, or domain.