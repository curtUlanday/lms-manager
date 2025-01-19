export default {
  routes: [
    {
     method: 'GET',
     path: '/get-my-matches/:id',
     handler: 'get-my-matches.getAllMyMatches',
     config: {
       policies: [],
       middlewares: [],
     },
    }
  ],
};
