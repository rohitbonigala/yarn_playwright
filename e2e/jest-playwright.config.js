module.exports = {
  launchOptions: {
    // Set this option to false, and add slowMo: 100 to observe the test(s)
    headless: true,
    args: ['--start-fullscreen']
  },
  timeout: 60000,
  browsers: ['chromium', 'firefox', 'webkit']
};
