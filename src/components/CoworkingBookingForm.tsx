'use client';

import { useState, useEffect, useRef, type FormEvent } from 'react';

interface CoworkingBookingFormProps {
  defaultResource?: string;
}

const DURATION_OPTIONS: Record<string, string[]> = {
  'Conference Room': ['1 Hour', '2 Hours', '4 Hours (Half Day)', 'Full Day (9am–6pm)'],
  'Podcasting Studio': ['1 Hour', '2 Hours', '4 Hours (Half Day)', 'Full Day (9am–6pm)'],
  'Coworking Seat': ['1 Day', '1 Week', '2 Weeks', '1 Month', '3 Months', '6 Months'],
};

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM',
];

export default function CoworkingBookingForm({ defaultResource }: CoworkingBookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [resource, setResource] = useState(defaultResource || '');
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultResource) {
      setResource(defaultResource);
    }
  }, [defaultResource]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/mwvwnppl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please try again or call us at 8130292965.');
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-amber-50 border border-amber-200 p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Booking Request Received!</h3>
        <p className="text-amber-700 mb-2">
          Your booking request has been submitted successfully.
        </p>
        <p className="text-sm text-amber-600">
          Please note that bookings are <strong>not auto-confirmed</strong>. Our team will review availability and confirm your booking within 24 hours via email or phone.
        </p>
      </div>
    );
  }

  const durations = resource ? DURATION_OPTIONS[resource] || [] : [];
  const isSeats = resource === 'Coworking Seat';
  const isHourly = resource === 'Conference Room' || resource === 'Podcasting Studio';

  // Get tomorrow's date as minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div ref={formRef}>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Hidden fields */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="_subject" value={`Coworking Booking Request — ${resource || 'General'}`} />
        <input type="hidden" name="inquiry_type" value="coworking_booking" />

        {/* Resource selection */}
        <div>
          <label htmlFor="resource" className="block text-sm font-medium text-gray-700 mb-1">What would you like to book? *</label>
          <select
            id="resource"
            name="resource"
            required
            value={resource}
            onChange={(e) => setResource(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white"
          >
            <option value="">Select a resource</option>
            <option value="Conference Room">Conference Room (seats 10–12)</option>
            <option value="Podcasting Studio">Podcasting & Video Studio</option>
            <option value="Coworking Seat">Coworking Seat(s)</option>
          </select>
        </div>

        {/* Seats count — only for coworking */}
        {isSeats && (
          <div>
            <label htmlFor="seats_needed" className="block text-sm font-medium text-gray-700 mb-1">Number of Seats *</label>
            <input
              type="number"
              id="seats_needed"
              name="seats_needed"
              min={1}
              max={40}
              required
              placeholder="1–40"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <p className="text-xs text-gray-400 mt-1">Up to 40 seats available</p>
          </div>
        )}

        {/* Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700 mb-1">
              {isSeats ? 'Start Date *' : 'Preferred Date *'}
            </label>
            <input
              type="date"
              id="preferred_date"
              name="preferred_date"
              required
              min={minDate}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>
          {isHourly && (
            <div>
              <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
              <select
                id="preferred_time"
                name="preferred_time"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white"
              >
                <option value="">Select a time slot</option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Duration */}
        {resource && (
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration *</label>
            <select
              id="duration"
              name="duration"
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white"
            >
              <option value="">Select duration</option>
              {durations.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        )}

        {/* Contact details */}
        <div className="border-t border-gray-200 pt-5 mt-5">
          <p className="text-sm font-medium text-gray-900 mb-4">Your Details</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="booking_name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input type="text" id="booking_name" name="name" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label htmlFor="booking_email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input type="email" id="booking_email" name="email" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="booking_phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
            <input type="tel" id="booking_phone" name="phone" required className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label htmlFor="booking_company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input type="text" id="booking_company" name="company" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
          </div>
        </div>

        <div>
          <label htmlFor="booking_message" className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
          <textarea
            id="booking_message"
            name="message"
            rows={3}
            placeholder="e.g. Need projector, whiteboard, specific seating arrangement..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-y"
          />
        </div>

        {/* Notice */}
        <div className="bg-blue-50 border border-blue-100 rounded-md px-4 py-3">
          <p className="text-xs text-blue-700">
            <strong>Note:</strong> Submitting this form sends a booking request. Your booking will be confirmed by our team within 24 hours after checking availability. You will receive confirmation via email or phone.
          </p>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? 'Submitting...' : 'Request Booking'}
        </button>
      </form>
    </div>
  );
}
