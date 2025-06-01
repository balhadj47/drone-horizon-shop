
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import StarRating from './StarRating';
import { Review } from '../data/reviews';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-slate-900">{review.userName}</h4>
              {review.verified && (
                <Badge variant="secondary" className="text-xs">
                  Verified Purchase
                </Badge>
              )}
            </div>
            <StarRating rating={review.rating} size="sm" />
          </div>
          <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
        </div>
        
        <h5 className="font-medium text-slate-900 mb-2">{review.title}</h5>
        <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
