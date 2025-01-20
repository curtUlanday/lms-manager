/**
 * A set of functions called "actions" for `get-my-matches`
 */

export default {
  getAllMyMatches: async (ctx, next) => {
    try {
      const data = await strapi.service('api::match.get-my-matches').getAllMyMatches(ctx.params);
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
