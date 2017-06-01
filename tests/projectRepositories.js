'use strict';

const should = require('should');

const projectId = 177959;
const branch = 'master';
const sha = '252dc3c699e6368061493a8a64bc2382163a1a06';
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 20000,
}).projects.repositories;

describe('projects.repositories', () => {

  describe('projects.repositories.listTree', () => {
    it('should return an array which is not empty.', () => {
      return apis.listTree(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.repositories.rawFile', () => {
    it('should return string which is not empty.', () => {
      return apis.rawFile(projectId, branch, 'README.md').then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.repositories.rawBlobFile', () => {
    it('should return string which is not empty.', () => {
      return apis.rawBlobFile(projectId, sha).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.repositories.fileArchive', () => {
    it('should return string which is not empty.', () => {
      return apis.fileArchive(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.repositories.compare', () => {
    it('should return a compare object.', () => {
      return apis.compare(projectId, 'master', 'merge_branch').then((r) => {
        r.should.be.ok();
      });
    });
  });

  describe('projects.repositories.contributors', () => {
    it('should return an array which is not empty.', () => {
      return apis.contributors(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.repositories.getFile', () => {
    it('should return a file object.', () => {
      return apis.getFile(projectId, {
        file_path: 'README.md',
        ref: 'master',
      }).then((r) => {
        r.file_name.should.equal('README.md');
      });
    });
  });

  describe('projects.repositories.createFile', () => {
    it('should return an file object.', () => {
      return apis.createFile(projectId, {
        file_path: 'addfile',
        branch_name: 'merge_branch',
        content: 'test content',
        commit_message: 'add addfile',
      }).then((r) => {
        r.file_path.should.equal('addfile');
      });
    });
  });

  describe('projects.repositories.updateFile', () => {
    it('should return an file object.', () => {
      return apis.updateFile(projectId, {
        file_path: 'addfile',
        branch_name: 'merge_branch',
        content: 'updated test content',
        commit_message: 'update addfile',
      }).then((r) => {
        r.file_path.should.equal('addfile');
      });
    });
  });

  describe('projects.repositories.deleteFile', () => {
    it('should return an file object.', () => {
      return apis.deleteFile(projectId, {
        file_path: 'addfile',
        branch_name: 'merge_branch',
        commit_message: 'update addfile',
      }).then((r) => {
        r.file_path.should.equal('addfile');
      });
    });
  });

});
