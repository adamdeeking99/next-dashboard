import bcrypt from 'bcrypt';
 import { db } from '@vercel/postgres';
 import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const client = await db.connect();

 async function seedUsers() {
   await client.sql;
  await client.sql;

  const insertedUsers = await Promise.all(
     users.map(async (user) => {
       const hashedPassword = await bcrypt.hash(user.password, 10);
       return client.sql;
    }),
   );

   return insertedUsers;
 }

 async function seedInvoices() {
   await client.sql;

   await client.sql;

   const insertedInvoices = await Promise.all(
     invoices.map(
       (invoice) => client.sql,
    ),
   );

   return insertedInvoices;
}

async function seedCustomers() {
 await client.sql;
;

  const insertedCustomers = await Promise.all(
    customers.map(
       (customer) => client.sql,
    ),
  );

  return insertedCustomers;
 }

 async function seedRevenue() {
  await client.sql;

  const insertedRevenue = await Promise.all(
    revenue.map(
       (rev) => client.sql,
    ),
  );

  return insertedRevenue;
 }

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
   try {
     await client.sql;
     await seedUsers();
     await seedCustomers();
     await seedInvoices();
     await seedRevenue();
     await client.sql`COMMIT`;

     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await client.sql`ROLLBACK`;
     return Response.json({ error }, { status: 500 });
   }
}
