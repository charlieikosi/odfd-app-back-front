import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
  )

  const restaurantSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false,
      },
      services: {
        type: String,
        required: false,
      },
      features: {
        type: String,
        required: false,
      },
      food_menu: {
        type: String,
        required: false,
      },
      drinks_menu: {
        type: String,
        required: false,
      },
      location: {
        type: Array,
        required: false,
      },
      reviews: [reviewSchema],
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
      numReviews: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  )

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

export default Restaurant
