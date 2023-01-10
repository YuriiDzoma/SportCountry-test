import styles from './TrainingPrograms.module.scss'
import {connect} from "react-redux";
import ProgramsListLinks from "./ProgramList/ProgramsListLinks";
import {addComment, addProgram, editProgram} from "redux/training-reducer";
import {Route, Routes} from "react-router-dom";
import ProgramCreateButton from "./ProgramCreateButton/ProgramCreateButton";
import React, {useEffect, useState} from "react";
import ProgramExpand from "./ProgramExpand/ProgramExpand";
import { getPrograms } from "redux/training-selectors";
import CreateProgramForm from "./ProgramCreate/CreateProgramForm";
import {
    MapDispatchToProps,
    MapStateToProps,
    OwnProps,
    TrainingProgramsContainerProps
} from "./TrainingProgramsContainer.types";
import {AppStateType} from "redux/redux-store";
import {collection, getDocs} from "firebase/firestore";
import {db} from "api/api";


const TrainingProgramsContainer = ({
                                                                                 addProgram, editProgram,
                                                                                 addComment
                                                                             }) => {

    const [program, setProgram] = useState();
    const [programValue, setProgramValue] = useState();


    const getProgram = (value) => {
        setProgram(value.id);
        setProgramValue(value);
    }

    const [programs, setPrograms] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(db, "programs"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setPrograms(newData);
            })
    }

    useEffect(()=>{
        fetchPost();
    }, [])

    return (

        <div className={styles.trainProgramContainer}>
            <div className={styles.programsList}>

                <ProgramCreateButton/>
                <ProgramsListLinks getProgram={getProgram} programs={programs}/>

            </div>
            <div className={styles.programsContent}>

                <Routes>
                    <Route path={'create/'} element={<CreateProgramForm
                        isEditor={false} addProgram={addProgram}/>}/>

                    <Route path={":id"} element={<ProgramExpand
                        programId={program} addComment={addComment} programs={programs}/>}/>

                    <Route path={`:id/redactor/`} element={<CreateProgramForm
                        isEditor={true} programValue={programValue} editProgram={editProgram}/>}/>
                </Routes>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    programs: getPrograms(state)
})

export default connect(mapStateToProps, {addProgram, addComment, editProgram})(TrainingProgramsContainer);