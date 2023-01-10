import styles from './TrainingPrograms.module.scss'
import {connect} from "react-redux";
import ProgramsListLinks from "./ProgramList/ProgramsListLinks";
import {addComment, addProgram, editProgram} from "../../../redux/training-reducer";
import {Route, Routes} from "react-router-dom";
import ProgramCreateButton from "./ProgramCreateButton/ProgramCreateButton";
import React, {useState} from "react";
import ProgramExpand from "./ProgramExpand/ProgramExpand";
import { getPrograms} from "../../../redux/training-selectors";
import CreateProgramForm from "./ProgramCreate/CreateProgramForm";
import {
    MapDispatchToProps,
    MapStateToProps,
    OwnProps,
    TrainingProgramsContainerProps
} from "./TrainingProgramsContainer.types";
import {AppStateType} from "../../../redux/redux-store";


const TrainingProgramsContainer: React.FC<TrainingProgramsContainerProps> = ({
                                                                                 programs,
                                                                                 addProgram, editProgram,
                                                                                 addComment
                                                                             }) => {

    const [program, setProgram] = useState();
    const [programValue, setProgramValue] = useState();


    const getProgram = (value?: any) => {
        setProgram(value.id);
        setProgramValue(value);
    }

    return (

        <div className={styles.trainProgramContainer}>
            <div className={styles.programsList}>

                <ProgramCreateButton/>
                <ProgramsListLinks  programs={programs} getProgram={getProgram}/>

            </div>
            <div className={styles.programsContent}>

                <Routes>
                    <Route path={'create/'} element={<CreateProgramForm
                        isEditor={false} addProgram={addProgram}/>}/>

                    <Route path={":id"} element={<ProgramExpand
                        programId={program} programs={programs} addComment={addComment}/>}/>

                    <Route path={`:id/redactor/`} element={<CreateProgramForm
                        isEditor={true} programValue={programValue} editProgram={editProgram}/>}/>
                </Routes>

            </div>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    programs: getPrograms(state)
})

export default connect<MapStateToProps, MapDispatchToProps, OwnProps, AppStateType>
(mapStateToProps, {addProgram, addComment, editProgram})(TrainingProgramsContainer);