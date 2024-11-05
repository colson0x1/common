import { Subjects } from './subjects';

// Event to describe the order that was just cancelled
export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  version: number;
  data: {
    // id of the order
    id: string;
    // id of the ticket that will be marked as being unreserved now
    ticket: {
      id: string;
    };
  };
}
