import React from 'react'
import moment from "moment"

function withDateTimePretty(Component) {
    return function (props) {
      let formatedDate;
      const now = moment("2018-03-03 12:20:00");
      const difDatesMin = now.diff(props.date, "minutes");
      const difDatesH = now.diff(props.date, "hours");
      const difDatesD = now.diff(props.date, "days");
      if (difDatesMin < 60) {
        formatedDate = difDatesMin + " мин. назад";
      } else if (difDatesH < 24) {
        formatedDate = difDatesH + " ч. назад";
      } else {
        formatedDate = difDatesD + " дн. назад";
      }
      return <Component {...props} date={formatedDate} />;
    }
  }

  export default withDateTimePretty;
