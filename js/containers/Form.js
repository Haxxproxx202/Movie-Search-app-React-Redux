import {connect} from "react-redux";
import Form from "../components/Form";
import { addToList, addToWatch, addWatched, deleteItem } from "../redux/actions/actions";

const mapStateToProps = (state) => {
    const searchedList = state.list.filter(el => el.searched === true);
    return {
        list: searchedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (item) => dispatch(addToList(item)),
        addWatched: (item, rate) => dispatch(addWatched(item, rate)),
        deleteItem: (id, url) => dispatch(deleteItem(id, url)),
        addToWatch: (item) => dispatch(addToWatch(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
