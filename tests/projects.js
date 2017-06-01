'use strict';

const should = require('should');

const projectId = 113676;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 10000,
}).projects;
let createdProjectId;
const forkProjectId = 177951;

describe('projects', () => {

  describe('projects.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list().then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.owned', () => {
    it('should return at least one project.', () => {
      return apis.owned().then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.starred', () => {
    it('should return at least one project.', () => {
      return apis.starred().then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.all', () => {
    it('should return 403.', () => {
      return apis.all().catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  describe('projects.one', () => {
    it('should return at least one project.', () => {
      return apis.one(projectId).then((r) => {
        r.id.should.equal(projectId);
      });
    });
  });

  describe('projects.events', () => {
    it('should return at least one event.', () => {
      return apis.events(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.create', () => {
    it('should return a new project.', () => {
      return apis.create({
        name: 'newproject',
      }).then((r) => {
        createdProjectId = r.id;
        r.name.should.equal('newproject');
      });
    });
  });

  describe('projects.createForUser', () => {
    it('should return 403.', () => {
      return apis.createForUser(111, {
        name: 'testname',
      }).catch((e) => {
        e.toString().indexOf('403').should.be.ok();
      });
    });
  });

  describe('projects.update', () => {
    it('should return a modified project.', () => {
      return apis.update(createdProjectId, {
        name: 'newproject2',
        description: 'test project description',
      }).then((r) => {
        r.name.should.equal('newproject2');
      });
    });
  });

  describe('projects.fork', () => {
    let forkedProjectId;
    it('should return a fork project.', () => {
      return apis.fork(forkProjectId).then((r) => {
        forkedProjectId = r.id;
        r.name.should.equal('canary');
      });
    });

    after(() => {
      apis.delete(forkedProjectId);
    });
  });

  describe('projects.delete', () => {
    it('should return true.', () => {
      return apis.delete(createdProjectId).then((r) => {
        (!!r).should.be.ok();
      });
    });
  });

  describe('projects.searchByName', () => {
    it('should return at least one project.', () => {
      return apis.searchByName('canary').then((r) => {
        r.length.should.be.ok();
      });
    });
  });

});
