import './App.css';
import AppRoutes from './routes';
import AppWrapper from './containers/AppWrapper/AppWrapper';

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <AppRoutes />
      </div>
    </AppWrapper>
  );
}

export default App;
