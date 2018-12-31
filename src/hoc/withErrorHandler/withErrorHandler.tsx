import * as React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import { AxiosInstance } from 'axios';

const withErrorHandler = (WrappedComponent: any, axios: AxiosInstance) => {
	return class extends React.Component {
		state = {
			error: null
		};

		reqInterceptor = -1;
		resInterceptor = -1;

		componentWillMount() {
			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(
				res => res,
				error => {
					this.setState({ error });
				}
			);
		}

		errorConfirmedHandler = () => {
			this.setState({ error: null });
		};

		render() {
			return (
				<>
					<Modal
						show={this.state.error !== null}
						modalClosed={this.errorConfirmedHandler}
					>
						{this.state.error
							? (this.state.error as any).message
							: null}
					</Modal>
					<WrappedComponent {...this.props} />
				</>
			);
		}

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}
	};
};

export default withErrorHandler;
