const logger = (state) => (next) => (action) => {
    console.log(state.getState());
    console.log(action);
    const result = next(action);
    console.info("Next State", state.getState());
    console.groupEnd();
    return result;
    
}

export default logger;