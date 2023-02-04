import {connect} from "react-redux";
import ToWatch from "../components/ToWatch";
import {addToWatch, deleteItem} from "../redux/actions/actions";
const mapStateToProps = (state) => {
    const toWatchList = state.list.filter(el => el.towatch === true);
    return {
        toWatchList: toWatchList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id, url) => dispatch(deleteItem(id, url)),
        addToWatch: (item) => dispatch(addToWatch(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToWatch);
