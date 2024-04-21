import moment from "moment";
import Handlebars from "handlebars";

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

export const smoothTemplate = (items: Item[], subscriber: Subscriber) => {
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
                <strong>Datum vydání:</strong> 20.04.2024<br>
                <strong>Splatnost:</strong> 04.05.2024
            </div>
        </div>
        <div class="invoice-details">
            <table>
            <th>Odběratel</th>
                <tr>
                    <td class="value">
                        Název společnosti odběratele<br>
                        Adresa<br>
                        Město, PSČ<br>
                        IČO: 12345678<br>
                        DIČ: CZ12345678
                    </td>
                </tr>
                <th>Odesílatel</th>
                <tr>
                    <td class="value">
                        Vaše firma, s.r.o.<br>
                        Vaše adresa<br>
                        Vaše město, PSČ<br>
                        IČO: 87654321<br>
                        DIČ: CZ87654321
                    </td>
                </tr>
            </table>
        </div>
        <div class="invoice-body">
            <table>
                <thead>
                    <tr>
                        <th>Název</th>
                        <th>Množství</th>
                        <th>Cena za jednotku</th>
                        <th>Cena s DPH</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Položka 1</td>
                        <td>2</td>
                        <td>500 Kč</td>
                        <td>600 Kč</td>
                    </tr>
                    <tr>
                        <td>Položka 2</td>
                        <td>5</td>
                        <td>200 Kč</td>
                        <td>240 Kč</td>
                    </tr>
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
