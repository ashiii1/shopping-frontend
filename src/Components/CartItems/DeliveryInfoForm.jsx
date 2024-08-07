// import React, { useState } from 'react';
// import { Modal, Box, Typography, Button } from '@mui/material';
// import './DeliveryInfoForm.css';

// const DeliveryInfoForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [open, setOpen] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.address) newErrors.address = 'Address is required';
//     if (!formData.city) newErrors.city = 'City is required';
//     if (!formData.state) newErrors.state = 'State is required';
//     if (!formData.zip) newErrors.zip = 'ZIP Code is required';
//     if (!formData.country) newErrors.country = 'Country is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formErrors = validate();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       try {
//         const response = await fetch('/savedeliveryinfo', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'auth-token': localStorage.getItem('auth-token'), // Include token
//           },
//           body: JSON.stringify(formData),
//         });
//         const result = await response.json();
//         if (result.success) {
//           setOpen(true); // Open the modal
//         } else {
//           console.error(result.errors);
//           // Handle server errors (e.g., show a message to the user)
//         }
//       } catch (error) {
//         console.error('Error submitting delivery information:', error);
//         // Handle network errors (e.g., show a message to the user)
//       }
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='delivery-info-form'>
//       <h2>Delivery Information</h2>
//       <form onSubmit={handleSubmit}>
//         {errors.name && <div className="error">{errors.name}</div>}
//         <input 
//           type="text" 
//           name="name" 
//           placeholder="Full Name" 
//           value={formData.name} 
//           onChange={handleChange} 
//         />
        
//         {errors.address && <div className="error">{errors.address}</div>}
//         <input 
//           type="text" 
//           name="address" 
//           placeholder="Address" 
//           value={formData.address} 
//           onChange={handleChange} 
//         />
        
//         {errors.city && <div className="error">{errors.city}</div>}
//         <input 
//           type="text" 
//           name="city" 
//           placeholder="City" 
//           value={formData.city} 
//           onChange={handleChange} 
//         />
        
//         {errors.state && <div className="error">{errors.state}</div>}
//         <input 
//           type="text" 
//           name="state" 
//           placeholder="State" 
//           value={formData.state} 
//           onChange={handleChange} 
//         />
        
//         {errors.zip && <div className="error">{errors.zip}</div>}
//         <input 
//           type="text" 
//           name="zip" 
//           placeholder="ZIP Code" 
//           value={formData.zip} 
//           onChange={handleChange} 
//         />
        
//         {errors.country && <div className="error">{errors.country}</div>}
//         <input 
//           type="text" 
//           name="country" 
//           placeholder="Country" 
//           value={formData.country} 
//           onChange={handleChange} 
//         />
        
//         <button type="submit">Submit</button>
//       </form>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-title"
//         aria-describedby="modal-description"
//       >
//         <Box sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 400,
//           bgcolor: 'background.paper',
//           border: '2px solid #000',
//           boxShadow: 24,
//           p: 4,
//         }}>
//           <Typography id="modal-title" variant="h6" component="h2">
//             Confirmation
//           </Typography>
//           <Typography id="modal-description" sx={{ mt: 2 }}>
//             Product will be delivered to:
//             <br />
//             {formData.name}
//             <br />
//             {formData.address}, {formData.city}, {formData.state}, {formData.zip}, {formData.country}
//           </Typography>
//           <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
//             Close
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default DeliveryInfoForm;

//crct
import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import './DeliveryInfoForm.css';

const DeliveryInfoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'ZIP Code is required';
    if (!formData.country) newErrors.country = 'Country is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      onSubmit(formData); // Pass form data to parent component
      setOpen(true); // Open the modal
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='delivery-info-form'>
      <h2>Delivery Information</h2>
      <form onSubmit={handleSubmit}>
        {errors.name && <div className="error">{errors.name}</div>}
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        
        {errors.address && <div className="error">{errors.address}</div>}
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        
        {errors.city && <div className="error">{errors.city}</div>}
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        
        {errors.state && <div className="error">{errors.state}</div>}
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
        
        {errors.zip && <div className="error">{errors.zip}</div>}
        <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} />
        
        {errors.country && <div className="error">{errors.country}</div>}
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
        
        <button type="submit">Submit</button>
      </form>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-title" variant="h6" component="h2">
            Confirmation
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Product will be delivered to:
            <br />
            {formData.address}, {formData.city}, {formData.state}, {formData.zip}, {formData.country}
          </Typography>
          <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DeliveryInfoForm;

//crct one
// import React, { useState } from 'react';
// import './DeliveryInfoForm.css';

// const DeliveryInfoForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//     country: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.address) newErrors.address = 'Address is required';
//     if (!formData.city) newErrors.city = 'City is required';
//     if (!formData.state) newErrors.state = 'State is required';
//     if (!formData.zip) newErrors.zip = 'ZIP Code is required';
//     if (!formData.country) newErrors.country = 'Country is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validate();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       onSubmit(formData); // Pass form data to parent component
//     }
//   };

//   return (
//     <div className='delivery-info-form'>
//       <h2>Delivery Information</h2>
//       <form onSubmit={handleSubmit}>
//         {errors.name && <div className="error">{errors.name}</div>}
//         <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        
//         {errors.address && <div className="error">{errors.address}</div>}
//         <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        
//         {errors.city && <div className="error">{errors.city}</div>}
//         <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
        
//         {errors.state && <div className="error">{errors.state}</div>}
//         <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
        
//         {errors.zip && <div className="error">{errors.zip}</div>}
//         <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} />
        
//         {errors.country && <div className="error">{errors.country}</div>}
//         <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default DeliveryInfoForm;
