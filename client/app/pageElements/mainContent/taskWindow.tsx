import { useState } from "react";

const TaskWindow = () => {
  
  const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  return (
    <div>
      <div>
        <div>
          {daysOfWeek?.map((elem, i) => (
            <HeaderTask key={i} elem={elem}/>
          ))}
        </div> {/* task window header} */}
        <div>
            
        </div> {/* task window middle/calendar section} */}
        <div></div> {/* task window footer} */}
      </div>
    </div>
  )
}

const NewTask = ({}) => {

  const [isCalendar, SetIsCalendar] = useState(false);

  return (
    <button title="NewTask"></button>
    // {isCalendar && <Calendar/>}
  )
}

const Calendar = () => {

}

interface HeaderTaskProps {
  key: number;
  elem: string;
}

const HeaderTask = ({ key, elem }: HeaderTaskProps) => {
  return (
    <div>
      <div key={key}>
        <span>{elem}</span>   
      </div>
    </div>
  );
};


export default TaskWindow;