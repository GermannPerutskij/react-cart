import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const totalPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <aside className="block col-1">
      <h2>Товары в корзине</h2>
      <div>
        {cartItems.length === 0 && <div>Корзина пуста</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <div className="row">
              <div className="col-2">
                <strong>Итоговая цена</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button>
                Рассчитать
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
