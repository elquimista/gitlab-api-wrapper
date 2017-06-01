'use strict';

const should = require('should');

const projectId = 177959;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 10000,
}).projects.commits.status;
let sha = 'c4576210a6ab4464826c4ace7291e405ea1eec55';

describe('projects.commits.status', () => {

  describe('projects.commits.status.create', () => {
    it('should return an status object.', () => {
      return apis.create(projectId, sha, {
        state: 'pending',
      }).then((r) => {
        r.status.should.equal('pending');
      });
    });
  });

  describe('projects.commits.status.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId, sha).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

});
