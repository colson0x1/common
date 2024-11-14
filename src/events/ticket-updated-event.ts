import { Subjects } from './subjects';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    // `orderId` is marked as optional because it is possible that we're going
    // to update a ticket and then it will not have a defined `orderId`
    orderId?: string;
  };
}
