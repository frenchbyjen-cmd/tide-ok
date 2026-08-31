export const restaurant = {
  name: "TIDE TABLE",
  subtitle: "Tamraght • Morocco",
  currency: "DH",
  staffPin: "2026",
  heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85"
};

export const categories = ["Breakfast", "Starters", "Mains", "Burgers", "Sides", "Drinks", "Desserts"];

export const menu = [
  {
    id: "avocado-eggs", category: "Breakfast", name: "Avocado & Eggs", price: 65,
    description: "Sourdough, avocado, soft eggs, herbs.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"Fresh orange juice", price:20},{name:"Extra egg", price:10},{name:"Latte", price:20}]
  },
  {
    id: "moroccan-breakfast", category: "Breakfast", name: "Moroccan Breakfast", price: 70,
    description: "Msemen, amlou, honey, cheese, olives & mint tea.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"Fresh orange juice", price:20},{name:"Espresso", price:15}]
  },
  {
    id: "fresh-salad", category: "Starters", name: "Fresh Garden Salad", price: 55,
    description: "Seasonal vegetables, herbs, citrus dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"Avocado", price:15},{name:"Grilled chicken", price:25}]
  },
  {
    id: "chicken-tagine", category: "Mains", name: "Chicken Tagine", price: 110,
    description: "Preserved lemon, olives, herbs, warm bread.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"French fries", price:25},{name:"Soft drink", price:15},{name:"Cheesecake", price:35}]
  },
  {
    id: "chicken-burger", category: "Burgers", name: "Chicken Burger", price: 85,
    description: "Grilled chicken, lettuce, tomato, house sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"Cheese", price:10},{name:"Avocado", price:15},{name:"French fries", price:25},{name:"Soft drink", price:15}]
  },
  {
    id: "cheeseburger", category: "Burgers", name: "Classic Cheeseburger", price: 90,
    description: "Beef, cheddar, pickles, onion, signature sauce.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"Extra cheese", price:10},{name:"Avocado", price:15},{name:"French fries", price:25},{name:"Soft drink", price:15}]
  },
  {
    id: "fries", category: "Sides", name: "French Fries", price: 25,
    description: "Crispy fries, sea salt.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"Cheese sauce", price:10}]
  },
  {
    id: "orange", category: "Drinks", name: "Fresh Orange Juice", price: 25,
    description: "Freshly pressed.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
    extras: []
  },
  { id: "coca", category: "Drinks", name: "Coca-Cola", price: 20, description: "Ice cold.", image: "", extras: [] },
  { id: "water", category: "Drinks", name: "Sparkling Water", price: 20, description: "Chilled.", image: "", extras: [] },
  {
    id: "latte", category: "Drinks", name: "Latte", price: 25,
    description: "Double espresso, steamed milk.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"Extra shot", price:8},{name:"Cheesecake", price:35}]
  },
  { id: "espresso", category: "Drinks", name: "Espresso", price: 18, description: "Freshly pulled.", image: "", extras: [{name:"Extra shot", price:8}] },
  {
    id: "cheesecake", category: "Desserts", name: "Cheesecake", price: 40,
    description: "Creamy cheesecake, citrus zest.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"Espresso", price:15}]
  },
  {
    id: "chocolate-cake", category: "Desserts", name: "Chocolate Cake", price: 40,
    description: "Dark chocolate, soft center.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    extras: [{name:"Latte", price:20}]
  }
];

