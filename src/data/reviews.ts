
export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userId: "user1",
    userName: "Mike Johnson",
    rating: 5,
    title: "Incredible performance and quality!",
    comment: "This drone exceeded all my expectations. The camera quality is outstanding, and the flight stability is perfect. Highly recommended for professional photography.",
    date: "2024-05-15",
    verified: true
  },
  {
    id: "2",
    productId: "1",
    userId: "user2",
    userName: "Sarah Chen",
    rating: 4,
    title: "Great drone, minor issues with battery",
    comment: "Overall excellent drone with amazing features. The only downside is the battery life could be longer. Still worth every penny!",
    date: "2024-05-10",
    verified: true
  },
  {
    id: "3",
    productId: "1",
    userId: "user3",
    userName: "David Rodriguez",
    rating: 5,
    title: "Perfect for beginners and pros alike",
    comment: "Easy to fly, fantastic camera, and the build quality is top-notch. Customer service was also very helpful.",
    date: "2024-05-08",
    verified: false
  },
  {
    id: "4",
    productId: "2",
    userId: "user4",
    userName: "Emma Wilson",
    rating: 4,
    title: "Solid entry-level drone",
    comment: "Great value for money. Perfect for learning to fly drones. The camera is decent for the price point.",
    date: "2024-05-12",
    verified: true
  },
  {
    id: "5",
    productId: "2",
    userId: "user5",
    userName: "Alex Thompson",
    rating: 3,
    title: "Good but has limitations",
    comment: "Nice drone for beginners but the range is limited. Good for practicing in your backyard.",
    date: "2024-05-05",
    verified: true
  },
  {
    id: "6",
    productId: "3",
    userId: "user6",
    userName: "Rachel Green",
    rating: 5,
    title: "Racing beast!",
    comment: "Incredibly fast and responsive. The speed is amazing and it handles turns perfectly. Built for racing enthusiasts.",
    date: "2024-05-14",
    verified: true
  }
];

export const getProductReviews = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};

export const getProductRating = (productId: string): { average: number; count: number } => {
  const productReviews = getProductReviews(productId);
  if (productReviews.length === 0) return { average: 0, count: 0 };
  
  const average = productReviews.reduce((sum, review) => sum + review.rating, 0) / productReviews.length;
  return { average: Math.round(average * 10) / 10, count: productReviews.length };
};
