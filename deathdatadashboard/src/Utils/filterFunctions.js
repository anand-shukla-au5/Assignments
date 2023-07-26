export const filterStateWiseData = (data) => {
    const stateWise = {};

    data.forEach(item => {
        const updates = item.update.split('\n').filter(str => str.trim().length > 0);
        updates.forEach(update => {
            const words = update.split(' ');
            const count = parseInt(words[0], 10);
            const type = words[1];
            const stateIndex = words.findIndex(word => /^[A-Z][a-z]+$/.test(word));
            const state = words.slice(stateIndex).join(' ');

            if (!stateWise[state]) {
                stateWise[state] = {
                    cases: 0,
                    recoveries: 0,
                    deaths: 0,
                };
            }

            if (type === 'new' && words.includes('cases')) {
                stateWise[state].cases += count;
            } else if (type === 'recoveries') {
                stateWise[state].recoveries += count;
            } else if (type === 'deaths') {
                stateWise[state].deaths += count;
            }
        });
    });

    return stateWise;
};

export const filterCaseWiseData = (data) => {
    const caseWiseData = {
        cases: 0,
        recoveries: 0,
        deaths: 0,
    };

    data.forEach(item => {
        const updates = item.update.split('\n').filter(str => str.trim().length > 0);
        updates.forEach(update => {
            const words = update.split(' ');
            const count = parseInt(words[0], 10);
            const type = words[1];

            if (type === 'new' && words.includes('cases')) {
                caseWiseData.cases += count;
            } else if (type === 'recoveries') {
                caseWiseData.recoveries += count;
            } else if (type === 'deaths') {
                caseWiseData.deaths += count;
            }
        });
    });

    return caseWiseData;
};