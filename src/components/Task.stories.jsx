
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

export const Loading = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_IN_LOADING',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
};


export const Empting = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_IN_EMPTING',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ border: '2px dashed red', padding: '15px' }}>
        <Story />
      </div>
    ),
  ],
};
