
Environment: node 11.13.0 installed with asdf package manager.

```
% which node
/Users/stephen/.asdf/shims/node

% node -v
v11.13.0

% which npx
/Users/stephen/.asdf/shims/npx

% npx -v
6.7.0
```

About create-react-app

```
% npx create-react-app --version
npx: installed 63 in 2.999s
2.1.8

% npx create-react-app --help
npx: installed 63 in 1.736s
Usage: create-react-app <project-directory> [options]

Options:

  -V, --version                            output the version number
  --verbose                                print additional logs
  --info                                   print environment debug info
  --scripts-version <alternative-package>  use a non-standard version of react-scripts
  --use-npm
  --use-pnp
  --typescript
  -h, --help                               output usage information
    Only <project-directory> is required.

    A custom --scripts-version can be one of:
      - a specific npm version: 0.8.2
      - a specific npm tag: @next
      - a custom fork published on npm: my-react-scripts
      - a local path relative to the current working directory: file:../my-react-scripts
      - a .tgz archive: https://mysite.com/my-react-scripts-0.8.2.tgz
      - a .tar.gz archive: https://mysite.com/my-react-scripts-0.8.2.tar.gz
    It is not needed unless you specifically want to use a fork.

    If you have any problems, do not hesitate to file an issue:
      https://github.com/facebook/create-react-app/issues/new
```

Create app2

```
% cd react/sandbox
sandbox % npx create-react-app app2
npx: installed 63 in 3.27s

Creating a new React app in /Users/stephen/dev/react/sandbox/app2.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.15.2
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 5 new dependencies.
info Direct dependencies
├─ react-dom@16.8.6
├─ react-scripts@2.1.8
└─ react@16.8.6
info All dependencies
├─ fork-ts-checker-webpack-plugin@1.0.0-alpha.6
├─ react-dev-utils@8.0.0
├─ react-dom@16.8.6
├─ react-scripts@2.1.8
└─ react@16.8.6
✨  Done in 16.21s.

Initialized a git repository.

Success! Created app2 at /Users/stephen/dev/react/sandbox/app2
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd app2
  yarn start

Happy hacking!
```
