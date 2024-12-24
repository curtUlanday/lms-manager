export default {
  routes: [
    {
     method: 'GET',
     path: '/get-questions',
     handler: 'get-questions.getQuestions',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
