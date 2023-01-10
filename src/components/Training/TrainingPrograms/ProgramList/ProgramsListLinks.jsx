import styles from './ProgramsListLinks.module.scss'
import {ProgramLink} from "./ProgramLink/ProgramLink";
import React, {useEffect, useState} from "react";
import {ProgramsListLinksProps} from "./ProgramsListLinks.types";
import {collection, getDocs} from "firebase/firestore";
import {db} from '../../../../api/api';


const ProgramsListLinks = ({programs, getProgram}) => {

    const [todos, setTodos] = useState([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "programs"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);
            })

    }

    useEffect(()=>{
        fetchPost();
    }, [])


    return (
    <div>

        {todos.map((item, index) => (

            <ProgramLink key={index} to={'/training/training_programs/' + item.id}>
                <div className={styles.program} onClick={() => {
                    getProgram(item)
                }}>
                    <span>{item.title}</span>
                </div>
            </ProgramLink>

        ))}
    </div>
)}


export default ProgramsListLinks;