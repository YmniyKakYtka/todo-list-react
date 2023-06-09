import Button from "../../UI/Button/Button";
import styles from "../Header.module.css";

import trashSVG from "../../../images/trash.svg";

const SidebarHeader = (props) => {
    const clearAllTasksClickHandler = () => props.dispatch({type: "CLEAR_ALL_THE_TASKS"});

    return (
        <div className={styles.header}>
            <Button onClick={clearAllTasksClickHandler} image={trashSVG} text="Delete all tasks" />
        </div>
    );
}

export default SidebarHeader;