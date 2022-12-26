import {useState} from "react";

const useAddCourseState = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [typeId, setTypeId] = useState("");
    const [file, setFile] = useState("");
    const [level, setLevel] = useState("");
    const [duration, setDuration] = useState("");

    const getter = {
        title: title,
        description: description,
        typeId: typeId,
        file: file,
        level: level,
        duration: duration
    };
    const setter = [setTitle, setDescription, setTypeId, setFile, setLevel, setDuration];

    return {getter, setter};
};

export default useAddCourseState;