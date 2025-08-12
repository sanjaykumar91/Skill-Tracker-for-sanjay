module.exports = {
    testEnvironment: 'jsdom',
      moduleDirectories: ['node_modules', 'src'],
        moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
          moduleNameMapper: {
                '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
          },
            setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
            };