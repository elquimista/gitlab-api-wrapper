'use strict';

const should = require('should');

const projectId = 177959;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 20000,
}).projects.tags;
let createdReleaseId;

describe('projects.tags.release', () => {

  describe('projects.tags.release.create', () => {
    it('should return an release object.', () => {
      return apis.create(projectId, 'newtag', 'test release description.').then((r) => {
        r.should.be.ok();
      });
    });
  });

  describe('projects.tags.release.update', () => {
    it('should return an release object.', () => {
      return apis.create(projectId, 'newtag', 'updated test release description.').then((r) => {
        r.should.be.ok();
      });
    });
  });

});
