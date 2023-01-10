import ProgramExpandInfo from "./ProgramExpandInfo/ProgramExpandInfo";
import ProgramExpandComments from "./ProgramExpandComments/ProgramExpandComments";
import {ProgramExpandProps} from "./ProgramExpand.types";
import React, {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../../api/api";

const ProgramExpand = ({programs, programId, addComment}) => {

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
            {todos.map((item, index) => {
                if (item.id === programId) {

                    return (
                        <div key={index}>
                            <ProgramExpandInfo item={item}/>
                            <ProgramExpandComments addComment={addComment} program={item}/>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default ProgramExpand;