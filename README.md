# touchplus
for `touch`ing multiple things. to install, use `npm install -g touchplus`.

# usage

```
  Usage: touchplus|tt [options] <file...>

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -f, --force        bool (ignored)
    -t, --time <date>  parse <date> and use it instead of current time
    -a, --atime <val>  change only access time. <val> can be a bool or a Date
    -m, --mtime <val>  change only modification time. <val> can be a bool or a Date
    -r, --ref <file>   use this file's times instead of current time
    -c, --nocreate     bool. do not create any files
```

# examples

```
# create three files `this`, `that`, `something-else` with no extension
tt this that something-else
```

```
# create three files in different subdirectories
tt foo/bar this/that/new.txt foo/root.ini
```

# License

MIT