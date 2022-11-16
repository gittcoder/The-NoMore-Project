

const initState ={
    user:"",
    pwd:"",
    events:[],
    publicEvents:[],
    emptyClasses:[],
    sportsBooking:[],
    cabShare:[{id:1,fare:1000,date:new Date(2022,10,4),time:new Date(2022,10,4,13,0,0),dest:"Chennai",from:"VIT",owner:"test",phno:"123456789"},],
    loggedIn:false,
}
// {Id: 1,
//   Subject: "Explosion of Betelgeuse Star",
//   StartTime: new Date(2022, 10, 15, 9, 30),
//   EndTime: new Date(2022, 10, 15, 11, 0),
// },
// {
//   Id: 2,
//   Subject: "Thule Air Crash Report",
//   StartTime: new Date(2022, 10, 12, 12, 0),
//   EndTime: new Date(2022, 10, 12, 14, 0),
// },
// {
//   Id: 3,
//   Subject: "Blue Moon Eclipse",
//   StartTime: new Date(2022, 10, 13, 9, 30),
//   EndTime: new Date(2022, 10, 13, 11, 0),
// },
// {
//   Id: 4,
//   Subject: "Meteor Showers in 2018",
//   StartTime: new Date(2022, 10, 14, 13, 0),
//   EndTime: new Date(2022, 10, 14, 14, 30),
// },

const Reducer= (state=initState,action)=>{
      console.log(state);
      // console.log("Logging Events!!!");
      // console.log(action.event);
      
   
  if(action.type==='ADD_EVENT')
  {
    console.log(action.event.StartTime);
    state.events.push(action.event);
    console.log(state.events);
    return{
      ...state
    }
  }
  else if(action.type==='EDIT_EVENT')
  {
    console.log(action.event.StartTime);
    const index = state.events.findIndex(object => {
      return object.Id === action.id;
    });
    state.events[index]=action.event;
    
    console.log(state.events);
    return{
      ...state
    }
  }
  else if(action.type==='LOGIN')
  {
    console.log("Inside Login !!!!");
    initState.user=action.user;
      initState.pwd=action.pwd;
      for(var i in action.events)
      initState.events.push(action.events[i]);
      initState.loggedIn=true;
      console.log(initState);
  }
  return state;
    
}



// store.subscribe(()=>{
//     console.log("State Updated!!!");
//     console.log(store.getState());
// })


// const store = createStore(myReducer);

// const loginAction ={type:"LOGIN",user:"",pwd:"",events:{}};

// store.dispatch(loginAction);


export default Reducer;