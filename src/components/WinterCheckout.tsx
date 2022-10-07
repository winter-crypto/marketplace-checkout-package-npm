import React from "react";

const WinterCheckout: React.FC<{
  showModal: boolean;
  contractAddress?: string;
  tokenId?: string;
  walletAddress?: string;
  email?: string;
  mintQuantity?: number;
  production?: boolean;
  fillSource?: string;
  orderSource?: string;
  onClose?: () => void;
  onSuccess?: (txId: string, email: string) => void;
}> = ({
  showModal,
  contractAddress,
  tokenId,
  walletAddress,
  email,
  mintQuantity,
  production,
  fillSource,
  orderSource,
  onClose,
  onSuccess,
}) => {
  const [projectUrl, setProjectUrl] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowEvent = (
        e: Event & {
          data:
            | { name: string; transactionhash: string; email: string }
            | string;
        }
      ) => {
        if (typeof e.data === "string") {
          if (e.data === "closeWinterCheckoutModal") {
            onClose?.();
          }
        } else {
          if (e.data.name === "closeWinterCheckoutModal") {
            onClose?.();
          }
        }
      };
      window.addEventListener("message", handleWindowEvent);
      return () => window.removeEventListener("message", handleWindowEvent);
    }
  }, [onClose, onSuccess]);

  React.useEffect(() => {
    let queryString = "contractAddress=" + contractAddress;
    queryString += "&tokenId=" + tokenId;
    if (walletAddress) {
      queryString += "&walletAddress=" + walletAddress;
    }
    if (email) {
      queryString += "&email=" + email;
    }
    if (mintQuantity) {
      queryString += "&mintQuantity=" + mintQuantity;
    }
    if (fillSource) {
      queryString += `&fillSource=` + fillSource;
    }
    if (orderSource) {
      queryString += `&orderSource=` + orderSource;
    }

    const url = production
      ? "https://marketplace-checkout.usewinter.com/?" + queryString
      : "https://sandbox-marketplace-nft-checkout.onrender.com/?" + queryString;

    setProjectUrl(url);
  }, [
    contractAddress,
    tokenId,
    production,
    walletAddress,
    email,
    mintQuantity,
    fillSource,
    orderSource,
  ]);

  return showModal ? (
    <div
      dangerouslySetInnerHTML={{
        __html: `<iframe id="winter-checkout" src="${projectUrl}" style="color-scheme: light; position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0px; padding: 0px; overflow: hidden; z-index: 999999; height: 100%;" />`,
      }}
    />
  ) : (
    <></>
  );
};

export default WinterCheckout;
