# Trustvc demo project

- please build the trustvc project loacaly and serve it on 4873 and install the trustvc package

### Build the trustvc project locally

Install verdacio globally and run it

```
npm install -g verdaccio
verdaccio
```

Note: Clone the trustvc project and build the fix (PR)

#### Publish the trustvc package locally

```
cd <trustvc project>
npm install
npm run build
npm publish --registry http://localhost:4873
```

## Build the trustvc-demo project

```
npm install
(optional) npm install @trustvc/trustvc --registry http://localhost:4873
npm run dev
```

> Note: Check for the console log for wrapDocument response
