import {connect} from "react-redux";
import Form from "../components/Form";
import {addToList} from "../redux/actions/actions";

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (item) => dispatch(addToList(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);
