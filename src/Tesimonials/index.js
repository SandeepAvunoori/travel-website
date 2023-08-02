const Testimonials = () => {
    const testimonials = [
      {
        name: 'John Doe',
        comment: 'My trip to Maasai Mara with Travel Unbounded was an unforgettable experience. The wildlife, the landscapes, and the hospitality were beyond my expectations. I highly recommend their tours!',
      },
      {
        name: 'Jane Smith',
        comment: 'I had an amazing time exploring Maasai Mara with Travel Unbounded. The knowledgeable guides and well-organized itinerary made the trip truly enjoyable. I can\'t wait to book my next adventure with them.',
      },
    ];
  
    return (
      <div>
        <h2>Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.comment}</p>
          </div>
        ))}
      </div>
    );
  };

export default Testimonials
  