import React from "react";
import { Calendar } from "antd";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: React.FC<EventCalendarProps> = ({ events }: EventCalendarProps) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter((event) => event.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((event, index) => (
          <div key={index}>{event.description}</div>
        ))}
      </div>
    );
  }

  return <Calendar dateCellRender={dateCellRender} />;
};
