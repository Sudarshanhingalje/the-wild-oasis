import { BsCalendar2Week } from "react-icons/bs";
import { FaPercentage } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoBagCheckSharp } from "react-icons/io5";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

export default function Statistics({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  //1
  const numBookings = bookings.length;
  //2
  const totalSales = bookings.reduce((total, booking) => {
    return total + booking.totalPrice;
  }, 0);

  //3
  const checkIn = confirmedStays.length;

  //4
  const totalCabinCount =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Total Bookings"
        color="blue"
        icon={<IoBagCheckSharp />}
        value={numBookings}
      />
      <Stat
        title="Total Sales"
        color="green"
        icon={<GiTakeMyMoney />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<BsCalendar2Week />}
        value={checkIn}
      />
      <Stat
        title="Cabins Occupied"
        color="yellow"
        icon={<FaPercentage />}
        value={Math.round(totalCabinCount * 100) + "%"}
      />
    </>
  );
}
