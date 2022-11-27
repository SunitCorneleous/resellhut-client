import React from "react";

const UserReview = () => {
  //https://i.ibb.co/qYQXZWN/jack-finnigan-rri-AI0nhcbc-1024x1024.jpg
  //https://i.ibb.co/Mk34zWH/pexels-photo-274595-1024x981.jpg
  //https://i.ibb.co/sWy1fRf/william-stitt-119525-1024x889.jpg
  //https://i.ibb.co/qBHzdCm/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg
  const reviewers = [
    {
      id: 1,
      name: "Mark Rober",
      img: "https://i.ibb.co/qYQXZWN/jack-finnigan-rri-AI0nhcbc-1024x1024.jpg",
      details:
        "I had to sell my laptop to get a new one but i could not get right customer, then I found Resellx posted my laptop wiht details and sold in 2 days. I am very happy with their service.",
      item: "item1",
    },
    {
      id: 2,
      name: "Alicia Davis",
      img: "https://i.ibb.co/Mk34zWH/pexels-photo-274595-1024x981.jpg",
      details:
        " I bought a laptop for my daughter who had a third grade science fair project where she had to give a presentation of her projects.",
      item: "item2",
    },
    {
      id: 3,
      name: "Catherine Batz",
      img: "https://i.ibb.co/qBHzdCm/women-s-white-and-black-button-up-collared-shirt-774909-2-1024x1024.jpg",
      details:
        "I bought this laptop a few months ago. I was looking for something that was going to last me for a while. This laptop is a great value for the money. It's got a solid processor and has a very good screen.   ",
      item: "item3",
    },
    {
      id: 4,
      name: "William Stitt",
      img: "https://i.ibb.co/sWy1fRf/william-stitt-119525-1024x889.jpg",
      details:
        "I need a laptop for my job and study but I could not afford the a new laptop. So I checked Resellx and found the right laptop for me.",
      item: "item4",
    },
  ];

  return (
    <div className="w-[95%] lg:w-10/12 p-5 mx-auto md:my-16 my-8">
      <h2 className="text-center mb-11 text-2xl lg:text-4xl font-semibold text-primary">
        Reviews by our users
      </h2>
      <div className="carousel w-full">
        {reviewers?.map(review => (
          <div
            id={review.item}
            key={review.id}
            className="carousel-item w-full"
          >
            <div className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  alt="user"
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                  src={review.img}
                />
              </div>
              <div>
                <p className="mt-2 text-gray-600">{review.details}</p>
              </div>
              <div className="flex justify-end mt-4">
                <span href="#" className="text-xl font-medium text-indigo-500">
                  {review.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default UserReview;
