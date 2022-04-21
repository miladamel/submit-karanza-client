import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {

	let navigate = useNavigate();

	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		number: "",
	});
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};



	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3005/api/users";
			const { data: res } = await axios.post(url, data);
			 navigate("/success");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	const handleInput = () => {

		var
		persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
		fixNumbers = function (str){
			if(typeof str === 'string')
			{
				for(var i=0; i<10; i++)
				{
				str = str.replace(persianNumbers[i], i);
				}
			}
			return str;
		};
		var mystr = document.getElementById('number').value 
		const value = fixNumbers(mystr);
		 document.getElementById('number').value =  value ;



		// var
		//  englishNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		// persianNumber = ['۰', '۱', '۲', '۳', '۴', '۵', '۶' , '۷', '۸', '۹'],
		// x = '۰۹۳۶۱۲۵۹۸۰۹';
		//  for(let i = 0; i <= 10 ; i++) {
		//  	console.log(x.replace(persianNumber[i],i));
		//  }
	}

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>خوش آمدید</h1>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>ثبت اطلاعات</h1>
						<input
							type="text"
							placeholder="نام"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="نام خانوادگی"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="آدرس ایمیل"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>		
						<input
							type="string"
							placeholder="شماره تلفن"
							id="number"
							name="number"
							onChange={handleChange}
							onKeyUp={handleInput}
							value={data.number}
							className={styles.input}
						/>
						<p id='demo'>

						</p>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							ثبت
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
