# `@tixvibe/common` Documentation

The `@tixvibe/common` library is a shared library for the TixVibe microservices architecture. It provides reusable code and abstractions that ensure consistency and reduce duplication across services. This includes base classes for event handling, middleware, and shared utilities.

[TixVibe Microservices Github Repository](https://github.com/colson0x1/TixVibe-microservices)

---

## **Features**

### 1. **Event-Driven Communication**

The library includes base classes for implementing an event-driven architecture using NATS Streaming:

- **Base Publisher**: Abstracts the logic for publishing events.
- **Base Listener**: Provides a consistent way to listen to events with automatic acknowledgment and error handling.

### 2. **Shared Models and DTOs**

Defines shared TypeScript models and Data Transfer Objects (DTOs) used by multiple services, ensuring consistent data structures across the microservices.

### 3. **Middleware Utilities**

Reusable Express.js middleware for common tasks such as:

- Authentication and authorization.
- Error handling.
- Request validation.

### 4. **Error Handling**

Custom error classes to standardize error responses, including:

- `BadRequestError`
- `NotFoundError`
- `DatabaseConnectionError`
- `UnauthorizedError`

### 5. **TypeScript Support**

Fully typed library with interfaces and types to improve developer experience and reduce runtime errors.

---

## **Installation**

To use `@tixvibe/common` in your microservices, install it as a dependency:

```bash
npm install @tixvibe/common
```

Or with Yarn:

```bash
yarn add @tixvibe/common
```

---

## **Usage**

### 1. **Event Handling**

#### **Publisher Example**

To publish an event, extend the `Publisher` class and define the event type:

```typescript
import { Publisher, Subjects, TicketCreatedEvent } from '@tixvibe/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

const publisher = new TicketCreatedPublisher(natsClient);
await publisher.publish({
  id: '1111',
  title: 'Tomorrowland 2026',
  price: 3300,
  userId: 'stillhome',
});
```

#### **Listener Example**

To listen for an event, extend the `Listener` class and define the event type and subject:

```typescript
import { Listener, Subjects, TicketCreatedEvent } from '@tixvibe/common';
import { Message } from 'node-nats-streaming';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = 'payments-service';

  async onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Event data:', data);

    // Business logic here

    msg.ack();
  }
}

const listener = new TicketCreatedListener(natsClient);
listener.listen();
```

### 2. **Middleware**

#### **Authentication Middleware**

Protect routes by verifying the JWT of incoming requests:

```typescript
import { requireAuth } from '@tixvibe/common';

app.get('/secure-route', requireAuth, (req, res) => {
  res.send('This route is protected');
});
```

#### **Error Handling Middleware**

Handle errors in a consistent format across services:

```typescript
import { errorHandler, NotFoundError } from '@tixvibe/common';

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);
```

### 3. **Custom Errors**

Throw standardized errors in your services for easier debugging and consistent error responses:

```typescript
import { BadRequestError } from '@tixvibe/common';

if (!user) {
  throw new BadRequestError('User not found');
}
```

---

## **Directory Structure**

```
tixvibe/common
├── src
│   ├── events
│   │   ├── base-listener.ts
│   │   ├── base-publisher.ts
│   │   ├── subjects.ts
│   │   ├── ticket-created-event.ts
│   │   └── ticket-updated-event.ts
│   ├── errors
│   │   ├── bad-request-error.ts
│   │   ├── custom-error.ts
│   │   ├── database-connection-error.ts
│   │   ├── not-found-error.ts
│   │   └── unauthorized-error.ts
│   ├── middleware
│   │   ├── error-handler.ts
│   │   ├── require-auth.ts
│   │   └── validate-request.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

---

## **License**

`@tixvibe/common` is licensed under the MIT License. See the LICENSE file for details.
