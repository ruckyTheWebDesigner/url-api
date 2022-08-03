import React from "react";

// statistics_section

function Statistics() {
  return (
    <div className='statistic_section'>
      <div className='statistic_wrapper'>
        <div className='statistic_header'>
          <h1>Advance Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>

      <div className='statistic_content'>
        <div className='statistic'>
          <div className='statistic_item statistic_item1'>
            <div className='statistic_item_header'>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
        </div>
        <div className='statistic'>
          <div className='statistic_item statistic_item2'>
            <div className='statistic_item_header'>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='statistic_item statistic_item3'>
            <div className='statistic_item_header'>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
