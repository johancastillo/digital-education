const PaymentMethod = () => {
  return (
    <div className="text-center card p-4">
      <h5 className="my-3">Métodos de pago en USD</h5>

      <button className="btn btn-primary my-3">Tarjeta de credito</button>
      <button className="btn btn-primary my-3">PayPal</button>

      <div className="mt-4" style={{color: 'blue', cursor: 'pointer'}}>
        <span className="icon-gift-void"></span>
        <span className="mx-2">Regala estos cursos</span>
      </div>

    </div>
  );
};

export default PaymentMethod
