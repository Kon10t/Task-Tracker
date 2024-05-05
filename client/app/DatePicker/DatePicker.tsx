import {} from 'react';

interface DatePickerProps {
  value: Date;
  onChange: (value: Date) => void;
  min?: Date;
  max?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({value, onChange, min, max}) => {
  return <div>Date</div>
}