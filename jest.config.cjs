module.exports = {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!react-router-dom|axios)/',  
    ],
    moduleNameMapper: {
      '\\.(css|scss|less)$': 'identity-obj-proxy',
      '^react-router-dom$': require.resolve('react-router-dom'),
      '^axios$': require.resolve('axios'),

    },
    testEnvironment: 'jsdom', 
    moduleDirectories: ['node_modules', 'src'], 
  };
  