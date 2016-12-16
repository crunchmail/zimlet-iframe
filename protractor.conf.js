exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  baseUrl: 'http://localhost:4000/local/#/',
  params: {
      "apiUrl": 'https://api.munch/',
      "apiVersion": 'https://api.munch/v1/'
  }
};
