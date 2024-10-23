import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    // Since this OrderCreatedEvent will be converted to JSON so rather than
    // using a Date object for expiresAt, instead we're gonna say it a string
    // because we definitely want to convert that Date object into JSON or
    // into a string manually so we can control how the time zone on it gets set
    expiresAt: string;
    // Embed information about the ticket as well
    ticket: {
      id: string;
      price: number;
    };
  };
}
