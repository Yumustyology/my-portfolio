import { useEffect, useState } from "react";

export const FormatDate = (dateFormat) => {

        var date = dateFormat.split("-");
        var months = [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        // setDate(`${months[date[1] - 1]},${date[0]}`);
        return `${months[date[1] - 1]},${date[0]}`;

};
