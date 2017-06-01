'use strict';

const should = require('should');

const projectId = 177959;
const mrId = 386221;
const projectsApis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 20000,
}).projects;
const apis = projectsApis.mergerequests;
let createdMRId;

describe('projects.mergerequests', () => {

  describe('projects.mergerequests.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.mergerequests.one', () => {
    it('should return a merge request object.', () => {
      return apis.one(projectId, mrId).then((r) => {
        r.id.should.equal(mrId);
      });
    });
  });

  describe('projects.mergerequests.commits', () => {
    it('should return an array which is not empty.', () => {
      return apis.commits(projectId, mrId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.mergerequests.changes', () => {
    it('should return a object.', () => {
      return apis.changes(projectId, mrId).then((r) => {
        r.should.be.ok();
      });
    });
  });

  describe('projects.mergerequests.create', () => {
    before((done) => {
      projectsApis.branches.create(projectId, 'testbranch', 'master').then((r) => {
        projectsApis.repositories.createFile(projectId, {
          file_path: 'addfile' + new Date().getTime(),
          branch_name: 'testbranch',
          content: 'test content',
          commit_message: 'add file',
        }).then((r) => {
          done();
        });
      });
    });

    it('should return an mr object.', () => {
      return apis.create(projectId, {
        title: 'this is a test mr.',
        source_branch: 'testbranch',
        target_branch: 'master',
      }).then((r) => {
        createdMRId = r.id;
        r.id.should.be.ok();
      });
    });
  });

  describe('projects.mergerequests.update', () => {
    it('should return an array which is not empty.', () => {
      return apis.update(projectId, createdMRId, {
        title: 'this is a test mr title.',
        description: 'this is a test mr content.',
      }).then((r) => {
        r.id.should.equal(createdMRId);
      });
    });
  });

  describe('projects.mergerequests.accept', () => {
    it('should return an array which is not empty.', () => {
      return apis.accept(projectId, createdMRId, {
        merge_commit_message: 'this is test merge commit message.',
        should_remove_source_branch: true,
      }).then((r) => {
        r.state.should.equal('merged');
      });
    });
  });

  after(() => {
    apis.update(projectId, createdMRId, {
      state_event: 'close',
    });
  });

});
