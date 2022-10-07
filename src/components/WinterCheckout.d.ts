import React = require("react");
declare const WinterCheckout: React.FC<{
  showModal: boolean;
  contractAddress?: string;
  tokenId?: string;
  walletAddress?: string;
  email?: string;
  mintQuantity?: number;
  title?: string;
  brandImage?: string;
  production?: boolean;
  fillSource?: string;
  onClose?: () => void;
  onSuccess?: (txId: string, email: string) => void;
}>;
export default WinterCheckout;
