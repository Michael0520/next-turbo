"use client";
import React, { useState } from "react";
import { FormField } from "./form-field";
import { RadioButtons } from "./radio";
import { Button } from "@ui/components/ui/button";

interface FormFieldState {
  value: string;
  errorMsg: string;
  validate: (value: string) => string;
}
interface FormState {
  name: FormFieldState;
  email: FormFieldState;
  gender: FormFieldState;
  phone: FormFieldState;
}
const Form = React.forwardRef<HTMLFormElement, {}>((props, ref) => {
  const [formState, setFormState] = useState<FormState>({
    name: {
      value: "",
      errorMsg: "",
      validate: (value) => (value.trim() === "" ? "請輸入名稱" : ""),
    },
    email: {
      value: "",
      errorMsg: "",
      validate: (value) =>
        /\S+@\S+\.\S+/.test(value) ? "" : "請輸入有效的信箱",
    },
    gender: {
      value: "",
      errorMsg: "",
      validate: (value) => (value.trim() === "" ? "請選擇性別" : ""),
    },
    phone: {
      value: "",
      errorMsg: "",
      validate: (value) =>
        /^09\d{8}$/.test(value) ? "" : "電話號碼需為 10 碼且開頭為 09",
    },
  });

  const validateField = (name, value) => {
    const validationFunc = formState[name].validate;
    return validationFunc ? validationFunc(value) : "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setFormState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name as keyof FormState], value, errorMsg },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, updatedState } = Object.keys(formState).reduce(
      (acc, key) => {
        const fieldKey = key as keyof FormState;
        const errorMsg = validateField(fieldKey, formState[fieldKey].value);
        acc.updatedState[fieldKey] = { ...formState[fieldKey], errorMsg };
        if (errorMsg) acc.isValid = false;
        return acc;
      },
      { isValid: true, updatedState: {} as Partial<FormState> }
    );

    setFormState((prevState) => ({ ...prevState, ...updatedState }));

    if (isValid) {
      // 提交表單操作
      console.log(
        "提交的資料：",
        Object.fromEntries(
          Object.entries(formState).map(([key, { value }]) => [key, value])
        )
      );
    }
  };

  return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className="p-6 max-w-2xl w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-8"
      >
        {/* 名稱 */}
        <FormField
          id="name"
          label="名稱"
          type="text"
          value={formState.name.value}
          onChange={handleInputChange}
          errorMsg={formState.name.errorMsg}
        />

        {/* 信箱 */}
        <FormField
          id="email"
          label="信箱"
          type="email"
          value={formState.email.value}
          onChange={handleInputChange}
          errorMsg={formState.email.errorMsg}
        />

        {/* 性別 */}
        <RadioButtons
          name="性別"
          options={[
            { label: "男", value: "男" },
            { label: "女", value: "女" },
          ]}
          selectedValue={formState.gender.value}
          onChange={handleInputChange}
          errorMsg={formState.gender.errorMsg}
        />

        {/* 電話號碼 */}
        <FormField
          id="phone"
          label="電話號碼"
          type="tel"
          value={formState.phone.value}
          onChange={handleInputChange}
          errorMsg={formState.phone.errorMsg}
        />
      </form>
  );
});

export default Form;
