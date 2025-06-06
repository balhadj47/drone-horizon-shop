
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StarRating from './StarRating';
import ReviewCard from './ReviewCard';
import { useReviews, useProductRating } from '../hooks/useReviews';

interface ReviewsSectionProps {
  productId: string;
}

const ReviewsSection = ({ productId }: ReviewsSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const { data: reviews = [], isLoading } = useReviews(productId);
  const { data: ratingData = { average: 0, count: 0 } } = useProductRating(productId);
  
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-gray-200 h-24 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (reviews.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Customer Reviews</span>
          <div className="flex items-center gap-2">
            <StarRating rating={ratingData.average} showRating />
            <span className="text-sm text-gray-600">({ratingData.count} reviews)</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {displayedReviews.map((review) => (
          <ReviewCard key={review.id} review={{
            id: review.id,
            productId: review.product_id,
            userName: review.user_name,
            rating: review.rating,
            comment: review.comment,
            verified: review.verified,
            date: review.created_at
          }} />
        ))}
        
        {reviews.length > 3 && (
          <div className="text-center pt-4">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `Show All ${reviews.length} Reviews`}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewsSection;
