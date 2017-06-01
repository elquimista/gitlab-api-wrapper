'use strict';

const should = require('should');

const projectId = 177959;
const milestoneId = 7003;
const apis = require('../index')({
  private_token: 'DEsnNm4FyxZiyYKk47WM',
  base_url: 'http://gitlab.alibaba-inc.com',
  timeout: 3000,
}).projects.milestones;
let createdMilestoneId;

describe('projects.milestones', () => {

  describe('projects.milestones.list', () => {
    it('should return an array which is not empty.', () => {
      return apis.list(projectId).then((r) => {
        r.length.should.be.ok();
      });
    });
  });

  describe('projects.milestones.one', () => {
    it('should return an milestone object.', () => {
      return apis.one(projectId, milestoneId).then((r) => {
        r.id.should.equal(milestoneId);
      });
    });
  });

  describe('projects.milestones.create', () => {
    it('should return an milestone object.', () => {
      return apis.create(projectId, {
        title: 'test milestone.',
      }).then((r) => {
        createdMilestoneId = r.id;
        r.id.should.be.ok();
      });
    });
  });

  describe('projects.milestones.update', () => {
    it('should return an milestone object.', () => {
      return apis.update(projectId, createdMilestoneId, {
        description: 'test milestone description.',
      }).then((r) => {
        r.description.should.equal('test milestone description.');
      });
    });
  });

});
