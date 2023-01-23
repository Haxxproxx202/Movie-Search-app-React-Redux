import {connect} from "react-redux";
import ToWatch from "../components/ToWatch";
const mapStateToProps = (state) => {
    return {
        toWatchList: state.toWatchList
    }
}

export default connect(mapStateToProps)(ToWatch);
