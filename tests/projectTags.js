'use strict';

const should = require('should');

const projectId = 177959;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 20000,
}).projects.tags;
let createdTagId;

describe('projects.tags', () => {

  describe('projects.tags.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.tags.create', () => {
    it('should return an tag object.', () => {
      const tagName = 'newtag' + new Date().getTime();
      return apis.create(projectId, {
        tag_name: tagName,
        ref: 'master',
      }).then((r) => {
        r.name.should.equal(tagName);
      });
    });
  });

});
