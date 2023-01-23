import {connect} from "react-redux";
import Form from "../components/Form";
import {addToList, addToToWatch} from "../redux/actions/actions";

const mapStateToProps = (state) => {
    return {
        list: state.list,
        watchedList: state.watchedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (item) => dispatch(addToList(item)),
        addToToWatch: (item) => dispatch(addToToWatch(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
