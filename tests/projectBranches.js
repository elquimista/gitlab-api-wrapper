'use strict';

const should = require('should');

const projectId = 177959;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 10000,
}).projects.branches;

describe('projects.branches', () => {

  describe('projects.branches.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.branches.one', () => {
    it('should return a branch object.', () => {
      return apis.one(projectId, 'master').then((r) => {
        r.name.should.equal('master');
      });
    });
  });

  describe('projects.branches.protect', () => {
    it('should return a branch object.', () => {
      return apis.protect(projectId, 'master').then((r) => {
        r.protected.should.be.ok();
      });
    });
  });

  describe('projects.branches.unprotect', () => {
    it('should return a branch object.', () => {
      return apis.unprotect(projectId, 'master').then((r) => {
        r.protected.should.not.be.ok();
      });
    });
  });

  describe('projects.branches.create', () => {
    it('should return a branch object.', () => {
      return apis.create(projectId, 'test', 'master').then((r) => {
        r.should.be.ok();
      });
    });
  });

  describe('projects.branches.delete', () => {
    it('should return a branch object.', () => {
      return apis.delete(projectId, 'test').then((r) => {
        r.should.be.ok();
      });
    });
  });

});
