strlib
-------

common javascript string manipulate library.


# install

```
npm install strlib
```


# API


### merge(strA, strB, needle)

merge any string with tail and head in common. `needle` is optional.

```
merge('http://example.com/', '/foo/bar') => 'http://example.com/foo/bar'
merge('http://example.com/', 'foo/bar') => 'http://example.com/foo/bar'

merge('i like cat', 'cat are lonely') => 'i like cat are lonely'
merge('i like catcat', 'catcat are lonely') => 'i like catcat are lonely'

merge('http://example.com', 'com/boo') => 'http://example.com/boo'
// if needle is provided and their common part is not needle, needle will be inserted
merge('http://example.com', 'com/boo', '/') => 'http://example.com/com/boo'
```

###  escapeHTML(string)

convert html string to safe string.

###  escapeRegExp(string)

convert a string to be able to handle by `new Regexp`

###  replaceAll(string, from, to)

replace all the occurrence by string and you don't need to build regexp yourself.

###  getConcatationString(a, b)

similar to merge, but return you the common part of the two string about their tail and head.

###  ucfirst(str)

convert the first char to upper case.

License
----

MIT
