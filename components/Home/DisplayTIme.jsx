import OpeningClosingTime from './OpeningClosingTime'
const DisplayTime = () => {
    return (
        <div className="p-4 max-w-screen-lg mx-auto">
        <div className="text-3xl font-bold mb-8">Opening and Closing Times</div>
        <OpeningClosingTime day="Monday" openTime="9:00 AM" closeTime="9:00 PM" />
        <OpeningClosingTime day="Tuesday" openTime="9:00 AM" closeTime="9:00 PM" />
        <OpeningClosingTime day="Wednesday" openTime="9:00 AM" closeTime="9:00 PM" />
        <OpeningClosingTime day="Thursday" openTime="9:00 AM" closeTime="9:00 PM" />
        <OpeningClosingTime day="Friday" openTime="9:00 AM" closeTime="9:00 PM" />
        <OpeningClosingTime day="Saturday" openTime="9:00 AM" closeTime="9:00 PM" />
        <OpeningClosingTime day="Sunday" openTime="9:00 AM" closeTime="3:00 PM" />
      </div>
    );
  };
  
  export default DisplayTime;