import {TasksService} from './tasks-service';

describe('TasksService', () => {

  let _mockServerService;

  let _mockTasks = [{
    owner: 'alice',
    description: 'Build the dog shed.',
    done: true
  }, {
    owner: 'bob',
    description: 'Get the milk.',
    done: false
  }, {
    owner: 'alice',
    description: 'Fix the door handle.',
    done: true
  }];

  beforeEach(() => {
    _mockServerService = {
      get: sinon.spy((url) => Promise.resolve(_mockTasks))
    };
  });

  it('should get loaded', function() {
    let tasksService = new TasksService(null, _mockServerService);
    chai.expect(tasksService.getTasks())
      .to.not.be.undefined;
  });

  it('should get tasks', () => {
    let tasksService = new TasksService(null, _mockServerService);

    return tasksService.getTasks()
      .then(tasks => {
        expect(tasks).to.deep.equal(_mockTasks);
      })
      .then(() => {
        expect(_mockServerService.get.calledOnce).to.be.true;
        expect(_mockServerService.get.calledWith('/api/v1/tasks')).to.be.true;
      })
  });
});
