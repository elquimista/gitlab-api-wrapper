'use strict';

const should = require('should');

const projectId = 177959;
const issueId = 132507;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 3000,
}).projects.labels;

describe('projects.labels', () => {

  describe('projects.labels.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.labels.create', () => {
    it('should return an label object.', () => {
      return apis.create(projectId, {
        name: 'test label',
        color: '#7f8c8d',
      }).then((r) => {
        r.name.should.equal('test label');
      });
    });
  });

  describe('projects.labels.delete', () => {
    it('should return an label object.', () => {
      return apis.delete(projectId, 'test label').then((r) => {
        r.title.should.equal('test label');
      });
    });
  });

});
