import {connect} from "react-redux";
import { bindActionCreators, Dispatch} from "redux";
import {RootState} from "../../redux/rootReducer";
import { getVaccinateCountry } from  '../../redux/dashboard/action';

const mapStateToProps = (state: RootState) => ({
    vaccinateCountry : state.dashboard.vaccinateCountry,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ getVaccinateCountry }, dispatch);
};

export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
    mapStateToProps,
    mapDispatchToProps
);