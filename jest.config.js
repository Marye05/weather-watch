global.fetch = require('node-fetch');

module.exports = {
  testEnvironment: 'jsdom',
  // Indica a Jest que transforme los archivos JS y JSX utilizando Babel
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  // Archivos a ignorar durante las pruebas
  testPathIgnorePatterns: ['../node_modules/'],
  // Extensiones de archivos a considerar en las pruebas
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  // Rutas de los archivos de prueba
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],

  
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      "../src/__tests__/styleMock.js",}
  };

    