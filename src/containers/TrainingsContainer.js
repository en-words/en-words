import { connect } from 'react-redux';

import { fetchTrainings, deleteTraining } from '../actions/trainingsAction';
import Trainings from '../components/trainings/Trainings';

const mapStateToProps = (state) => {
    return {
        trainingList: state.trainings.trainingList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrainings: () => dispatch(fetchTrainings()),
        deleteTraining: (id) => dispatch(deleteTraining(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainings);
