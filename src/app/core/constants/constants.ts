export const constants = {
    CURRENT_TOKEN: 'CURRENT_TOKEN',
  };
  
  const apiurl = 'http://http://localhost:5119/shusha'; 
  const apiurl1 = 'http://http://localhost:5119/todo';
  
  export const apiEndpoint = {
    AuthEndpoint: {
      login: `${apiurl}/login`,
      logout: `${apiurl}/logout`,
      loggedUser: `${apiurl}/user`,
    },
    TodoEndpoint: {
      getAllTodo: `${apiurl1}/todo`,
      addTodo: `${apiurl1}/todo`,
      updateTodo: `${apiurl1}/todo`,
    },
  };