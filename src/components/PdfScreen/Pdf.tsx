import { View, Alert, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { Button } from "react-native-paper";
import { printToFileAsync } from "expo-print";
import { useState } from "react";
interface Item {
  id: string;
  title: string;
  price: string;
  DPHPrice: string;
}

interface PdfProps {
  items: Item[];
}

const Pdf: React.FC<PdfProps> = ({ items }) => {
  console.log(items);
  const [template, setTemplate] = useState(`
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
        Firma: Novotelco<br>
        Adresa: Novodvorská, 121/1<br>
        Město: Praha<br>
        IČO: 12345678, DIČ: CZ12345678<br>
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
            <tr>
                <td>Položka 1</td>
                <td>1000 Kč</td>
                <td>1210 Kč</td> <!-- Předpokládáme DPH 21% -->
            </tr>
            <tr>
                <td>Položka 2</td>
                <td>500 Kč</td>
                <td>605 Kč</td> <!-- Předpokládáme DPH 21% -->
            </tr>
            <tr>
            <td>Celkem</td>
            <td>500 Kč</td>
            <td>605 Kč</td> <!-- Předpokládáme DPH 21% -->
        </tr>
        </tbody>
    </table>
    
    <div class="footer">
        <p>Částku prosím uhraďte na bankovní účet:<strong> 932783278923/800</strong></p>
        <p>Děkujeme za vaši objednávku!</p>
    </div>
    
    </body>
    </html>
  `);
  const createPdf = async () => {
    try {
      const { uri } = await printToFileAsync({ html: template });
      console.log("PDF generated at: ", uri);
      Alert.alert("hotovo");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <WebView
        originWhitelist={["*"]}
        source={{ html: template }}
        style={styles.webview}
      />
      <View style={styles.actions}>
        <Button mode="contained" onPress={createPdf}>
          Vytvořit PDF
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  webview: {
    margin: 20,
    height: 300,
  },
  actions: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
});

export default Pdf;
