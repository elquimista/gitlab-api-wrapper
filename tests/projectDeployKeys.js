'use strict';

const should = require('should');

const projectId = 53738;
const deployKeyId = 37021;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 3000,
}).projects.keys;

describe('projects.keys', () => {

  describe('projects.keys.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.keys.one', () => {
    it('should return an array which is not empty.', () => {
      return apis.one(projectId, deployKeyId).then((r) => {
        r.id.should.equal(deployKeyId);
      });
    });
  });

});
