'use strict';

const should = require('should');

const projectId = 177959;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 10000,
}).projects.commits.comments;
let sha = 'c4576210a6ab4464826c4ace7291e405ea1eec55';

describe('projects.commits.comments', () => {

  describe('projects.commits.comments.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId, sha).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.commits.comments.create', () => {
    it('should return an comment object.', () => {
      return apis.create(projectId, sha, {
        note: 'new comment',
      }).then((r) => {
        r.note.should.equal('new comment');
      });
    });
  });

});
