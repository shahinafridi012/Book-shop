import LineChartt from "../LineChart/LineChartt";



const Pages = () => {
    return (
        <div className=" flex grid grid-cols-1 md:grid-cols-2 ">

   <LineChartt></LineChartt>
<div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  How can I find a specific book on your website
  </div>
  <div className="collapse-content"> 
    <p>To find a specific book on our website, you can use the search bar located at the top of the homepage. Simply enter the title, author, or ISBN of the book you are looking for, and click the search icon. You can also browse our categories and use the filters to narrow down your search by genre, price, publication date, and more. If you have trouble finding what you need, feel free to contact our customer support team for assistance.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What is your return policy for books?
  </div>
  <div className="collapse-content"> 
    <p>We offer a 30-day return policy for books purchased from our website. If you are not satisfied with your purchase, you can return the book in its original condition within 30 days of the delivery date for a full refund or exchange. Please ensure the book is in the same condition as when you received it. To initiate a return, visit our Returns and Exchanges page for detailed instructions and to fill out a return request form. If you have any questions, our customer service team is here to help.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Do you offer discounts or promotions on books?
  </div>
  <div className="collapse-content"> 
    <p>hYes, we regularly offer discounts and promotions on a wide selection of books. You can find current deals on our Promotions page, where we feature discounts on bestsellers, new releases, and seasonal sales. Additionally, sign up for our newsletter to receive exclusive offers, discount codes, and updates on upcoming promotions directly in your inbox. Keep an eye out for special events like holiday sales and author signings for even more savings opportunities.</p>
  </div>
</div>
</div>
        </div>
    );
};

export default Pages;
