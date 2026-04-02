'use client';

import { useState } from 'react';

const COUNTRY_CODES = [
  { code: '+91', country: 'IN', label: '🇮🇳 +91' },
  { code: '+1', country: 'US', label: '🇺🇸 +1' },
  { code: '+44', country: 'GB', label: '🇬🇧 +44' },
  { code: '+971', country: 'AE', label: '🇦🇪 +971' },
  { code: '+65', country: 'SG', label: '🇸🇬 +65' },
  { code: '+61', country: 'AU', label: '🇦🇺 +61' },
  { code: '+49', country: 'DE', label: '🇩🇪 +49' },
  { code: '+81', country: 'JP', label: '🇯🇵 +81' },
  { code: '+86', country: 'CN', label: '🇨🇳 +86' },
  { code: '+33', country: 'FR', label: '🇫🇷 +33' },
  { code: '+972', country: 'IL', label: '🇮🇱 +972' },
  { code: '+966', country: 'SA', label: '🇸🇦 +966' },
  { code: '+974', country: 'QA', label: '🇶🇦 +974' },
  { code: '+82', country: 'KR', label: '🇰🇷 +82' },
  { code: '+60', country: 'MY', label: '🇲🇾 +60' },
];

interface PhoneInputProps {
  id: string;
  name: string;
  required?: boolean;
}

export default function PhoneInput({ id, name, required = true }: PhoneInputProps) {
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  function handlePhoneChange(value: string) {
    // Strip non-digits
    const digits = value.replace(/\D/g, '');
    setPhone(digits);

    if (digits.length > 0 && digits.length !== 10) {
      setError('Phone number must be exactly 10 digits');
    } else {
      setError('');
    }
  }

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        Phone *
      </label>
      <div className="flex gap-2">
        <select
          name={`${name}_country_code`}
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="w-[100px] shrink-0 rounded-md border border-gray-300 px-2 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white"
          aria-label="Country code"
        >
          {COUNTRY_CODES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
          ))}
        </select>
        <input
          type="tel"
          id={id}
          value={phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          pattern="[0-9]{10}"
          maxLength={10}
          required={required}
          placeholder="10-digit number"
          className={`flex-1 rounded-md border px-3 py-2 text-sm focus:ring-1 outline-none ${
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
          }`}
        />
      </div>
      {/* Hidden field that sends the combined value */}
      <input type="hidden" name={name} value={`${countryCode} ${phone}`} />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
