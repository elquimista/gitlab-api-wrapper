# gitlab-api-wrapper

---

The most comprehensive GitLab API, almost covers all GitLab API endpoints. Also, we provide an isomorphic API which can be used in both browser and Node.js environments.

## Install

```bash
yarn add gitlab-api-wrapper
```

## Usage

```js
const GitlabApis = require('gitlab-api-wrapper');

const client = GitlabApis({
  // the GitLab url
  base_url: 'http://gitlab.alibaba-inc.com',
  private_token: '',
  timeout: 3000,
});

// return a promise object
const ret = client.projects.list({search: 'xx'});
```
