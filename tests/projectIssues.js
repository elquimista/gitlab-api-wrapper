'use strict';

const should = require('should');

const projectId = 177959;
const issueId = 132507;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 3000,
}).projects.issues;
let createdIssueId;

describe('projects.issues', () => {

  describe('projects.issues.listMy', () => {
    it('should return an array which is not empty.', () => {
      return apis.listMy(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.issues.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.issues.one', () => {
    it('should return an issue object.', () => {
      return apis.one(projectId, issueId).then((r) => {
        r.id.should.equal(issueId);
      });
    });
  });

  describe('projects.issues.create', () => {
    it('should return an issue object.', () => {
      return apis.create(projectId, {
        title: 'test issue',
      }).then((r) => {
        createdIssueId = r.id;
        r.title.should.equal('test issue');
      });
    });
  });

  describe('projects.issues.update', () => {
    it('should return an issue object.', () => {
      return apis.update(projectId, createdIssueId, {
        description: 'this is a test issue, will closed after created.',
        state_event: 'close',
      }).then((r) => {
        r.state.should.equal('closed');
      });
    });
  });

});
