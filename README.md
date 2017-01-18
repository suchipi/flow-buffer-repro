This is a reproduction repo for a bug in flow.

To reproduce:
```
$ npm install
$ flow check
```

Expected output:
```
Found 0 errors
```

Actual output:
```
index.js:6
  6:     return input;
                ^^^^^ Buffer. This type is incompatible with the expected return type of
  2: function fails(input: Buffer | string): string {
                                             ^^^^^^ string


Found 1 error
```