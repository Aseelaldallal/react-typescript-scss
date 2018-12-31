import * as React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import { AxiosInstance } from 'axios';

const withErrorHandler = (WrappedComponent: any, axios: AxiosInstance) => {
	return class extends React.Component {
		state = {
			error: null
		};

		componentWillMount() {
			axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});
			axios.interceptors.response.use(
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
	};
};

export default withErrorHandler;