export const translations = {
  en: {
    welcome:"Welcome", viewMenu:"View menu", yourOrder:"Your order", send:"Send order",
    orderSent:"Order sent", received:"The restaurant has received your order.",
    back:"Back to menu", orderMore:"Order more", waiter:"Call waiter", bill:"Ask for the bill",
    extras:"Choose your extras", add:"Add to order", total:"Total", table:"Table", search:"Search the menu",
    assistance:"I need assistance", water:"Water", cutlery:"Cutlery", other:"Other", sendRequest:"Send request",
    billConfirm:"Would you like the bill for", confirm:"Confirm", cancel:"Cancel",
    billAndPayment:"Bill & payment", choosePayment:"Your bill is ready. How would you like to pay?", totalBill:"Total bill",
    payInApp:"Pay in the app", payInAppSub:"Fast online payment — demo mode", payCardWaiter:"Pay by card to the waiter", payCardWaiterSub:"The waiter brings the card terminal",
    payCashWaiter:"Pay cash to the waiter", payCashWaiterSub:"The waiter comes to collect payment", paymentNote:"Online card payment is prepared in the demo but still needs a real payment provider before going live.",
    billRequested:"Bill requested", paymentChoiceSent:"Payment choice sent to the restaurant", onlinePaymentDemo:"Online payment selected — the restaurant has been notified"
  },
  fr: {
    welcome:"Bienvenue", viewMenu:"Voir le menu", yourOrder:"Votre commande", send:"Envoyer la commande",
    orderSent:"Commande envoyée", received:"Le restaurant a bien reçu votre commande.",
    back:"Retour au menu", orderMore:"Commander autre chose", waiter:"Appeler un serveur", bill:"Demander l’addition",
    extras:"Choisissez vos extras", add:"Ajouter", total:"Total", table:"Table", search:"Rechercher dans le menu",
    assistance:"J’ai besoin d’aide", water:"Eau", cutlery:"Couverts", other:"Autre", sendRequest:"Envoyer la demande",
    billConfirm:"Souhaitez-vous l’addition pour", confirm:"Confirmer", cancel:"Annuler",
    billAndPayment:"Addition & paiement", choosePayment:"Votre addition est prête. Comment souhaitez-vous payer ?", totalBill:"Total de l’addition",
    payInApp:"Payer dans l’app", payInAppSub:"Paiement en ligne rapide — mode démo", payCardWaiter:"Payer par carte au serveur", payCardWaiterSub:"Le serveur apporte le terminal de paiement",
    payCashWaiter:"Payer en espèces au serveur", payCashWaiterSub:"Le serveur vient encaisser à votre table", paymentNote:"Le paiement par carte dans l’app est préparé dans la démo mais devra être connecté à un prestataire de paiement réel avant mise en production.",
    billRequested:"Addition demandée", paymentChoiceSent:"Votre choix de paiement a été envoyé au restaurant", onlinePaymentDemo:"Paiement dans l’app sélectionné — le restaurant est prévenu"
  },
  es: {
    welcome:"Bienvenido", viewMenu:"Ver menú", yourOrder:"Tu pedido", send:"Enviar pedido",
    orderSent:"Pedido enviado", received:"El restaurante ha recibido tu pedido.",
    back:"Volver al menú", orderMore:"Pedir algo más", waiter:"Llamar al camarero", bill:"Pedir la cuenta",
    extras:"Elige tus extras", add:"Añadir", total:"Total", table:"Mesa", search:"Buscar en el menú",
    assistance:"Necesito ayuda", water:"Agua", cutlery:"Cubiertos", other:"Otro", sendRequest:"Enviar solicitud",
    billConfirm:"¿Quieres pedir la cuenta para", confirm:"Confirmar", cancel:"Cancelar",
    billAndPayment:"Cuenta y pago", choosePayment:"Tu cuenta está lista. ¿Cómo quieres pagar?", totalBill:"Total de la cuenta",
    payInApp:"Pagar en la app", payInAppSub:"Pago online rápido — modo demo", payCardWaiter:"Pagar con tarjeta al camarero", payCardWaiterSub:"El camarero trae el terminal de pago",
    payCashWaiter:"Pagar en efectivo al camarero", payCashWaiterSub:"El camarero cobra en tu mesa", paymentNote:"El pago con tarjeta en la app está preparado en la demo, pero necesita conectarse a un proveedor de pago real antes de usarse en producción.",
    billRequested:"Cuenta solicitada", paymentChoiceSent:"Tu forma de pago se ha enviado al restaurante", onlinePaymentDemo:"Pago en la app seleccionado — el restaurante ha sido avisado"
  }
};
