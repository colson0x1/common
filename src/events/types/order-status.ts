export enum OrderStatus {
  /* @ STATE: Created
   * USES -> When the order has been created, but the ticket it is trying
   * to order has not been reserved
   */
  Created = 'created',

  /* @ STATE: Cancelled
   * USES -> The ticket the order is trying to reserve has already been
   * reserved, or when the user has cancelled the order Or The order expires
   * before payment
   * NOTE: All three of those are under one case 'cancelled'. We could
   * definately split them into three different statuses to get a better
   * idea as far as analytics goes of why orders are failing to actually be
   * processed
   * To keep it simple, I've just chosen 'cancelled'  to reflect those three
   * conditions because essentially for our purposes in order is either
   * kind of progressing through the stages and getting towards complete
   * or it has failed, in which case it will be simply marked as 'cancelled'
   */
  Cancelled = 'cancelled',

  /* @ STATE: AwaitingPayment
   * USES -> The order has successfuly reserved the ticket
   */
  AwaitingPayment = 'awaiting:payment',

  /* @ STATE: Complete
   * USES -> The order has reserved the ticket and the user has provided
   * payment successfully
   */
  Complete = 'complete',
}
