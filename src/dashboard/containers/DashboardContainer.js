import { connect } from 'react-redux';

import { fetchTrainings, deleteTraining } from '../actions/dashboardAction';
import Trainings from '../components/Dashboard';

const mapStateToProps = (state) => {
    return {
        trainingList: state.trainings.trainingList,
        groupList: state.groups.groupList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrainings: () => dispatch(fetchTrainings()),
        deleteTraining: (id) => dispatch(deleteTraining(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainings);
