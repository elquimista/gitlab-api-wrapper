'use strict';

const should = require('should');
const apis = require('../index')({
  private_token: 'LJufxfyiy4VmRA1-yfrr',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 20000,
}).groups.members;
const groupId = 48713;
const userId = 7654;

describe('groups.members', () => {
  describe('groups.members.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(groupId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('groups.members.add', () => {
    it('should return true.', () => {
      return apis.add(groupId, {
        user_id: userId,
        access_level: 40
      }).then((r) => {
        (!!r).should.be.ok();
      });
    });
  });

  describe('groups.members.update', () => {
    it('should return a updated member', () => {
      return apis.update(groupId, userId, {
        access_level: 30
      }).then((r) => {
        r.access_level.should.equal(30);
      });
    });
  });

  describe('groups.members.remove', () => {
    it('should return true', () => {
      return apis.remove(groupId, userId).then((r) => {
        (!!r).should.be.ok();
      });
    });
  });
});
