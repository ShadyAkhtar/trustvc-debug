import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { OpenAttestationDocument, wrapOADocument } from "@trustvc/trustvc";

function App() {
  const [count, setCount] = useState(0);
  const rawDocument = {
    $template: {
      name: "COC",
      type: "EMBEDDED_RENDERER",
      url: "https://bl-doc-renderer.netlify.app",
    },
    issuers: [
      {
        name: "Ocean Shipping Co.",
        tokenRegistry: "0x90FA8AE1d9a29100806d0C08993af46376E01801",
        identityProof: {
          location: "funny-activity.yodaplus-sandbox.net",
          type: "DNS-TXT",
        },
      },
    ],
    exporter: {
      name: "Exporter ABC",
      address: "123 Export St., Export Town, EX 12345",
      phoneNumber: "+1-555-123-4567",
      email: "exporterabc@example.com",
    },
    blNumber: "BL987654321",
    blDateofIssue: "2023-08-01",
    sealNumber: "SN12345",
    productNo: "P123456789",
    buyerContract: "Contract 42",
    lcRefNumber: "LCREF654321",
    importer: {
      name: "Importer XYZ",
      address: "456 Import Ave., Import City, IM 67890",
      phoneNumber: "+1-555-987-6543",
      email: "importerxyz@example.com",
    },
    consignee: {
      name: "Consignee DEF",
      address: "789 Consignee Rd., Consigneeville, CO 11223",
      phoneNumber: "+1-555-789-0123",
      email: "consignee1@example.com",
    },
    carrier: {
      name: "Carrier GHI",
      address: "321 Carrier Ln., Carrier City, CA 44556",
      phoneNumber: "+1-555-321-0987",
      email: "carrierghi@example.com",
    },
    notifyingParty: {
      name: "Notifying Party JKL",
      address: "654 Notify St., Notify Town, NO 77889",
      phoneNumber: "+1-555-654-3210",
      email: "notifyingpartyjkl@example.com",
    },
    freight: "Prepaid",
    shippedOnBoardDate: "2023-07-15",
    cargoMovTypeOriginCode: "SEA",
    cargoMovTypeDestinationCode: "AIR",
    carrierBookingRefNo: "CBR123456",
    carrierIdentificationfNo: "CBR123456",
    shippingRefNo: "SHIPREF654321",
    properShippingName: "Electronics Equipment",
    modeOfDispatch: "Sea",
    vesselName: "Vessel Voyager",
    voyageNumber: "VS98765",
    portOfLoading: "Port of Export Town",
    portOfDischarge: "Port of Import City",
    cityOfOrigin: "Export Town",
    cityOfDestination: "Import City",
    countryOfOrigin: "Exportland",
    countryOfDestination: "Importland",
    placeOfDelivery: "Delivery Point A",
    finalDestination: "Final Destination B",
    paymentMethod: "Credit Card",
    paymentTerms: "30 Days",
    incoterms: "FOB",
    dangerLevel: "Low",
    UNDGCode: "UNDG12345",
    packages: [
      {
        marksAndNo: "Mark123",
        description: "Electronics",
        type: "Box",
        noOfPackage: "100",
        grossWeight: 2000,
        volume: 1000,
        temp: 20,
        tempUnit: "Celsius",
      },
    ],
    containerNo: "CONT1234567",
    containerType: "40ft",
    totalNoOfConatiners: "10",
    tempSettingForReferContainer: "Temperature Setting A",
    ffREfnum: "FF123456",
    transportDocType: "Sea Waybill",
    termsAndConditionOfCarraige: "Standard Terms Apply",
    disclaimer: "Standard Disclaimer",
    placeOfBlIssue: "Export Town Office",
    signature: "https://www.pngegg.com/en/png-zumpd",
  };
  console.log("🚀 ~ App ~ rawDocument:", rawDocument);

  const wrapDocument = async () => {
    const wrappedDocument = await wrapOADocument(
      rawDocument as OpenAttestationDocument
    );
    console.log("🚀 ~ App ~ wrappedDocument:", wrappedDocument);
  };

  useEffect(() => {
    wrapDocument();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
