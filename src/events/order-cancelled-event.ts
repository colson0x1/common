import { Subjects } from './subjects';

// Event to describe the order that was just cancelled
export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    // id of the order
    id: string;
    version: number;
    // id of the ticket that will be marked as being unreserved now
    ticket: {
      id: string;
    };
  };
}
