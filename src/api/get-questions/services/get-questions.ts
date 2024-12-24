/**
 * get-questions service
 */

export default {
    getQuestions: async () => {
       try {
        const entries = await strapi.entityService.findMany(
            "api::question.question",
            {
                fields: ["id", "question", "correct_answer", "createdAt", "publishedAt", "solution"],
                populate: {
                    image_url: {
                        fields: ["url"]
                    },
                    options: {
                        fields: ["option_text"],
                    },
                    steps: {
                        fields: ["title", "result"],
                        populate: {
                            image_url: {
                                fields: ["url"]
                            }
                        }
                    }
                
                }
            }
        );

        let entriesReduced = [];
            if (entries && Array.isArray(entries)) {
                entriesReduced = entries.reduce((acc, item:any) => {
                    acc = acc || [];
                    acc.push({
                        id: item?.documentId || "",
                        Question: item.question || "",
                        CorrectAnswer: item.correct_answer || "",
                        Options: item.options.map(option => option.option_text) || [],
                        Steps: reduceSteps(item.steps),
                        ImageUrl: item.image_url.map(img => img.url) || [],
                    });
                    return acc;
                }, []);
            }
        
         return entriesReduced;
       } catch (err) {

      }
    },
  };
  
function reduceSteps(steps: any) {
    return steps.reduce((acc: any[], stp: any) => {
        acc.push({
            Title: stp.title || "",
            Result: stp.result || "",
            ImageUrl: stp.image_url.map(img => img.url) || {},
        });
        return acc;
    }, []);
}

