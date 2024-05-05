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
<title>Faktura</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background: white;
        color: black;
    }

    .invoice-container {
        width: 80%;
        margin: auto;
        padding: 20px;
    }

    header, footer {
        padding: 10px;
        border-bottom: 1px solid #ccc;
        text-align: center;
    }

    .content {
        display: flex;
        margin-top: 20px;
    }

    .left-column {
        width: 20%;
        height:100%;
        padding-left: 10px;
        background-color: #333;
        color: white;
        border-right: 1px solid #ccc;
    }

    .right-column {
        flex-grow: 1;
        padding-left: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    table, th, td {
        border: 1px solid black;
    }

    th, td {
        padding: 8px;
        text-align: left;
    }

    footer {
        text-align: center;
        padding: 10px;
    }
</style>
</head>
<body>
<div class="invoice-container">
    <header>
        <h2>FAKTURA</h2>
    </header>
    <div class="content">
        <div class="left-column">
            <section class="billing-info">
                <div class="sender">
                    <h4>Odběratel</h4>
                    <p>Jméno</p>
                    <p>Adresa</p>
                    <p>ID odběratele: ID</p>
                </div>
                <div class="recipient">
                    <h4>Dodavatel</h4>
                    <p>Jméno</p>
                    <p>Adresa</p>
                    <p>ID dodavatele: ID</p>
                </div>
            </section>
        </div>
        <div class="right-column">
            <table>
                <thead>
                    <tr>
                        <th>Množství</th>
                        <th>C. položky</th>
                        <th>Popis</th>
                        <th>Jednotková cena</th>
                        <th>Sleva</th>
                        <th>Celkem za řádek</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Přidejte položky faktury zde -->
                </tbody>
            </table>
        </div>
    </div>
    <footer>
        <p>Děkujeme Vám za využití našich služeb.</p>
    </footer>
</div>
</body>
</html>
    `;
};
