import {connect} from "react-redux";
import ToWatch from "../components/ToWatch";
import {deleteItem} from "../redux/actions/actions";
const mapStateToProps = (state) => {
    return {
        toWatchList: state.toWatchList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id, url) => dispatch(deleteItem(id, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToWatch);
