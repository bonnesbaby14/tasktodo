import react, { createContext,useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage"
const TaskContext = createContext();


const TaskProvider = ({ children }) => {


    const { items: tasks, saveItem: setTasks, loading, error } = useLocalStorage("TASK_V1", []);




    const [searchValue, setSearchValue] = useState('');
    const [modal, setModal] = useState(false);



    const completeTask = tasks.filter(task => task.status == true).length;
    const totalTaskComplete = tasks.length;

    var taskSearched = [];


    const completeTasks = (text) => {
        const taskIndex = tasks.findIndex(task => task.task == text);
        const newTasks = [...tasks];
        newTasks[taskIndex].status = true;

        setTasks(newTasks);

    }
    const deleteTask = (text) => {
        const taskIndex = tasks.findIndex(task => task.task == text);
        const newTasks = [...tasks];
        newTasks.splice(taskIndex, 1);

        setTasks(newTasks);

    }

    if (searchValue.length < 0) {
        taskSearched = tasks;
    } else {
        taskSearched = tasks.filter(task => {
            const taskSearch = task.task.toLocaleLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return taskSearch.includes(searchText);
        })
    }


    return <TaskContext.Provider
        value={
            {
                tasks,
                setTasks,
                loading,
                error,
                searchValue, 
                setSearchValue,
                modal,
                setModal, 
                completeTask,
                totalTaskComplete,
                taskSearched,
                completeTasks,
                deleteTask,



            }

        }
    >
        {children}
    </TaskContext.Provider>

}

export  {TaskContext,TaskProvider};