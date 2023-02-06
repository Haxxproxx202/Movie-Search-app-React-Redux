const allList = state => state.list.filter(el => el.searched === true);
const watchedList = state => state.list.filter(el => el.watched === true);
const toWatchList = state => state.list.filter(el => el.towatch === true);

export {
    allList,
    watchedList,
    toWatchList
}