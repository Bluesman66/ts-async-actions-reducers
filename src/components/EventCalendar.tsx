import React from "react";
import { Calendar } from "antd";
import { IEvent } from "../models/IEvent";

interface EventCalendarProps {
  events: IEvent[];
}

export const EventCalendar: React.FC<EventCalendarProps> = (props: EventCalendarProps) => {
  return <Calendar />;
};
