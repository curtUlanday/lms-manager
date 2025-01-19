/**
 * A set of functions called "actions" for `get-my-matches`
 */

export default {
  getAllMyMatches: async (ctx, next) => {
    try {
      console.log('ctx',ctx.params);
      const data = await strapi.service('api::match.get-my-matches').getAllMyMatches(ctx.params.id);
      ctx.body = data;
      // ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
