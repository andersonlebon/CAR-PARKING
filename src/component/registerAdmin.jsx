import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import axios from 'axios';

class NewAdmin extends Component {
	state = {
		allInput: {
			name: '',
			lastName: '',
			email: '',
			password: '',
			phoneNumber: '',
		},
    post:{},
		errorMessage: '',
	};

	handelChange = ({ currentTarget: input }) => {
		const allInput = { ...this.state.allInput };
		allInput[input.name] = input.value;
		this.setState({ allInput });
	};
	handelSubmit = async (e) => {
		e.preventDefault();
		const { data: post } = await axios.post(
			' https://smart-parking-management.herokuapp.com/api/admin',
			this.state.allInput
		);
    this.setState({post})
    setTimeout(() => {
      this.props.history.push(`/home`);
    },500)
	};
	render() {
		const { handelChange, handelSubmit } = this;
		const { name, lastName, email, password, phoneNumber } =
			this.state.allInput;
		return (
			<div className='register'>
				<h1 style={{ fontSize: '24px' }}>REGISTER AN ADMIN</h1>
				<form onSubmit={handelSubmit}>
					<label htmlFor='driver'>
						<p>Name</p>
						<div className='input-content'>
							<input
								id='admin'
								name='name'
								value={name}
								type='text'
								placeholder='Enter your name'
								onChange={handelChange}
								required
							/>
							<span>
								<FaRegUser />
							</span>
						</div>
					</label>
					<label htmlFor='driver'>
						<p>Last Name</p>
						<div className='input-content'>
							<input
								id='driver'
								name='lastName'
								value={lastName}
								type='text'
								placeholder='Enter your lastname'
								onChange={handelChange}
								required
							/>
						</div>
					</label>
					<label htmlFor='driver'>
						<p>email </p>
						<div className='input-content'>
							<input
								id='admin'
								name='email'
								value={email}
								type='email'
								placeholder='Enter your email'
								onChange={handelChange}
								required
							/>
						</div>
					</label>
					<label htmlFor='driver'>
						<p>Password</p>
						<div className='input-content'>
							<input
								id='driver'
								name='password'
								value={password}
								type='text'
								placeholder='Enter you password'
								onChange={handelChange}
								required
							/>
						</div>
					</label>
					<label htmlFor='driver'>
						<p>PhoneNumber</p>
						<div className='input-content'>
							<input
								id='driver'
								name='phoneNumber'
								value={phoneNumber}
								type='text'
								placeholder='Enter your phone Number'
								onChange={handelChange}
								required
							/>
						</div>
					</label>
					<div className='go-to'>
						<button className='btne'>
							<RiArrowRightSLine />
						</button>
						<Link to='/home' className='btne'>
							<RiArrowLeftSLine />
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default NewAdmin;
