import { Provider } from 'react-redux';
import { store } from './redux/store';
import TemperatureConverter from './screens/TemperatureConverter';

export default function App() {
  return (
    <Provider store={store}>
      <TemperatureConverter />
    </Provider>
  );
}
