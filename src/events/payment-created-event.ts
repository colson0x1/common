import { Subjects } from './subjects';

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    // Whenever we create a payment and we tell the rest of the world that a
    // payment was just created, we're just going to share all the information
    // tied to the payment. So we'll share the id of the payment itself, the
    // id of the stripe charge and the id of the order asd well.
    id: string;
    orderId: string;
    // At present, no other part in this application really needs a stripeId
    // whatsoever because I don't have any other part of my app that's actually
    // going to reach out to the Stripe API.
    // But thinking towards the future here, maybe I will eventually will have
    // some additional service that verifies payments or handles returns or
    // who knows what. So there might eventually be another service in the
    // future that needs stripeId.
    stripeId: string;
  };
}
