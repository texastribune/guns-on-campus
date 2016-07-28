// This is where all the configuration for the project should happen. The ideal
// arrangement would keep you out of the gulpfile entirely.

var config = {};

config.deploy = {
  bucket: 'apps.texastribune.org',
  key: 'guns-on-campus',
  profile: 'newsapps'
};

config.dataFolder = './data';
config.templateFolder = './app/templates';

config.data = {
  docs: [
    {
      fileid: '1Rh1dODfL0Zr8IDTmeHYCajHqYs00q9PxBvry6z_2DeA',
      name: 'story_one'
    },
    {
      fileid: '1tzjRyr2Ma2v_b8KCEQmQoy5fi55uijeHVWpxvKa4bCM',
      name: 'story_two'
    },
    {
      fileid: '1dr6uoe82Agwebh26kbQO8d47qnp2c-RHM9F7qr0sy3o',
      name: 'story_three'
    },
    {
      fileid: '1ukVxP4UOXevDY2KENwfbaaFvj5Li36NKMr1NmEUGb44',
      name: 'video'
    },
    {
      fileid: '1v8bt8zpQe75ifJ9Pew-P4lp931338APLzQobBar1a1g',
      name: 'whitman_in_film'
    }
  ],
  sheets: [
    {
      fileid: '1EAS1heGSlxEuq6Wf4y5VjaGLIp0LMH1xwnN0j8TVJIY',
      name: 'meta',
      copytext: {
        basetype: 'keyvalue'
      }
    }
  ]
};

module.exports = config;
