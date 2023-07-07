// https://stackoverflow.com/a/56095793
const util = require('util');
const exec = util.promisify(require('child_process').exec);

describe('The package.json file', () => {

  it('method-override should be installed', async () => {
    for (const file of ['package.json', 'package-lock.json']) {
      try {
        const { stdout } = await exec(`grep --only-matching --max-count 1 'method-override' ${file}`);
        expect(stdout.trim()).toBe('method-override');
      } catch (e) {
        try {
          expect(true).toBe(false);
        } catch (e) {
          throw new Error('method-override is not installed!');
        }
      }
    }
  });

  it('method-override should be required', async () => {
    for (const pattern of ["require('method-override')", "app.use(methodOverride('_method'))"]) {
      try {
        const { stdout } = await exec(`grep --only-matching --max-count 1 "${pattern}" server.js`);
        expect(stdout.trim()).toBe(pattern);
      } catch (e) {
        try {
          expect(true).toBe(false);
        } catch (e) {
          throw new Error('method-override is not required properly in server.js!');
        }
      }
    }
  });

});
