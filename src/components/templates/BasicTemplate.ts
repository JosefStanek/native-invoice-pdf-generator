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

export const basicTemplate = (items: Item[], subscriber: Subscriber) => {
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
            body { font-family: Arial, sans-serif; padding: 1rem }
            .header{ text-align: left;display:flex;justify-content: space-around }
            .header-section { margin-bottom: 20px; border:1px solid #ddd; padding:1rem }
            .invoice-table { width: 100%; border-collapse: collapse; }
            .invoice-table th, .invoice-table td { border: 1px solid #ddd; padding: 8px; }
            .invoice-table th { background-color: #f2f2f2; }
            .footer{display:flex; flex-direction:column}
        </style>
    </head>
    <body>
    
    <div class="header">
        <div class="header-section">
            <strong>Odesílatel:</strong><br>
            Firma: Novotelco<br>
            Adresa: Novodvorská, 121/1<br>
            Město: Praha<br>
            IČO: 12345678, DIČ: CZ12345678<br>
            Email: test@test.cz<br>
            Telefon: 111 222 333<br>
      
        </div>
    
        <div class="header-section">
        <strong>Odběratel:</strong><br>
        Firma: ${subscriber.companyName}<br>
        Adresa: ${subscriber.street}, ${subscriber.numberStreet}<br>
        Město: ${subscriber.city}<br>
        IČO: ${subscriber.ico}, DIČ: ${subscriber.zipCode}<br>
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
        ${itemsHtml}
        <tr>
            <td>Celkem</td>
            <td><strong>${total} Kč</strong></td>
            <td><strong>${totalwithDPH} Kč</strong></td> 
            </tr>
        </tbody>
    </table>
    
    <div class="footer">
        <p>Datum vystavení: ${moment().format("DD.MM.YYYY")}</p>
        <p>Částku prosím uhraďte na bankovní účet:<strong> 932783278923/800</strong></p>
        <p>Děkujeme za vaši objednávku!</p>
    </div>
    
    </body>
    </html>
    `;
};
