import {connect} from "react-redux";
import Watched from "../components/Watched";


const mapStateToProps = (state) => {
    return {
        list: state.watchedList
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//     }
// }


export default connect(mapStateToProps)(Watched)