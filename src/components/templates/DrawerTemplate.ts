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

export const drawerTemplate = (
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
  <!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faktura</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            font-size: 12px;
            margin: 0;
            padding: 0;
        }
        .container {
            margin: 2px auto;
            padding: 5px;
            display: flex;
        }
        .sidebar {
            width: 30%;
            padding: 20px;
            background-color: #343a40;
            color: #fff;
            border-radius: 12px 0 0 12px;
        }
        .sidebar h2 {
            margin-top: 0;
            font-size: 16px;
        }
        .sidebar p {
            margin: 5px 0;
            font-size: 12px;
        }
        .main-content {
            width: 70%;
            padding: 20px;
            background-color: #fff;
            border-radius: 0 12px 12px 0;
        }
        .main-content h1 {
            margin: 0 0 20px 0;
            font-size: 24px;
            color: #343a40;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        table, th, td {
            border: 1px solid #dee2e6;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #495057;
            color: #fff;
            font-size: 12px;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .total {
            text-align: left;
            font-size: 10px;
            font-weight: bold;
            color: #343a40;
        }
        .footer {
            text-align: center;
            font-size: 10px;
            color: #6c757d;
            margin-top: 20px;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="sidebar">
        <h2>Odesílatel</h2>
        <p>${sender.senderCompanyName}<br>
        ${sender.senderStreet}, ${sender.senderNumberStreet}<br>
        ${sender.senderCity}<br>
        IČO:${sender.senderIco}, DIČ: CZ${sender.senderDic}<br>
        ${sender.senderEmail}<br></p>
        <br>
        <h2>Odběratel</h2>
        <p>${subscriber.companyName ? subscriber.companyName : ""}<br>
        ${subscriber.street ? subscriber.street : ""}, ${
    subscriber.numberStreet ? subscriber.numberStreet : ""
  }<br>
        ${subscriber.city ? subscriber.city : ""}<br>
        IČO: ${subscriber.ico ? subscriber.ico : ""}, DIČ: ${
    subscriber.zipCode ? subscriber.zipCode : ""
  }<br></p>
        <br>
        <h2>Splatnost</h2>
        <p>${moment().add(30, "days").format("DD.MM.YYYY")}</p>
        <h2>Vystavení</h2>
        <p>${moment().format("DD.MM.YYYY")}</p>
    </div>
    <div class="main-content">
        <h1>Faktura</h1>
        <table>
            <thead>
                <tr>
                    <th>Položka</th>
                    <th>Cena</th>
                    <th>Cena s DPH</th>
                </tr>
            </thead>
            <tbody>
            ${itemsHtml ? itemsHtml : ""}
            </tbody>
        </table>
        <div class="total">
        <p>Částku prosím uhraďte na bankovní účet:<strong> ${
          sender.senderAccountNumber
        }</strong></p>
            <p>Celkem: ${total} kč</p>
            <p>Celkem s DPH: ${totalwithDPH} kč</p>
        </div>
    </div>
</div>

</body>
</html>
    `;
};
