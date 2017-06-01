'use strict';

const should = require('should');

const projectId = 177959;
const hookId = 32622;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 3000,
}).projects.hooks;
let createdHookId;

describe('projects.hooks', () => {

  describe('projects.hooks.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.hooks.one', () => {
    it('should return a hook object.', () => {
      return apis.one(projectId, hookId).then((r) => {
        r.id.should.equal(hookId);
      });
    });
  });

  describe('projects.hooks.create', () => {
    it('should return a hook object.', () => {
      return apis.create(projectId, {
        url: 'https://www.tmall.com',
      }).then((r) => {
        createdHookId = r.id;
        r.url.should.equal('https://www.tmall.com');
      });
    });
  });

  describe('projects.hooks.update', () => {
    it('should return a hook object.', () => {
      return apis.update(projectId, createdHookId, {
        url: 'https://www.taobao.com',
      }).then((r) => {
        r.url.should.equal('https://www.taobao.com');
      });
    });
  });

  describe('projects.hooks.delete', () => {
    it('should return true.', () => {
      return apis.delete(projectId, createdHookId).then((r) => {
        r.id.should.equal(createdHookId);
      });
    });
  });

});
