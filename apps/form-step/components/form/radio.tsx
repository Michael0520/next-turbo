interface RadioButtonsProps {
  name: string;
  options: { label: string; value: string }[];
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: string;
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({ name, options, selectedValue, onChange, errorMsg }) => {
  return (
    <fieldset className="mb-4">
      <legend className="block mb-2 text-sm font-medium text-gray-900">{name}：</legend>
      <div className="flex items-center space-x-4">
        {options.map(option => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            />
            <span className="ml-2 text-sm font-medium text-gray-900">{option.label}</span>
          </label>
        ))}
      </div>
      {errorMsg && <p className="mt-2 text-sm text-red-600">{errorMsg}</p>}
    </fieldset>
  );
};


