// @ Listing of all the possible Subjects
// Subjects in the world of NATS is the name of the Channel
// We can think of it Kind of like an event name

export enum Subjects {
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',

  OrderCreated = 'order:created',
  OrderCancelled = 'order:cancelled',

  ExpirationComplete = 'expiration:complete',
}
