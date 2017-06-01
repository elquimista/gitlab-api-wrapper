'use strict';

const should = require('should');

const uid = 7654;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com'
}).users;

describe('users', () => {

  describe('users.search', () => {
    it('should return an array which is not empty.', () => {
      return apis.search('ermin.zem').then((r) => {
        r.length.should.be.ok();
      });
    });

    it('should return 10 users.', () => {
      return apis.search('', 0, 10).then((r) => {
        r.length.should.equal(10);
      });
    });
  });

  describe('users.one', () => {
    it('should return the some user.', () => {
      return apis.one(uid).then((r) => {
        r.id.should.equal(uid);
      });
    });
  });

  describe('users.create', () => {
    it('should return 403.', () => {
      return apis.create({
        name: 'test',
      }).catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  describe('users.update', () => {
    it('should return 403.', () => {
      return apis.update(uid, {
        email: 'harbin1053020115@gmail.com',
      }).catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  describe('users.delete', () => {
    it('should return 403.', () => {
      return apis.delete(uid).catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  describe('users.current', () => {
    it('should return the some user.', () => {
      return apis.current().then((r) => {
        r.id.should.equal(uid);
      });
    });
  });

  describe('users.block', () => {
    it('should return 403.', () => {
      return apis.block(uid).catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  describe('users.unblock', () => {
    it('should return 403.', () => {
      return apis.unblock(uid).catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  describe('users.session', () => {
    it('should return the some user.', () => {
      return apis.session('ermin.zem@alibaba-inc.com', 'Harbin30203').then((r) => {
        r.id.should.equal(uid);
      });
    });
  });

});
