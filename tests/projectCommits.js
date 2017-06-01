'use strict';

const should = require('should');

const projectId = 177959;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 10000,
}).projects.commits;
let sha = 'dab4787b1fd3fba9b92c410bd80e883ccb66e59f';

describe('projects.commits', () => {

  describe('projects.commits.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId, 'master').then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.commits.one', () => {
    it('should return a commits object.', () => {
      return apis.one(projectId, sha).then((r) => {
        r.id.should.equal(sha);
      });
    });
  });

  describe('projects.commits.diff', () => {
    it('should return an array which is not empty.', () => {
      return apis.diff(projectId, sha).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

});
