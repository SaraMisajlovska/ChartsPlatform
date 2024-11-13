import hexToRgba from "hex-to-rgba";

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
