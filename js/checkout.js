import { getCartItems } from "./cart.js";

const checkoutForm = document.getElementById("checkout-form");

const customerNameInput = document.getElementById("customer-name");
const customerEmailInput = document.getElementById("customer-email");
const paymentMethodSelect = document.getElementById("payment-method");

const installmentsContainer = document.getElementById("installments-container");
const installmentsSelect = document.getElementById("installments");

const customerNameError = document.getElementById("customer-name-error");
const customerEmailError = document.getElementById("customer-email-error");
const paymentMethodError = document.getElementById("payment-method-error");
const installmentsError = document.getElementById("installments-error");

const checkoutMessage = document.getElementById("checkout-message");

function setFieldError(input, errorElement, message) {
  const hasError = Boolean(message);

  errorElement.textContent = message;
  errorElement.classList.toggle("hidden", !hasError);

  input.setAttribute("aria-invalid", String(hasError));

  input.classList.toggle("border-red-500/70", hasError);
  input.classList.toggle("border-[var(--color-border)]", !hasError);

  input.classList.toggle("focus:ring-red-500", hasError);
  input.classList.toggle("focus:ring-green-500", !hasError);
}

function validateCustomerName() {
  const name = customerNameInput.value.trim();
  const nameParts = name.split(/\s+/).filter(Boolean);

  let errorMessage = "";

  if (!name) {
    errorMessage = "Informe seu nome completo.";
  } else if (nameParts.length < 2) {
    errorMessage = "Informe seu nome e sobrenome.";
  }

  setFieldError(customerNameInput, customerNameError, errorMessage);

  return !errorMessage;
}

function validateCustomerEmail() {
  const email = customerEmailInput.value.trim();

  let errorMessage = "";

  if (!email) {
    errorMessage = "Informe seu e-mail.";
  } else if (customerEmailInput.validity.typeMismatch) {
    errorMessage = "Informe um endereço de e-mail válido.";
  }

  setFieldError(customerEmailInput, customerEmailError, errorMessage);

  return !errorMessage;
}

function validatePaymentMethod() {
  const paymentMethod = paymentMethodSelect.value;

  const errorMessage = paymentMethod ? "" : "Selecione uma forma de pagamento.";

  setFieldError(paymentMethodSelect, paymentMethodError, errorMessage);

  return !errorMessage;
}

function validateInstallments() {
  const isCreditCard = paymentMethodSelect.value === "credit-card";

  if (!isCreditCard) {
    setFieldError(installmentsSelect, installmentsError, "");
    return true;
  }

  const errorMessage = installmentsSelect.value
    ? ""
    : "Selecione a quantidade de parcelas.";

  setFieldError(installmentsSelect, installmentsError, errorMessage);

  return !errorMessage;
}

function validateCheckoutForm() {
  const isNameValid = validateCustomerName();
  const isEmailValid = validateCustomerEmail();
  const isPaymentMethodValid = validatePaymentMethod();
  const areInstallmentsValid = validateInstallments();

  return (
    isNameValid && isEmailValid && isPaymentMethodValid && areInstallmentsValid
  );
}

function updateInstallmentsVisibility() {
  const isCreditCard = paymentMethodSelect.value === "credit-card";

  installmentsContainer.classList.toggle("hidden", !isCreditCard);

  installmentsSelect.disabled = !isCreditCard;
  installmentsSelect.required = isCreditCard;

  if (!isCreditCard) {
    installmentsSelect.value = "";
    setFieldError(installmentsSelect, installmentsError, "");
  }
}

function showMessage(message, isError = false) {
  checkoutMessage.textContent = message;

  checkoutMessage.classList.toggle("text-red-500", isError);
  checkoutMessage.classList.toggle("text-green-600", !isError);
}

customerNameInput?.addEventListener("input", validateCustomerName);

customerEmailInput?.addEventListener("input", validateCustomerEmail);

paymentMethodSelect?.addEventListener("change", () => {
  updateInstallmentsVisibility();
  validatePaymentMethod();
});

installmentsSelect?.addEventListener("change", validateInstallments);

checkoutForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  checkoutMessage.textContent = "";

  if (!validateCheckoutForm()) {
    return;
  }

  const cartItems = getCartItems();

  if (cartItems.length === 0) {
    showMessage(
      "Seu carrinho está vazio. Adicione jogos antes de finalizar a compra.",
      true,
    );
    return;
  }

  const customerName = customerNameInput.value.trim();
  const customerEmail = customerEmailInput.value.trim();
  const paymentMethod = paymentMethodSelect.value;

  const installments =
    paymentMethod === "credit-card" ? Number(installmentsSelect.value) : null;

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qtdCart,
    0,
  );

  const formattedTotal = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const paymentDescription =
    paymentMethod === "pix" ? "PIX" : `Cartão de crédito em ${installments}x`;

  showMessage(
    `Compra simulada com sucesso! ${customerName}, o pedido de ${formattedTotal} foi registrado para ${customerEmail}. Pagamento: ${paymentDescription}.`,
  );

  console.log("Dados da compra simulada:", {
    customerName,
    customerEmail,
    paymentMethod,
    installments,
    total,
    items: cartItems,
  });
});

export function setupCheckout() {
  updateInstallmentsVisibility();
}
