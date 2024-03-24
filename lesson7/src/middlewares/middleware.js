export const middleWareTask = (store) => (next) => (action) => {
    console.log("Действие: ", action);
    return next(action);

}