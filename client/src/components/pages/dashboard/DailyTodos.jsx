import { useQuery } from "@tanstack/react-query";

import Wrapper from "../../../styles/dashboard/TodoPageContent";
import axiosFetch from "../../../utilities/axiosFetch";
import Loading from "../../helpers/dashboard/Loading";
import TodoCard from "../../helpers/dashboard/TodoCard";

const DailyTodos = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["todos", "daily"],
    queryFn: async () => {
      const {
        data: { data },
      } = await axiosFetch.get("/todos/daily");
      return data ? data : [{ reminder: "*Robot noises* No todos found beep boop. Make one!" }];
    },
  });

  if (isPending) return <Loading />;

  if (isError) return <div>error...</div>;

  return (
    <Wrapper>
      {data.map((todo) => {
        return (
          <TodoCard
            key={todo._id}
            cardTitle="Todo"
            reminder={todo.reminder}
            title={todo.title}
            description={todo.description}
            importance={todo.importance}
            progress={todo.progress}
            deadline={todo.deadline}
            isPending={false}
            isModifiable={true}
          />
        );
      })}
    </Wrapper>
  );
};

export default DailyTodos;
