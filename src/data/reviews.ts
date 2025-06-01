
export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userName: "Alex Johnson",
    rating: 5,
    comment: "Absolutely incredible drone! The camera quality is outstanding and the flight time is exactly as advertised. Perfect for professional photography.",
    date: "2024-01-15",
    verified: true
  },
  {
    id: "2",
    productId: "1",
    userName: "Sarah Chen",
    rating: 4,
    comment: "Great drone overall. The Hasselblad camera produces amazing shots. Only minor complaint is the learning curve for beginners.",
    date: "2024-01-20",
    verified: true
  },
  {
    id: "3",
    productId: "2",
    userName: "Mike Rodriguez",
    rating: 5,
    comment: "Perfect starter drone! Easy to fly and the 4K video quality is impressive for the price point. Highly recommend for beginners.",
    date: "2024-01-18",
    verified: true
  },
  {
    id: "4",
    productId: "2",
    userName: "Emily Davis",
    rating: 4,
    comment: "Love how lightweight it is. Great for travel photography. Battery life could be better but overall very satisfied.",
    date: "2024-01-22",
    verified: false
  },
  {
    id: "5",
    productId: "3",
    userName: "Ryan Mitchell",
    rating: 5,
    comment: "Insane speed and agility! This drone is built for racing. The FPV experience is incredible. Worth every penny for competitive pilots.",
    date: "2024-01-25",
    verified: true
  },
  {
    id: "6",
    productId: "4",
    userName: "Corporate User",
    rating: 5,
    comment: "Industrial grade quality. Perfect for our surveying operations. The dual-operator feature is a game changer for our workflow.",
    date: "2024-01-28",
    verified: true
  }
];

export const getProductRating = (productId: string) => {
  console.log('Getting rating for product:', productId);
  
  try {
    const productReviews = reviews.filter(review => review.productId === productId);
    
    if (productReviews.length === 0) {
      console.log('No reviews found for product:', productId);
      return { average: 0, count: 0 };
    }
    
    const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
    const average = Math.round((totalRating / productReviews.length) * 10) / 10;
    
    console.log('Rating calculation:', { productId, average, count: productReviews.length });
    
    return {
      average,
      count: productReviews.length
    };
  } catch (error) {
    console.error('Error calculating product rating:', error);
    return { average: 0, count: 0 };
  }
};

export const getProductReviews = (productId: string) => {
  console.log('Getting reviews for product:', productId);
  
  try {
    return reviews.filter(review => review.productId === productId);
  } catch (error) {
    console.error('Error getting product reviews:', error);
    return [];
  }
};
