import React, {useContext , useRef , useEffect} from "react";
import SimpleContext from "../../Context/SimpleContext";

const AddTask = () => {
    const {changeInput, task, addTask} = useContext(SimpleContext);
    const inputFocus = useRef(null);
    useEffect(() => {
        inputFocus.current.focus();
    })
    return (
        <form
            onSubmit={(event) => event.preventDefault()}
            className="input-group mb-3 justify-content-center"
        >
            <input
            ref={inputFocus}
                type="text"
                onChange={changeInput}
                value={task}
                style={{height: "100%"}}
            />
            <button
                type="submit"
                onClick={addTask}
                style={{borderRadius: "2px"}}
            >
                افزودن به لیست
            </button>
        </form>
    );
};

export default AddTask;
