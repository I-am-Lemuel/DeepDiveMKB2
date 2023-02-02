import React from "react"
import Image from "next/image"
export default function Products() {
  return (
    <div className="container">
      <h1 className="display 1  text-center fw-bolder">Alle online betaalmethodes</h1>
      <p className="text-center text-muted">Hieronder vind je een overzicht van alle online betaalmethodes die je kunt gebruiken om te betalen bij een webshop.</p>
      <div className="row row-cols-5">
      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="CREDITCARD" width={180} height={180} />
      <p><strong>American express</strong> lorem ipsum lorem ipsum</p>
      </div>
      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="PAYPAL" width={180} height={180} />
      <p><strong>Paypal.</strong> lorem ipsum lorem ipsumlorem ipsum  </p>
      </div>

      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="KLARNA" width={180} height={180} />
      <p><strong>Klarna.</strong> lorem ipsum lorem ipsumlorem ipsum  </p>
      </div>

      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="iDeal" width={180} height={180} />
      <p><strong>iDeal.</strong> lorem ipsum lorem ipsumlorem ipsum  </p>
      </div>

      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="SEPA" width={180} height={180} />
      <p><strong>SEPA.</strong> lorem ipsum lorem ipsumlorem ipsum  </p>
      </div>
      </div>
      {/* end div here and start over */}
      <div className="row row-cols-5" id="row2">

      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="BANCONTACT" width={180} height={180} />
      <p><strong>Bancontact.</strong> lorem ipsum lorem ipsumlorem ipsum  </p>
      </div>

      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="SOFORT" width={180} height={180} />
      <p><strong>Sofort.</strong> lorem ipsum lorem ipsumlorem ipsum  </p>
      </div>

      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="GIROPAY" width={180} height={180} />
      <p><strong>Giropay.</strong> lorem ipsum lorem ipsumlorem ipsum  </p>
      </div>

      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="APPLEPAY" width={180} height={180} />
      <p><strong>Visa</strong> lorem ipsum lorem ipsumlorem ipsum  </p>
      </div>

      <div className="col">
      <Image className="img" src="images/credit-cards.svg" alt="GOOGLEPAY" width={180} height={180} />
      <p><strong>Mastercard</strong> lorem ipsum lorem ipsumlorem ipsum  </p>
      </div>
      </div>







      {/* <p>Paypal</p> */}
      {/* <p>Klarna</p> */}
      {/* <p>IDEAL</p> */}
      {/* <p>SEPA</p> */}
      {/* <p>Bancontact</p> */}
      {/* <p>Sofort</p> */}
      {/* <p>Giropay</p> */}
      {/* <p>Apple Pay</p> */}
      </div>
    
  )
}
