import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActivityGrid from '../components/activityGrid';
import {getActivityData} from '../util/utils'

const mapStateToProps = state => ({
   activityData: getActivityData(state.activityData)
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(ActivityGrid);