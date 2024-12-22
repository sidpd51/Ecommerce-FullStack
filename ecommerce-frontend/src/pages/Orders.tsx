import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Column } from 'react-table'
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  { Header: "ID", accessor: "_id" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Status", accessor: "status" },
  { Header: "Action", accessor: "action" }];

function Orders() {
  const [rows] = useState<DataType[]>([
    {_id: "123",
      amount: 1243,
      discount: 100,
      quantity: 10,
      status: <span className="red">Processing</span>,
      action: <Link to={`/orders/123`}>View</Link>
    }
  ])
  const Table = TableHOC<DataType>(column,rows,"dashboard-product-box","Orders",rows.length > 6? true: false)();
  return (
    <div className="container">
      <h1>My Orders</h1>
     { Table}
    </div>
  )
}

export default Orders