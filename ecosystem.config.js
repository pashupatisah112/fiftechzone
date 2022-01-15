module.exports = {
    apps: [
      {
        name: 'Fiftechzone',
        port:'3001',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }