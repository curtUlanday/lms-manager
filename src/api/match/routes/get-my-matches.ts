export default {
  routes: [
    {
     method: 'GET',
     path: '/get-my-matches/:id/:status',
     handler: 'get-my-matches.getAllMyMatches',
     config: {
       policies: [],
       middlewares: [],
     },
    }
  ],
};
