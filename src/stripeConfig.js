import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51QRzaEAJkArReWBtyOqbM5yYJT8wyXnINwrBvTCCLmneRD7l32kK3u5AKovFUEvtZrsFVI9KwzVg6EFRw5gJR4AJ00VHrEnH8Y"
);
