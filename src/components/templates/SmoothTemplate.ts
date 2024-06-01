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

export const smoothTemplate = (
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
  <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faktura</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            font-size: 12px;
        }
        .container {
            max-width: 800px;
            margin: 30px auto;
            padding: 20px;
            background: #fff;
        }
        .invoice-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .invoice-header h1 {
            margin: 0;
            font-size: 12px;
            color: #333;
        }
        .invoice-details {
            margin-top: 20px;
            padding: 15px;
            background-color: #f7f7f7;
        }
        .invoice-details th,
        .invoice-details td {
            padding: 10px 0;
            text-align: left;
        }
        .invoice-details th {
            text-transform: uppercase;
            font-weight: 600;
            color: #666;
        }
        .invoice-details .value {
            font-weight: 600;
        }
        .invoice-body {
            margin-top: 30px;
        }
        .invoice-body table {
            width: 100%;
            border-collapse: collapse;
        }
        .invoice-body th {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: left;
            font-weight: 600;
            border: none;

        }
        .invoice-body td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ccc;
        }
        .total {
            text-align: right;
            margin-top: 20px;
            font-size: 12px;
            font-weight: 600;
            color: #333;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            opacity: 0.6;
        }
        th{
            font-size:12px;
        }
        td{
            font-size:12px;
        }
    
    </style>
</head>
<body>
    <div class="container">
        <div class="invoice-header">
            <h1>Faktura</h1>
            <div>
                <strong>Datum vydání:</strong>${moment().format(
                  "DD.MM.YYYY"
                )}<br>
                <strong>Splatnost:</strong> ${moment()
                  .add(30, "days")
                  .format("DD.MM.YYYY")}
            </div>
        </div>
        <div class="invoice-details">
            <table>
            <th>Odběratel</th>
                <tr>
                    <td class="value">
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
                    </td>
                </tr>
                <th>Odesílatel</th>
                <tr>
                    <td class="value">
                    Firma: ${sender.senderCompanyName}<br>
                    Adresa: ${sender.senderStreet}, ${
    sender.senderNumberStreet
  }<br>
                    Město: ${sender.senderCity}<br>
                    IČO:${sender.senderIco}, DIČ: CZ${sender.senderDic}<br>
                    Email: ${sender.senderEmail}<br>
                    </td>
                </tr>
            </table>
        </div>
        <div class="invoice-body">
            <table>
                <thead>
                    <tr>
                        <th>Název</th>
                        <th>Cena za jednotku</th>
                        <th>Cena s DPH</th>
                    </tr>
                </thead>
                <tbody>
                ${itemsHtml ? itemsHtml : ""}
                    <!-- Další položky -->
                </tbody>
            </table>
            <div class="total">
                Celková částka k úhradě: <span>${totalwithDPH} Kč</span>
            </div>
          
        </div>
        <div class="footer">
            Děkujeme za Vaši objednávku a těšíme se na další spolupráci.
        </div>
    </div>
</body>
</html>
    `;
};
