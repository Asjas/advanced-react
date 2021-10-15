import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import DisplayError from "../components/ErrorMessage";
import OrderItemStyles from "../components/styles/OrderItemStyles";
import OrderStyles from "../components/styles/OrderStyles";
import { Order, useAllOrdersQuery } from "../types/generated-queries";
import formatMoney from "../utils/formatMoney";

const OrderUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`;

function countItemsInOrder(order: Order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

function OrdersPage() {
  const { data, error, loading } = useAllOrdersQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <DisplayError error={error} />;

  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits - Orders</title>
      </Head>
      <div>
        <h2>You have {data.orders.length} orders!</h2>
        <OrderUl>
          {data.orders.map((order: Order) => (
            <OrderItemStyles>
              <Link href={`/order/${order.id}`}>
                <a>
                  <div className="order-meta">
                    <p>
                      {countItemsInOrder(order)} Item
                      {order.items.length > 1 ? "s" : null}
                    </p>
                    <p>
                      {order.items.length} Product
                      {order.items.length > 1 ? "s" : null}
                    </p>
                    <p>{formatMoney(order.total)}</p>
                  </div>
                  <div className="images">
                    {order.items.map((item) => (
                      <img
                        key={`image-${order.id}`}
                        src={item.photo.image.publicUrlTransformed}
                        alt={item.photo.altText}
                      />
                    ))}
                  </div>
                </a>
              </Link>
            </OrderItemStyles>
          ))}
        </OrderUl>
      </div>
    </OrderStyles>
  );
}

export default OrdersPage;
