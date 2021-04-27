# React Navigation Menu

A straightfroward navigation menu built as a React component.

```javascript
npm i react-paypal-smart-button
```

3. Implement in your app, as per the following example:

```javascript
import PayPalButton from 'react-paypal-smart-button'

function App() {
  return (
      <PayPalButton 
        price={100}
        description="YOUR_PRODUCT_DESCRIPTION"
        clientId="YOUR_PAYPAL_APP_CLIENT_ID"
        currency="USD"
        paySubmit={() => handlePaypalSuccess()}
       />
  );
}

export default App;
```


## Dependencies

None, just use it in your react project.

## That's it!

