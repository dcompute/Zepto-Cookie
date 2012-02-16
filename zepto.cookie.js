/*
 * Zepto.Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de) and Daniel Lacy (daniellacy.com)
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.extend(Zepto, {
    cookie : function (key, value, options) {
        var days, t, result, decode;

        // key and at least value given, set cookie
        if (arguments.length > 1 && String(value) !== "[object Object]") {
            options = $.extend(Zepto, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                days = options.expires;
                t    = options.expires = new Date();

                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=',
                options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '',
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie
        options = value || {};

        decode = options.raw ? function (s) { return s; } : decodeURIComponent;

        return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
    }
});