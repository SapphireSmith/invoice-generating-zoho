// components/BillDetails.js
import React, { useState } from 'react';

const BillDetails = ({ onAddOtherDetails, onAddItem, onDeleteItem }) => {

	// State variables for seller details
	const [sellerDetails, setSellerDetails] = useState({
		name: 'Bhumika Highstreet India Private Limited',
		address: 'JL.No-95 & 8, Mouza-chandipur, Harinarayan chak, Amarabera, District-Howrah, West Bengal, uluberia, Howrah, West Bengal, India - 711316',
		city: 'Howrah',
		state: 'West Bengal',
		pincode: '711316',
		panNo: 'AAICB4842N',
		gstRegistrationNo: '19AAICB4842N1Z5'
	});

	// State variables for billing details
	const [billingDetails, setBillingDetails] = useState({
		name: 'Rejani Devi',
		address: 'Poomkoyickkal house, pandarathuruthu, KARUNAGAPPALLY',
		city: 'KARUNAGAPPALLY',
		state: 'Kerala',
		pincode: '690518',
		stateUtCode: '32' // Assuming State/UT Code as a number
	});

	// State variables for shipping details
	const [shippingDetails, setShippingDetails] = useState({
		name: 'Rejani Devi',
		address: 'Poomkoyickkal house, pandarathuruthu, KARUNAGAPPALLY',
		city: 'KARUNAGAPPALLY',
		state: 'Kerala',
		pincode: '690518',
		stateUtCode: '32' // Assuming State/UT Code as a number
	});

	// State variables for order details
	const [orderDetails, setOrderDetails] = useState({
		orderNo: 'OD428827410283358100',
		orderDate: '07-08-2023'
	});

	// State variables for invoice details
	const [invoiceDetails, setInvoiceDetails] = useState({
		invoiceNo: 'INV428827410283358100',
		invoiceDetails: 'Goods sold as are intended for end user consumption and not for re-sale.',
		invoiceDate: '07-08-2023'
	});

	// State variable for reverse charge
	const [reverseCharge, setReverseCharge] = useState(false); // Default to No

	const [formDisable, setFormDisable] = useState(false)

	const [product, setProduct] = useState('');
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [grossAmout, setGrossAmout] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [gst, setGstPercentage] = useState('18%');
	const [errorMessage, setErrorMessage] = useState('');


	const handleDetails = (e) => {
		const otherDetails = {
			sellerDetails,
			billingDetails,
			shippingDetails,
			orderDetails,
			invoiceDetails,
			reverseCharge
		}
		onAddOtherDetails(otherDetails)
		setFormDisable(true)

	}

	const handleAddItem = () => {
		if (product === '' || description === '' || grossAmout === 0) {
			alert(`Please fill all the fields.`);
			return;
		}

		// Check if the item contains only alphabetical characters
		if (!/^[a-zA-Z]+$/.test(product)) {
			setErrorMessage(`Item should only contain 
				alphabetical characters.`);
			return;
		}
		const newItem = { product, description, quantity, grossAmout, discount, };
		onAddItem(newItem);
		setProduct('')
		setDescription('')
		setQuantity(1)
		setGrossAmout(0)
		setDiscount(0)
		setErrorMessage('');
	};

	return (
		<>
			<div>
				<h1>Enter Invoice Details</h1>
				<h2>Seller Details:</h2>
				<div>
					<label>Name:</label>
					<input
						type="text"
						value={sellerDetails.name}
						onChange={(e) => setSellerDetails({ ...sellerDetails, name: e.target.value })}
						required
						disabled={formDisable}
					/>
				</div>
				<div>
					<label>Address:</label>
					<textarea
						cols={60}
						value={sellerDetails.address}
						onChange={(e) => setSellerDetails({ ...sellerDetails, address: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>City:</label>
					<input
						type="text"
						value={sellerDetails.city}
						onChange={(e) => setSellerDetails({ ...sellerDetails, city: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>State:</label>
					<input
						type="text"
						value={sellerDetails.state}
						onChange={(e) => setSellerDetails({ ...sellerDetails, state: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>Pincode:</label>
					<input
						type="text"
						value={sellerDetails.pincode}
						onChange={(e) => setSellerDetails({ ...sellerDetails, pincode: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>PAN No.:</label>
					<input
						type="text"
						value={sellerDetails.panNo}
						onChange={(e) => setSellerDetails({ ...sellerDetails, panNo: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>GST Registration No.:</label>
					<input
						type="text"
						value={sellerDetails.gstRegistrationNo}
						onChange={(e) => setSellerDetails({ ...sellerDetails, gstRegistrationNo: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>

				<h2>Billing Details:</h2>
				<div>
					<label>Name:</label>
					<input
						type="text"
						value={billingDetails.name}
						onChange={(e) => setBillingDetails({ ...billingDetails, name: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>Address:</label>
					<textarea
						cols={60}
						value={billingDetails.address}
						onChange={(e) => setBillingDetails({ ...billingDetails, address: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>City:</label>
					<input
						type="text"
						value={billingDetails.city}
						onChange={(e) => setBillingDetails({ ...billingDetails, city: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>State:</label>
					<input
						type="text"
						value={billingDetails.state}
						onChange={(e) => setBillingDetails({ ...billingDetails, state: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>Pincode:</label>
					<input
						type="text"
						value={billingDetails.pincode}
						onChange={(e) => setBillingDetails({ ...billingDetails, pincode: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>State/UT Code:</label>
					<input
						type="text"
						value={billingDetails.stateUtCode}
						onChange={(e) => setBillingDetails({ ...billingDetails, stateUtCode: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>

				<h2>Shipping Details:</h2>
				<div>
					<label>Name:</label>
					<input
						type="text"
						value={shippingDetails.name}
						onChange={(e) => setShippingDetails({ ...shippingDetails, name: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>Address:</label>
					<textarea
						cols={60}
						value={shippingDetails.address}
						onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>City:</label>
					<input
						type="text"
						value={shippingDetails.city}
						onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>State:</label>
					<input
						type="text"
						value={shippingDetails.state}
						onChange={(e) => setShippingDetails({ ...shippingDetails, state: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>Pincode:</label>
					<input
						type="text"
						value={shippingDetails.pincode}
						onChange={(e) => setShippingDetails({ ...shippingDetails, pincode: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>State/UT Code:</label>
					<input
						type="text"
						value={shippingDetails.stateUtCode}
						onChange={(e) => setShippingDetails({ ...shippingDetails, stateUtCode: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>

				<h2>Order Details:</h2>
				<div>
					<label>Order No.:</label>
					<input
						type="text"
						value={orderDetails.orderNo}
						onChange={(e) => setOrderDetails({ ...orderDetails, orderNo: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>Order Date:</label>
					<input
						type="text"
						value={orderDetails.orderDate}
						onChange={(e) => setOrderDetails({ ...orderDetails, orderDate: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>

				<h2>Invoice Details:</h2>
				<div>
					<label>Invoice No.:</label>
					<input
						type="text"
						value={invoiceDetails.invoiceNo}
						onChange={(e) => setInvoiceDetails({ ...invoiceDetails, invoiceNo: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>Invoice Details:</label>
					<textarea
						cols={60}
						value={invoiceDetails.invoiceDetails}
						onChange={(e) => setInvoiceDetails({ ...invoiceDetails, invoiceDetails: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>
				<div>
					<label>Invoice Date:</label>
					<input
						type="text"
						value={invoiceDetails.invoiceDate}
						onChange={(e) => setInvoiceDetails({ ...invoiceDetails, invoiceDate: e.target.value })}
						required
						disabled={formDisable}

					/>
				</div>

				<h2>Reverse Charge:</h2>
				<div>
					<label>Reverse Charge:</label>
					<select
						value={reverseCharge}
						onChange={(e) => setReverseCharge(e.target.value === 'true')}
						required
						disabled={formDisable}

					>
						<option value="false">No</option>
						<option value="true">Yes</option>
					</select>
				</div>
				<br />

				{formDisable ? <button onClick={() => {
					setFormDisable(false)
				}}>UpdateForm</button> : <button onClick={handleDetails}>Save Details</button>
				}
				
			</div>
			<div>
				<h3>Enter Product details</h3>
				<label>Product Name:</label>
				<input type="text"
					value={product}
					onChange={
						(e) =>
							setProduct(e.target.value)} />
				<label>Description:</label>
				<textarea cols={60} type="text"
					value={description}
					onChange={
						(e) =>
							setDescription(e.target.value)} />
				<label>Quantity:</label>
				<input type="number"
					value={quantity}
					onChange={
						(e) =>
							setQuantity(e.target.value)} />
				<label>Gross Amount:</label>
				<input type="number"
					value={grossAmout}
					onChange={
						(e) =>
							setGrossAmout(e.target.value)} />

				<label>Discount Amount:</label>
				<input type="number"
					value={discount}
					onChange={
						(e) => {
							setDiscount(e.target.value)
						}
					} />

				<label>GST</label>
				<input type="text"
					value={gst}
					// onChange={
					// 	(e) =>
					// 		setTaxableValue(e.target.value)}
					disabled
				/>
				<button
					onClick={handleAddItem}>
					Add Item
				</button>
				<p style={{ color: 'red' }}>{errorMessage}</p>

			</div>
		</>
	);
};

export default BillDetails;
