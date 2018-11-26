'use strict';

const jsonDef = require('../result_21-11-18-fixed.json');
const fs = require('fs');
// const JsDiff = require('diff');

const newResult = [];

jsonDef.forEach((api) => {
    const newEntrys = {};
    newResult.push(newEntrys);
    newEntrys.url = api.url;
    newEntrys.urlPart = api.urlPart;
    newEntrys.allEntries = [];

    api.allEntries.forEach((entry) => {
        entry.api = entry.api.filter(e => e.indexOf('?') === -1 && e.indexOf('=>') === -1);

        if (entry.api.length === 0) {
            console.error(`No api defined for title: ${entry.title}`);

            return;
        }

        if (entry.api.length === 1) {
            newEntrys.allEntries.push(entry);

            return;
        }
        console.log('----------------------------');
        console.log(`More than one api defined for title: ${entry.title} Rewrite titles`);

        const functionNames = [];
        for (let i = 0; i < entry.api.length; i++) {
            const splitO = entry.api[i].split('/');
            for (let k = 0; k < entry.api.length; k++) {
                const splitI = entry.api[k].split('/');

                for (let s = 0; s < splitI.length; s++) {
                    if (splitO.length > s && splitO[s] !== splitI[s]) {
                        let functionName = `${entry.title}-${splitI[s]}`;
                        functionName = functionName.replace(/_/g, '');
                        if (functionName.indexOf(':') === -1 && functionNames.indexOf(functionName) === -1) {
                            functionNames.push(functionName);
                            console.log(`Add function: ${functionName}`);
                            const entryCopy = JSON.parse(JSON.stringify(entry));
                            entryCopy.api = [];
                            entryCopy.api.push(entry.api[k]);
                            console.log(`With api: ${entry.api[k]}`);
                            entryCopy.title = functionName;

                            newEntrys.allEntries.push(entryCopy);
                        }
                    }
                }
            }
        }
    });
});

fs.writeFileSync('result-fixed.json', JSON.stringify(newResult));

