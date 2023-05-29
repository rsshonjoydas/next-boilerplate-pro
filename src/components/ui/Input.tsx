'use client';

import { faCircleExclamation, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Tooltip } from 'react-tooltip';

export const FloatingLabelInput = ({
  label,
  type,
  name,
  control,
  errors,
  inputRef,
  className,
}: any) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const hasError = errors[name];

  return (
    <div className='relative'>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <input
              {...field}
              type={type}
              className={`border bg-transparent dark:text-gray-400 text-slate-500 hover:text-slate-900 h-14 ${className} ${
                hasError && 'border-error'
              } ${
                isFocused && 'border-[#b57edc] transition-all duration-300'
              } rounded-[4px] py-2 px-3 w-full focus:outline-none`}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={inputRef}
            />
            <label
              htmlFor={name}
              className={`absolute left-3 top-4 transition-all duration-300 ${
                hasError && 'text-error'
              }
              ${isFocused && 'text-[#b57edc]'}
              ${
                isFocused || field.value
                  ? '-mt-[25px] bg-light dark:bg-dark px-1 text-sm'
                  : 'text-base text-slate-400'
              } pointer-events-none`}
            >
              {label}
            </label>
          </>
        )}
      />
      {hasError && (
        <p className='my-2 justify-start flex text-error text-[12px]'>
          <FontAwesomeIcon className='w-4 h-4 mr-1' icon={faCircleExclamation} />
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export const FloatingLabelPasswordInput = ({ label, name, control, errors, inputRef }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className='relative'>
      <FloatingLabelInput
        label={label}
        name={name}
        control={control}
        errors={errors}
        inputRef={inputRef}
        type={showPassword ? 'text' : 'password'}
      />
      <button
        type='button'
        onClick={handleTogglePasswordVisibility}
        onMouseDown={(e) => e.preventDefault()}
        aria-label='toggle password visibility'
        className={`absolute flex dark:hover:bg-slate-600/30 text-gray-500 items-center justify-center hover:bg-gray-200 rounded-r-sm text-sm transform -translate-y-1/2 top-1/2 right-[1px] ${
          errors.password && 'top-1/2 flex items-center justify-center -mt-[13px] -translate-y-1/2 '
        }`}
        data-tooltip-id='my-tooltip-children-multiline'
      >
        {showPassword ? (
          <FontAwesomeIcon icon={faEyeSlash} className='h-4 mb-[1px] px-[18px] py-[19px]' />
        ) : (
          <FontAwesomeIcon icon={faEye} className='h-4 p-[19px]' />
        )}

        <Tooltip id='my-tooltip-children-multiline' className='flex items-center justify-center'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>{showPassword ? 'Hide' : 'Show'}</span>
            <span>password</span>
          </div>
        </Tooltip>
      </button>
    </div>
  );
};
