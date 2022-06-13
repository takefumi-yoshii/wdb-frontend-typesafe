import React from "react";

const EatIn = (props: { amount: string }) => {
  return (
    <div>
      <h2>[店内ご利用] お支払額</h2>
      <p>{props.amount}</p>
    </div>
  );
};

const TakeOut = (props: { amount: string }) => {
  return (
    <div>
      <h2>[お持ち帰り] お支払額</h2>
      <p>{props.amount}</p>
    </div>
  );
};

type Props = { value?: number; isEatIn: boolean };
export const TotalAmount = (props: Props) => {
  const tax = props.isEatIn ? 1.1 : 1.08;
  if (props.value === undefined) {
    return <div>合計金額がありません</div>;
  }
  // if文の効果で、ここではprops.valueが
  // number型であることが確約されている
  const amount = `¥${Math.floor(props.value * tax)}`;
  return (
    <div>
      {props.isEatIn ? <EatIn amount={amount} /> : <TakeOut amount={amount} />}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <TotalAmount isEatIn={true} />
    </div>
  );
}
