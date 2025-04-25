const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry === 'function') {
    import('web-vitals').then((vitals) => {
      vitals.getCLS(onPerfEntry);
      vitals.getFID(onPerfEntry);
      vitals.getFCP(onPerfEntry);
      vitals.getLCP(onPerfEntry);
      vitals.getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
