import { routesConfig } from 'constants/routes';
import { Route, Routes } from 'react-router-dom';

const RoutesComponent = () => (
	<Routes>
		{routesConfig.map(({ path, component: Component }) => (
			<Route key={path} path={path} element={<Component />} />
		))}
	</Routes>
);

export default RoutesComponent;
