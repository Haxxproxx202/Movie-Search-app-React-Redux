import {connect} from "react-redux";
import Watched from "../components/Watched";
import {deleteItem} from "../redux/actions/actions";
import {watchedList} from "../redux/selectors";


const mapStateToProps = (state) => {
    return {
        list: watchedList(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id, url) => dispatch(deleteItem(id, url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Watched)