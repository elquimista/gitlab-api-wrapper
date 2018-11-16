'use strict';

const jsdom = require('node-jsdom'); // eslint-disable-line
const fs = require('fs');

const jquery = fs.readFileSync('./jquery.js', 'utf-8');
// const test = fs.readFileSync('./test.html', 'utf-8');
const completeGitlabAPI = [];


function enterResource(url, callback) {
    return jsdom.env({
        url,
        src: [jquery],
        done: function (errors, window) {
            const allEntries = [];
            const $ = window.$;
            console.log('Reading resource...');
            $(':header').each(function () {
                console.log(' ');
                let title = $(this).attr('id');
                if (!title) {
                    return;
                }
                title = title.replace('-39-s', '');

                console.log('############# New Entry ##############');
                const description = $(this).nextAll('p').first().text();
                const api = $(this).nextAll('div').first().find('pre')
                    .text()
                    .split('\n')
                    .filter(e => e);

                console.log(`Title: ${title}`);
                console.log(`Description: ${description}`);
                console.log(`api: ${api}`);
                const entry = {
                    title,
                    description,
                    api,
                    params: [],
                };
                allEntries.push(entry);

                let currentNode = $(this);
                let skipCounter = 0;
                while (!currentNode.is('table') && !currentNode.is('ul') && skipCounter < 7) {
                    currentNode = currentNode.next();
                    skipCounter += 1;
                }

                if (currentNode.is('table')) {
                    $(this).nextAll('table').first().find('tbody')
                        .children()
                        .each(function () {
                            // table entries
                            console.log('-------- New Line.------------');
                            const tableEntries = ['attribute', 'type', 'required', 'description'];
                            let counter = 0;
                            const paramEntry = {};
                            entry.params.push(paramEntry);

                            // One entry
                            $(this).children().each(function () {
                                let singleEntry = $(this).text();

                                if ($(this).text() === '') {
                                    singleEntry = $(this).find('code').text();
                                }

                                console.log(`${tableEntries[counter]}: ${singleEntry}`);
                                paramEntry[tableEntries[counter]] = singleEntry;

                                counter += 1;
                            });
                        });
                } else if (currentNode.is('ul')) {
                    const listText = currentNode.children().first();
                    const attribute = listText.find('code').text();
                    const type = '';
                    const required = listText.text().indexOf('required') !== -1 ? 'required' : 'optional';
                    const paramDescription = listText.text().split('-')[1];

                    const paramEntry = {
                        attribute,
                        type,
                        required,
                        paramDescription,
                    };

                    entry.params.push(paramEntry);
                }
            });

            return callback(allEntries);
        },
    });
}

return jsdom.env({
    url: 'https://docs.gitlab.com/ee/api/README.html',
    src: [jquery],
    done: function (errors, window) {
        const $ = window.$;
        console.log('Links');
        // Get List of entries.
        $('#resources').next().next().children()
            .each(function () {
                const urlPart = $(this).children(':first').attr('href');
                console.log(urlPart);

                const url = `https://docs.gitlab.com/ee/api/${urlPart}`;
                enterResource(url, (allEntries) => {
                    const apiType = {
                        url,
                        urlPart,
                        allEntries,
                    };

                    completeGitlabAPI.push(apiType);
                    fs.writeFileSync('./result.json', JSON.stringify(completeGitlabAPI), 'utf-8');
                });
            });
    },
});
