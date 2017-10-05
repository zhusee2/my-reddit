// Because JSDOM does not ship with this while React v16 requires it.
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
