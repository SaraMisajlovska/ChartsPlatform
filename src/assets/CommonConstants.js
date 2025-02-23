import hexToRgba from "hex-to-rgba";
import {cyan, geekblue, gold, magenta, purpleDark} from "@ant-design/colors";

export const headerStyleWithProps = (colorBgContainer, borderRadiusLG) => {
  return {
    padding: 0,
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
    margin: '6px 16px 0',
    overflow: 'initial',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-between',
  }
};

export const buttonStyle = {
  fontSize: '16px',
  width: 64,
  height: 64,
  marginRight: '100px',
};

export const footerStyle = {
  textAlign: 'center',
};

export const siderStyle = {
  overflow: 'auto',
  height: 'auto',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

export const hexToRgbaWithAlpha = (hex) => hexToRgba(hex, 0.5);

export const fiveMinutes = 300000;

export const CancellationReason = {
  HIGH_SHIPPING_COST: "HIGH SHIPPING COST",
  COMPLEX_CHECKOUT: "COMPLEX CHECKOUT",
  PAYMENT_ISSUES: "PAYMENT ISSUES",
  TECHNICAL_ERROR: "TECHNICAL ERROR",
  OTHER:"OTHER"
}

export const reasonColors = {
  HIGH_SHIPPING_COST: hexToRgbaWithAlpha(magenta[6]),
  COMPLEX_CHECKOUT: hexToRgbaWithAlpha(geekblue[6]),
  PAYMENT_ISSUES: hexToRgbaWithAlpha(gold[6]),
  TECHNICAL_ERROR: hexToRgbaWithAlpha(cyan[6]),
  OTHER: hexToRgbaWithAlpha(purpleDark[6])
};
