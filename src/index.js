import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { App } from 'components/App/App';
import './index.css';

export * from 'redux/filter/slice';
export * from 'redux/contacts/slice';
export * from 'redux/selectors';
export * from 'components/ContactsForm/ContactsForm';
export * from 'components/ContactsList/ContactsList';
export * from 'components/ContactsFilterInput/ContactsFilterInput';
export * from 'components/App/App';
export * from 'components/ContactsForm/ContactsForm.styled';
export * from 'components/ContactsList/ContactsList.styled';
export * from 'components/ui/Button.styled';
export * from 'components/ui/AppContainer.styled';
export * from 'components/ui/Form.styled';
export * from 'components/ui/Input.styled';
export * from 'components/ui/Label.styled';
export * from 'components/ListItem/ListItem';
export * from 'components/ListItem/ListItem.styled';
export * from 'utils/capitalizeFirstLowercaseRest';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>L O A D I N G . . .</h1>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
