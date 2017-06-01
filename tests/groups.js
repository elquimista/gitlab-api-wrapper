'use strict';

const should = require('should');
const apis = require('../index')({
  private_token: 'LJufxfyiy4VmRA1-yfrr',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 20000,
}).groups;
const groupId = 48713;
let createdGroupId;

describe('groups', () => {

  describe('groups.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list().then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('groups.projects', () => {
    it('should return an array which is not empty.', () => {
      return apis.projects(groupId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });
    
  describe('groups.detail', () => {
    it('should return an group named mclemore.', () => {
      return apis.detail(groupId).then((r) => {
          console.log(`path: ${r.path}`);
        r.name.should.equal('mclemore');
      });
    });
  });

  describe('groups.create', () => {
    it('should return an new group named bingo.', () => {
      return apis.create({
        name: 'bingo',
        path: 'gobin',
        description: 'nothing'
      }).then((r) => {
        createdGroupId = r.id;
        r.name.should.equal('bingo');
      });
    });
  });

  describe('groups.transfer', () => {
    it('should return 403.', () => {
      return apis.transfer(groupId, 146969).catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  describe('groups.remove', () => {
    it('should return true.', () => {
      return apis.remove(createdGroupId).then((r) => {
          (!!r).should.be.ok();
      });
    });
  });

  describe('groups.search', () => {
    it('should return an array which is not empty.', () => {
      return apis.search({
        search: 'more'
      }).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('groups.namespaces', () => {
    it('should return an array which is not empty.', () => {
      return apis.namespaces().then((r) => {
        r.length.should.be.ok();
      });    
    });
  });

});
