module.exports = {
  preset: 'jest-puppeteer',
  rootDir: './..',
  testMatch: ['<rootDir>/**/*.test.js'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
  timers: 'fake',
};
