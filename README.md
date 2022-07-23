# monorepo template

-   pnpm (so fast)
-   lerna (for workspace stuff)
-   typescript (for typechecking)
-   esbuild (for building)
-   uvu (for testing)
-   eslint + prettier (for lint)

## what do

### setup

```bash
git clone git@github.com:rickbutton/monorepo.git
cd monorepo

# use pnpm!
pnpm install
```

### dev

```
# runs tsc+esbuild in watch mode
pnpm dev
```

### test

```
pnpm test

# watch mode
pnpm test:watch
```

### versioning+publishing

TODO

### package templates

TODO
