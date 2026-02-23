import { SmallButton, Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  allTasksDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
} from "../../tasksSlice.js";

const Buttons = () => {

  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
      {!areTasksEmpty && (
        <>
          <SmallButton
            onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"}  ukończone
          </SmallButton>
          <SmallButton
            onClick={() => dispatch(allTasksDone())}
            done={isEveryTaskDone}
          >Ukończ wszystkie
          </SmallButton>
        </>
      )}
      </Wrapper>
    </>
    
  )
};

export default Buttons;