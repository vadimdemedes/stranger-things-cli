import test from 'ava';
import execa from 'execa';
import strangerThings from 'stranger-things';

test('output random word', async t => {
	const {stdout} = await execa('node', ['cli']);
	t.true(strangerThings.all.includes(stdout));
});

test('output all words', async t => {
	const {stdout} = await execa('node', ['cli', '--all']);
	t.deepEqual(stdout.split('\n').sort(), strangerThings.all.sort());
});
