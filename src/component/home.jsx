import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NewCar from "./common/resgisterCar";
import MainMenu from "./mainMenu";
import MainSide from "./mainSide";
import SubMenu from "./sub-menu";
import NotFound from "./common/notFound";
import axios from 'axios';
import NewAdmin from "./registerAdmin";


class Home extends Component {
	state = {
		changeClass: false,
		garage: [],
		currentPage: 1,
		pageSize: 5,
		getSubMenu: false,
		data: "",
	};
	handelChange = (e) => {
		let data = this.state.data;
		let currentPage = this.state.currentPage;
		currentPage = 1;
		data = e.currentTarget.value;
		this.setState({ data, currentPage });
	};
	async	componentDidMount() {
		const {data} = await axios.get(' https://smart-parking-management.herokuapp.com/api/customers')
		this.setState({ garage: data });

	}
	async componentDidUpdate() {
		const {data} = await axios.get(' https://smart-parking-management.herokuapp.com/api/customers')
		this.setState({ garage: data });
	}
	handleChangePage = (page) => {
		this.setState({ currentPage: page });
	};

	handelReg = () => {
		this.props.history.push("/registerNewCar");
	};
	handelDelete = async (_id) => {
		const {data} = await axios.delete(` https://smart-parking-management.herokuapp.com/api/customer/${_id}`);
		const {data: cars } = await axios.get(' https://smart-parking-management.herokuapp.com/api/customers')
		this.setState({ garage: cars });
	};
	handelShowToMenu = (id) => {
		let getSubMenu = this.state.getSubMenu;
		getSubMenu = true;
		this.setState({ getSubMenu });
		this.props.history.push(`/home/${id}`);
	};
	render() {
		const { ShowMenu } = this.props;
		const { garage, allInput, currentPage, data, pageSize } = this.state;

		return (
			<div className="home">
				<div className="home-content">
					<Route
						path="/home/:id"
						render={(props) => (
							<MainMenu cars={garage} ShowMenu={ShowMenu} {...props} />
						)}
					/>
					<Route
						path="/home/:id"
						exact
						render={(props) => (
							<SubMenu
								cars={garage}
								ShowMenu={ShowMenu}
								getSubMenu={this.state.getSubMenu}
								{...props}
							/>
						)}
					/>

						<div className="side">
						<Switch>
							<Route
								path="/home"
								exact
								render={(props) => (
									<MainSide
										garage={garage}
										data={data}
										onChange={this.handelChange}
										onShowToMenu={this.handelShowToMenu}
										onChangePage={this.handleChangePage}
										currentPage={currentPage}
										onDelete={this.handelDelete}
										pageSize={pageSize}
										onSort={this.handleSort}
										onReg={this.handelReg}
										{...props}
									/>
								)}
							/>
							<Route
								path="/home/registerNewCar/:id"
								render={(props) => (
									<NewCar
										onChange={this.handelChange}
										inputs={allInput}
										onSubmit={this.handelSubmit}
										{...props}
									/>
								)}
							/>
							<Route
								path="/home/admin/new"
								render={(props) => (
									<NewAdmin
										onChange={this.handelChange}
										inputs={allInput}
										onSubmit={this.handelSubmit}
										{...props}
									/>
								)}
							/>

							<Redirect to="/notfound" component={NotFound} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
