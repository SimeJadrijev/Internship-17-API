import { PrismaClient } from '@prisma/client';
import { error } from 'console';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { username: 'Sime' },
    update: {},
    create: {
      username: 'Sime',
      password: 'password123',
      isAdmin: true,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: 'Toni' },
    update: {},
    create: {
      username: 'Toni',
      password: 'password123',
      isAdmin: false,
    },
  });

  const category1 = await prisma.category.upsert({
    where: { name: 'Electronics' },
    update: {},
    create: {
      name: 'Electronics',
    },
  });

  const category2 = await prisma.category.upsert({
    where: { name: 'T-shirts' },
    update: {},
    create: {
      name: 'T-shirts',
    },
  });

  const product1 = await prisma.product.upsert({
    where: { title: 'Apple Airpods 2' },
    update: {},
    create: {
      title: 'Apple Airpods 2',
      description:
        "Apple Airpods 2 headphones come with a portable charging case. Apple's wireless headphones connect very easily to all your Apple devices and provide an amazing experience in listening to music, talking and communicating with the Siri assistant.",
      image:
        'https://www.links.hr/content/images/thumbs/006/0063058_slusalice-apple-airpods-2-kutijica-za-punjenje-in-ear-mikrofon-bijele.jpg',
      price: 159.99,
      available: 20,
      categoryId: category1.id,
    },
  });

  const product2 = await prisma.product.upsert({
    where: { title: 'SLAM T-shirt - Anthony Edwards' },
    update: {},
    create: {
      title: 'SLAM T-shirt - Anthony Edwards',
      description:
        'Facts only. Everybody loves Anthony Edwards because he simles, laughs and jokes around. Then he immediately goes out and sends foolish defenders that try to meet him at the rim to their untimely doom. 100% cotton short-sleeved t-shirt.',
      image:
        'https://slamgoods.com/cdn/shop/products/slam-cover-tee-anthony-edwards-slam-233-375871.jpg?v=1705024541',
      price: 45.0,
      available: 30,
      categoryId: category2.id,
    },
  });

  const wishlistItem1 = await prisma.wishlistItem.create({
    data: {
      userId: user1.id,
      productId: product1.id,
    },
  });

  const wishlistItem2 = await prisma.wishlistItem.create({
    data: {
      userId: user2.id,
      productId: product2.id,
    },
  });

  const cartItem1 = await prisma.cartItem.create({
    data: {
      quantity: 2,
      userId: user1.id,
      productId: product1.id,
    },
  });

  const cartItem2 = await prisma.cartItem.create({
    data: {
      quantity: 3,
      userId: user2.id,
      productId: product2.id,
    },
  });

  const order1 = await prisma.order.create({
    data: {
      userId: user1.id,
    },
  });

  const order2 = await prisma.order.create({
    data: {
      userId: user2.id,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
