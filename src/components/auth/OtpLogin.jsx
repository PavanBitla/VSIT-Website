import React, { useState } from 'react';

const OtpLogin = () => {
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 'phone') {
      // Handle phone number submission and OTP generation
      console.log('Phone submitted:', phone);
      setStep('otp');
    } else {
      // Handle OTP verification
      console.log('OTP submitted:', otp);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {step === 'phone' ? (
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
      ) : (
        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
            Enter OTP
          </label>
          <input
            id="otp"
            type="text"
            required
            maxLength="6"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
          />
          <button
            type="button"
            onClick={() => setStep('phone')}
            className="mt-2 text-sm text-red-600 hover:text-red-500"
          >
            Change Phone Number
          </button>
        </div>
      )}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
      >
        {step === 'phone' ? 'Send OTP' : 'Verify OTP'}
      </button>
    </form>
  );
};

export default OtpLogin;