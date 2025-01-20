
const { errors } = require('@strapi/utils');
const { ApplicationError } = errors;

export default {
    // beforeCreate: async (event) => {
    //     const updateValues = event.params.data;
    //     console.log('updateValues', updateValues);
    //     if(updateValues.players.connect.length > 2) {
    //         throw new ApplicationError('You can only have 2 players in a match');
    //     }

    // },

    beforeUpdate: async (event) => {
        const updateValues = event.params.data;
        const recordFilter = event.params.where.id;

        const updateValuesPlayerList = event.params.data.players.set.map(player => player.id).sort();

        if(updateValues.players.set.length > 2) {
            throw new ApplicationError('You can only have 2 players in a match');
        }

        const entityBeforeUpdate:any = await strapi.entityService.findOne('api::match.match', recordFilter, {
            populate: { players: true },
        });

        const allowedPlayers = entityBeforeUpdate?.players.map(player => player.id).sort();

        const allElementsMatch = allowedPlayers.every(element => updateValuesPlayerList.includes(element));


        if(!allElementsMatch) {
            throw new ApplicationError('You can only update the players in a match');
        }

        
    }
  };