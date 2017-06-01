'use strict';

const should = require('should');

const uid = 7654;
const keyId = 51681;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com'
}).users.keys;

describe('users.keys', () => {

  describe('users.keys.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list().then((r) => {
        console.log(r);
        r.length.should.be.ok();
      });
    });
  });

  describe('users.keys.listForUser', () => {
    it('should return 403.', () => {
      return apis.listForUser(uid).catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  describe('users.keys.one', () => {
    it('should return a key object.', () => {
      return apis.one(keyId).then((r) => {
        r.id.should.equal(keyId);
      });
    });
  });

  describe('users.keys.create', () => {
    it('should return 403.', () => {
      return apis.update(uid, {
        email: 'harbin1053020115@gmail.com',
      }).catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  //describe('users.update', () => {
  //  it('should return 403.', () => {
  //    return apis.update(uid, {
  //      email: 'harbin1053020115@gmail.com',
  //    }).catch((e) => {
  //      e.toString().indexOf('403').should.be.ok();
  //    });
  //  });
  //});

  //describe('users.delete', () => {
  //  it('should return 403.', () => {
  //    return apis.delete(uid).catch((e) => {
  //      e.toString().indexOf('403').should.be.ok();
  //    });
  //  });
  //});
  //
  //describe('users.current', () => {
  //  it('should return the some user.', () => {
  //    return apis.current().then((r) => {
  //      r.id.should.equal(uid);
  //    });
  //  });
  //});
  //
  //describe('users.block', () => {
  //  it('should return 403.', () => {
  //    return apis.block(uid).catch((e) => {
  //      e.toString().indexOf('403').should.be.ok();
  //    });
  //  });
  //});
  //
  //describe('users.unblock', () => {
  //  it('should return 403.', () => {
  //    return apis.unblock(uid).catch((e) => {
  //      e.toString().indexOf('403').should.be.ok();
  //    });
  //  });
  //});
  //
  //describe('users.session', () => {
  //  it('should return the some user.', () => {
  //    return apis.session('ermin.zem@alibaba-inc.com', 'Harbin30203').then((r) => {
  //      r.id.should.equal(uid);
  //    });
  //  });
  //});

});
