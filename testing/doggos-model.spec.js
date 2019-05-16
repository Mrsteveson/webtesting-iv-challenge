const db = require('../data/dbConfig');
const doggos = require('../doggos/doggos-model.js');

describe('doggos model', () => {

    beforeEach(async () => {
        await db('doggos').truncate();
    });

    it('should add provided doggo/status', async () => {
        await doggos.add({ name: 'Vincent', status: 'small boi'});

        const doggo = await db('doggos');
        expect(doggo).toHaveLength(1); 
    });

    it('should check for added doggo', async () => {
        await doggos.add({ name: 'Vincent', status: 'small boi'});

        const newDoggo = await doggos.findById(1)
        expect(newDoggo.name).toEqual('Vincent')
    })
        
    it('should remove specified doggo', async () => {
        await doggos.add({ name: 'Vincent', status: 'small boi'});
        await doggos.remove('1')

        const doggo = await db('doggos');
        expect(doggo).toHaveLength(0);
    });

    it('should remove specified doggo', async () => {
        await doggos.add({ name: 'Vincent', status: 'small boi'});
        await doggos.add({ name: 'Bailey', status: 'small gurl'});
        await doggos.remove('1')

        const doggo = await db('doggos');
        expect(doggo).toHaveLength(1);
    });
});