/**
 * A set of functions called "actions" for `get-questions`
 */

export default {
  getQuestions: async (ctx, next) => {
     try {
       const data = await strapi.service('api::get-questions.get-questions').getQuestions();
       ctx.body = data;
     } catch (err) {
       ctx.body = err;
    }
  }
};
