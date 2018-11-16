'use strict';

const async = require('async');
const fs = require('fs');
const jsonDef = require('./result_complete2.json');


function prefix(descriptionName, className) {
    return `
'use strict';

const ModelBase = require('../modelBase');

/**
 * Class representing ${descriptionName}.
 */
class ${className} extends ModelBase {

     /**
     * Create ${descriptionName}.
     * @param client
     */
    constructor(client) { // eslint-disable-line no-useless-constructor
        super(client);
    }
`;
}

function descFunction(description) {
    return `

    /**
     * ${description}.
`;
}

function paramOther(name, type, desc) {
    return `
     * @param ${name} {${type}} - ${desc}`;
}

const paramsDesc =
    `
     * @param params {object}`;

function paramsParams(name, type, desc) {
    return `
     * @param params.${name} {${type}} - ${desc}`;
}

const returns =
    `
     * @returns {*}
     */
`;

function createfunctionDefinition(functionName, params, _api) {
    let api = _api;
    if (api.length === 0) {
        console.log(`No api definitions in: ${functionName}`);

        return null;
    }
    if (api.length > 1) {
        console.log(`More api definitions in: ${functionName}`);
        // api.forEach((e) => {
        //    console.log(e);
        // });
        console.log('Filter api...');
        api = api.filter(e => e.indexOf('?') === -1);

        if (api.length === 1) {
            console.log(`Selected api is: ${api[0]}`);
        } else {
            console.log('Still more than one api defined:');
            api.forEach((e) => {
                console.log(e);
            });

            console.log('Skip.');

            return null;
        }
    }

    let returnStatement = 'return ';

    let method = api[0].split(' ')[0];
    let url = api[0].split(' ')[1];
    if (method.indexOf('/') !== -1) {
        console.log(`No method defined in ${functionName}. Fallback to get.`);

        method = 'GET';
        url = api[0].split(' ')[0].trim();
    }

    if (!url) {
        console.log(`No url defined in: ${functionName}`);


        return null;
    }

    url = url.trim();
    method = method.trim();

    if (method.startsWith('GET')) {
        // GET /projects/:id/variables
        returnStatement += 'this.http.get(`';
    } else if (method.startsWith('PUT')) {
        returnStatement += 'this.http.put(`';
    } else if (method.startsWith('POST')) {
        returnStatement += 'this.http.post(`';
    } else if (method.startsWith('DELETE')) {
        returnStatement += 'this.http.delete(`';
    } else {
        console.log(`Not supported api in: ${functionName}`);
        console.log('Skip.');

        return null;
    }

    let rest = url;
    let sig = '';
    while (rest.indexOf(':') !== 0) {
        returnStatement += rest.split(':')[0];
        const endPart = rest.substring(rest.indexOf(':'), rest.length);

        if (endPart.indexOf('/') !== -1 && endPart.indexOf('/') !== 0) {
            const variable = endPart.substring(1, endPart.indexOf('/'));
            returnStatement += `\${encodeURIComponent(${variable})}`;
            rest = endPart.substring(variable.length + 1);
            sig += `${variable}, `;
        } else {
            if (rest.split(':').length > 1) {
                const variable = rest.split(':')[1];
                returnStatement += `\${encodeURIComponent(${variable})}`;
                sig += `${variable}, `;
            }
            break;
        }
    }
    returnStatement += '`, params); // eslint-disable-line quotes';
    if (sig) {
        return `
    ${functionName}(${sig}params) { // eslint-disable-line camelcase
        ${returnStatement}
    }`;
    }

    return `
    ${functionName}(params) {
        ${returnStatement}
    }`;
}


function appendix(className) {
    return `

}

module.exports = ${className};

`;
}


return async.series(jsonDef.map((apiType) => {
    return function (callback) {
        // Classname
        const classNameSplit = apiType.urlPart.split(/[_\\.]/);

        let className = '';
        for (let i = 0; i < classNameSplit.length - 1; i++) {
            className += classNameSplit[i].charAt(0).toUpperCase() + classNameSplit[i].slice(1);
        }

        className = className.replace('/', '_');

        console.log(`Start creating class: ${className}`);

        if (className === 'V3ToV4') {
            console.log('SKIP.');

            return callback();
        }

        let fileName = classNameSplit[0];
        fileName = fileName.replace('/', '_');
        for (let i = 1; i < classNameSplit.length - 1; i++) {
            fileName += classNameSplit[i].charAt(0).toUpperCase() + classNameSplit[i].slice(1);
        }

        let descriptionName = '';
        for (let i = 0; i < classNameSplit.length - 1; i++) {
            descriptionName += `${classNameSplit[i].charAt(0).toUpperCase() + classNameSplit[i].slice(1)} `;
        }

        let newClass = '';
        newClass += prefix(descriptionName, className);

        apiType.allEntries.forEach((e) => {
            const functionNameSplit = e.title.split('-');

            let functionName = functionNameSplit[0];
            for (let i = 1; i < functionNameSplit.length; i++) {
                functionName += functionNameSplit[i].charAt(0).toUpperCase() + functionNameSplit[i].slice(1);
            }


            const functionDefinition = createfunctionDefinition(functionName, e.params, e.api);
            if (functionDefinition === null) {
                return;
            }
            newClass += descFunction(e.description);
            // newClass += paramId;
            e.params.forEach((p) => {
                if (e.api[0].indexOf(p.attribute) !== -1 && e.api[0].charAt(e.api[0].indexOf(p.attribute) - 1) === ':') {
                    newClass += paramOther(p.attribute, p.type, p.description);
                }
            });

            newClass += paramsDesc;
            e.params.forEach((p) => {
                if (e.api[0].indexOf(p.attribute) === -1 ||
                    (e.api[0].indexOf(p.attribute) !== -1 && e.api[0].charAt(e.api[0].indexOf(p.attribute) - 1) !== ':')) {
                    newClass += paramsParams(p.attribute, p.type, p.description);
                }
            });

            newClass += returns;

            newClass += functionDefinition;
        });

        newClass += appendix(className);

        return fs.writeFile(`../lib/models/${fileName}.js`, newClass, (err) => {
            if (err) {
                console.log(err);
            }

            console.log('Done');

            return callback();
        });
    };
}), (err) => {
    if (err) {
        console.log(err);
    }
    console.log('done');

    process.exit(0);
});

