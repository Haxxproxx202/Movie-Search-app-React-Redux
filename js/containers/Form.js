import {connect} from "react-redux";
import Form from "../components/Form";
import {addToList, addToToWatch, addWatched} from "../redux/actions/actions";

const mapStateToProps = (state) => {
    return {
        list: state.list,
        watchedList: state.watchedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (item) => dispatch(addToList(item)),
        addToToWatch: (item) => dispatch(addToToWatch(item)),
        addWatched: (item, rate) => dispatch(addWatched(item, rate))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
