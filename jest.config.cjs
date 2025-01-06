module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!react-router-dom|axios)/',  // Make sure jest transforms react-router-dom
    ],
    moduleNameMapper: {
      '\\.(css|scss|less)$': 'identity-obj-proxy',
      '^react-router-dom$': require.resolve('react-router-dom'),
      '^axios$': require.resolve('axios'),

    },
    testEnvironment: 'jsdom', // Simulate a browser-like environment
    moduleDirectories: ['node_modules', 'src'], // Ensure Jest can resolve 'src' imports
  };
  