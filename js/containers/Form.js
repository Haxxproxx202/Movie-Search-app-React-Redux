import {connect} from "react-redux";
import Form from "../components/Form";
import {addToList, addToWatchedList} from "../redux/actions/actions";

const mapStateToProps = (state) => {
    return {
        list: state.list,
        watchedList: state.watchedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (item) => dispatch(addToList(item)),
        addWatched: (item) => dispatch(addToWatchedList(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
