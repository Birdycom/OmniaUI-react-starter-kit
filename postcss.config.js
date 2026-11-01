import fs from 'node:fs';
import path from 'node:path';
import omniacss from '@birdycom/omniacss/postcss';

// OmniaCSS builds only the utilities and OmniaUI components the app uses. Components used through the React wrappers
// (<Badge>, <Progress> …) have their classes in the wrapper source, so the source file of every wrapper the app
// imports from @birdycom/omniaui-react is scanned too.
const wrappers = 'node_modules/@birdycom/omniaui-react/src/components';

function usedWrappers() {
    if (!fs.existsSync(wrappers)) {
        return [];
    }

    const exports = new Map();
    for (const file of fs.readdirSync(wrappers)) {
        for (const [, name] of fs
            .readFileSync(path.join(wrappers, file), 'utf8')
            .matchAll(/export (?:const|function) ([A-Z]\w*)/g)) {
            exports.set(name, `${wrappers}/${file}`);
        }
    }

    const used = new Set();
    for (const file of fs
        .readdirSync('resources/js', { recursive: true })
        .filter((f) => /\.tsx?$/.test(f))) {
        const source = fs.readFileSync(path.join('resources/js', file), 'utf8');
        for (const [, names] of source.matchAll(
            /import\s*\{([^}]+)\}\s*from\s*'@birdycom\/omniaui-react'/g,
        )) {
            for (const name of names
                .split(',')
                .map((n) => n.trim().split(/\s+as\s+/)[0])) {
                if (exports.has(name)) used.add(exports.get(name));
            }
        }
    }

    return [...used];
}

export default {
    plugins: [
        omniacss({
            content: [
                'resources/views/**/*.blade.php',
                'resources/js/**/*.{ts,tsx}',
                ...usedWrappers(),
            ],
        }),
    ],
};
