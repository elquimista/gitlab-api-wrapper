'use strict';

const should = require('should');

const projectId = 177959;
const userId = 7214;
const addUserId = 36213;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 3000,
}).projects.members;

describe('projects.members', () => {

  describe('projects.members.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.members.one', () => {
    it('should return an user object.', () => {
      return apis.one(projectId, userId).then((r) => {
        r.id.should.equal(userId);
      });
    });
  });

  describe('projects.members.add', () => {
    it('should return an user object.', () => {
      return apis.add(projectId, addUserId, 10).then((r) => {
        r.id.should.equal(addUserId);
      });
    });
  });

  describe('projects.members.update', () => {
    it('should return an user object.', () => {
      return apis.update(projectId, addUserId, {
        access_level: 50,
      }).then((r) => {
        r.access_level.should.equal(50);
      });
    });
  });

  describe('projects.members.delete', () => {
    it('should return an user object.', () => {
      return apis.remove(projectId, addUserId).then((r) => {
        r.user_id.should.equal(addUserId);
      });
    });
  });

});
