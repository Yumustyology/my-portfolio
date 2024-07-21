import { useEffect, useState } from "react";

export const FormatDate = (dateFormat:any) => {
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
        return `${months[date[1] - 1]},${date[0]}`;

};
