/**
 * get-my-matches service
 */


export default {
    getAllMyMatches: async (userId) => {
       try {
        console.log('get-my-matches service');
        let matchRawData:any = await strapi.entityService.findMany(
            "api::match.match",
            {
                filters: {
                    match_status: 'Ongoing',
                },
                fields: ["id", "match_status"],
                populate: {
                    host_id: {
                        fields: ["id", "username", "email"],
                    },
                    players: {
                        fields: ["id", "username", "email"],
                    },
                    rounds: {
                        fields: ["id"],
                        populate: {
                            question_contexts: {
                                fields: ["id", "question", "correct_answer"],
                            },
                            player_answer_data: {
                                fields: ["answer_text", "time_taken"],
                                populate: {
                                    answered_by: {
                                        fields: ["id", "username"],
                                    },
                                },
                            }
                        },
                        sort: {
                            createdAt: "desc"
                        }
                    }
                },
            }
        );

        matchRawData.forEach(matchData => {
            if(matchData.rounds.length > 0){
                matchData.rounds = swapPlayerAnswerData(matchData.rounds, matchData.host_id.documentId);
            }
        });
        return matchRawData;
       } catch (err) {

      }
    },
};

function swapPlayerAnswerData(rounds, hostId) {
    rounds.forEach(round => {
        const index = round.player_answer_data.findIndex(data => data.answered_by.documentId === hostId);
        if (index > 0) {
            const temp = round.player_answer_data[0];
            round.player_answer_data[0] = round.player_answer_data[index];
            round.player_answer_data[index] = temp;
        }
    });

    return rounds;
}
  

