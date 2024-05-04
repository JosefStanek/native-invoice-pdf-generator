import moment from "moment";
interface Item {
  id: string;
  title: string;
  price: string;
  DPHPrice: string;
}

interface Subscriber {
  companyName: string;
  street: string;
  numberStreet: string;
  zipCode: string;
  city: string;
  ico: string;
  dic: string;
  email: string;
}
interface Sender {
  senderCompanyName: string;
  senderStreet: string;
  senderNumberStreet: string;
  senderZipCode: string;
  senderCity: string;
  senderIco: string;
  senderDic: string;
  senderEmail: string;
  senderAccountNumber: string;
}

export const basicTemplate = (
  items: Item[],
  subscriber: Subscriber,
  sender: Sender
) => {
  const itemsHtml = items
    .map((item: Item) => {
      return `<tr>
            <td>${item.title}</td>
            <td>${item.price} Kč</td>
            <td>${item.DPHPrice} Kč</td> 
            </tr>`;
    })
    .join("");

  const total = items.reduce((sum, item) => sum + +item.price, 0);
  const totalwithDPH = items.reduce((sum, item) => sum + +item.DPHPrice, 0);

  return `
    <html>
    <head>
        <title>Faktura</title>
        <style>
            h1{text-align:center;padding:1rem}
            body { font-family: Arial, sans-serif; padding: 1rem;}
            .header{ text-align: left;display:flex;justify-content: space-around }
            .header-section { margin-bottom: 20px; padding:1rem }
            .invoice-table { width: 100%; border-collapse: collapse; }
            .invoice-table th, .invoice-table td { border: 1px solid #ddd; padding: 8px; }
            .invoice-table th { background-color: #f2f2f2; }
            .footer{display:flex; flex-direction:column}
        </style>
    </head>
    <body>
    
  <div>
  <h1>Faktura - daňový doklad</h1>
  </div>
    <div class="header">
        <div class="header-section">
            <strong>Odesílatel:</strong><br>
            Firma: ${sender.senderCompanyName}<br>
            Adresa: ${sender.senderStreet}, ${sender.senderNumberStreet}<br>
            Město: ${sender.senderCity}<br>
            IČO:${sender.senderIco}, DIČ: CZ${sender.senderDic}<br>
            Email: ${sender.senderEmail}<br>
      
        </div>
    
        <div class="header-section">
        <strong>Odběratel:</strong><br>
        Firma: ${subscriber.companyName ? subscriber.companyName : ""}<br>
        Adresa: ${subscriber.street ? subscriber.street : ""}, ${
    subscriber.numberStreet ? subscriber.numberStreet : ""
  }<br>
        Město: ${subscriber.city ? subscriber.city : ""}<br>
        IČO: ${subscriber.ico ? subscriber.ico : ""}, DIČ: ${
    subscriber.zipCode ? subscriber.zipCode : ""
  }<br>
        </div>
    </div>
    
    <table class="invoice-table">
        <thead>
            <tr>
                <th>Název</th>
                <th>Částka</th>
                <th>Částka s DPH</th>
            </tr>
        </thead>
        <tbody>
        ${itemsHtml ? itemsHtml : ""}
        <tr>
            <td>Celkem</td>
            <td><strong>${total ? total : ""} Kč</strong></td>
            <td><strong>${totalwithDPH ? totalwithDPH : ""} Kč</strong></td> 
            </tr>
        </tbody>
    </table>
    
    <div class="footer">
        <p>Datum vystavení:<strong> ${moment().format(
          "DD.MM.YYYY"
        )}</strong></p>
        <p>Datum splatnosti: <strong> ${moment()
          .add(30, "days")
          .format("DD.MM.YYYY")}</strong></p>
        <p>Částku prosím uhraďte na bankovní účet:<strong> ${
          sender.senderAccountNumber
        }</strong></p>
        <p>Děkujeme za vaši objednávku!</p>
    </div>
    
    </body>
    </html>
    `;
};
