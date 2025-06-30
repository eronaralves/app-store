import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  totalReviews?: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function StarRating({
  rating,
  totalReviews,
  size = 'md',
  showText = true,
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {showText && (
        <div className={`${textSizeClasses[size]} text-muted-foreground`}>
          <span className="font-medium">{rating}</span>
          {totalReviews && <span> ({totalReviews} avaliações)</span>}
        </div>
      )}
    </div>
  );
}
