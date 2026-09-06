// Data Platform Lab: document-oriented read model

// Run in a MongoDB shell / OneCompiler MongoDB editor.

db.orders.insertMany([
  {
    orderId: 1001,
    customerId: 1,
    status: 'CREATED',
    totalAmount: 1499,
    items: [
      { productId: 101, quantity: 1, unitPrice: 999 },
      { productId: 102, quantity: 1, unitPrice: 500 }
    ],
    events: [
      { type: 'OrderCreated', at: new Date() }
    ]
  },
  {
    orderId: 1002,
    customerId: 2,
    status: 'PAID',
    totalAmount: 899,
    items: [
      { productId: 103, quantity: 1, unitPrice: 899 }
    ],
    events: [
      { type: 'OrderCreated', at: new Date() },
      { type: 'OrderPaid', at: new Date() }
    ]
  }
]);

// Read model query
printjson(
  db.orders.find(
    { customerId: 2 },
    { _id: 0, orderId: 1, status: 1, totalAmount: 1, events: 1 }
  ).toArray()
);

// Aggregation exercise: total value by status
printjson(
  db.orders.aggregate([
    {
      $group: {
        _id: '$status',
        orderCount: { $sum: 1 },
        totalValue: { $sum: '$totalAmount' }
      }
    },
    { $sort: { totalValue: -1 } }
  ]).toArray()
);
