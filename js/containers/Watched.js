import {connect} from "react-redux";
import Watched from "../components/Watched";
import {deleteItem} from "../redux/actions/actions";


const mapStateToProps = (state) => {
    const watchedList = state.list.filter(el => el.watched === true);
    return {
        list: watchedList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id, url) => dispatch(deleteItem(id, url))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Watched)