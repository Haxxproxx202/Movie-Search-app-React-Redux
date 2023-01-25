import {connect} from "react-redux";
import Form from "../components/Form";
import {addToList, addToToWatch, addWatched, deleteItem} from "../redux/actions/actions";

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (item) => dispatch(addToList(item)),
        addToToWatch: (item) => dispatch(addToToWatch(item)),
        addWatched: (item, rate) => dispatch(addWatched(item, rate)),
        deleteItem: (id, url) => dispatch(deleteItem(id, url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
