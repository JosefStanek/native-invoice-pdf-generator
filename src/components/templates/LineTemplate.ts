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

export const lineTemplate = (
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
  <html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stylová Faktura</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #FFF;
            margin: 0;
            padding: 0;
        }
        .invoice-wrapper {
            margin: 10px auto;
            padding: 10px;
            background-color: #FFF;
            border-radius: 5px;
        }
        .invoice-header {
            background-color: #4CAF50;
            color: #FFF;
            padding: 20px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .invoice-header h1 {
            margin: 0;
        }
        .invoice-body {
            padding: 20px;
            font-size:12px;
        }
        .invoice-info {
            margin-bottom: 40px;
        }
        .invoice-info .info-title {
            color: #333;
            font-weight: 700;
        }
        .invoice-info .info-value {
            padding-left: 15px;
        }
        .invoice-table {
            width:100%;
            border-collapse: collapse;
            margin-bottom: 40px;
            font-size:12px;
        }
        .invoice-table th {
            background-color: #4CAF50;
            color: #FFF;
            padding: 10px;
            border: none;
        }
        .invoice-table td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        .invoice-footer {
            text-align: center;
            padding: 15px;
            background-color: #F8F8F8;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .total-amount {
            font-size: 12px;
            font-weight: 700;
            color: #333;
            text-align: right;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="invoice-wrapper">
        <div class="invoice-header">
            <h1>Faktura</h1>
        </div>
        <div class="invoice-body">
            <div class="invoice-info">
                <div class="info-title">
                Odesílatel <br> 
                <br>
                Firma: ${sender.senderCompanyName}<br>
                Adresa: ${sender.senderStreet}, ${sender.senderNumberStreet}<br>
                Město: ${sender.senderCity}<br>
                IČO:${sender.senderIco}, DIČ: CZ${sender.senderDic}<br>
                Email: ${sender.senderEmail}<br></div>
               <br>
            </div>
            <div class="invoice-info">
                <div class="info-title">
                Odběratel <br>
                <br>
                Firma: ${
                  subscriber.companyName ? subscriber.companyName : ""
                }<br>
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
                        <th>Název služby</th>
                        <th>Cena za jednotku</th>
                        <th>Celkem</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHtml ? itemsHtml : ""}
                </tbody>
            </table>
            <div class="total-amount">
                Celkem k úhradě: <strong>9800 Kč</strong>
            </div>
        </div>
        <div class="invoice-footer">
            Děkujeme Vám za využití našich služeb.
        </div>
    </div>
</body>
</html>
    `;
};
