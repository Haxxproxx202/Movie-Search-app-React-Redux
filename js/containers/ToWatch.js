import {connect} from "react-redux";
import ToWatch from "../components/ToWatch";
import { addToWatch, deleteItem } from "../redux/actions/actions";
import {toWatchList} from "../redux/selectors";
const mapStateToProps = (state) => {
    return {
        toWatchList: toWatchList(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id, url) => dispatch(deleteItem(id, url)),
        addToWatch: (item) => dispatch(addToWatch(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToWatch);
