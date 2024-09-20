import { FaTrashAlt } from "react-icons/fa";

interface TaskEditButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <form action="">
      <button
        type="submit"
        className="hover:text-gray-700 text-ls cursor-pointer"
      >
        <FaTrashAlt />
      </button>
    </form>
  );
};

export default TaskDeleteButton;
