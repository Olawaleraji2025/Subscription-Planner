import { useRef } from "react";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "/src/components/ui/field";
import { Input } from "/src/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  fieldBlur,
  setPersonalInfo,
  selectPersonalInfoErrors,
  validateAll,
} from "/src/features/personalInfo";

export function FieldDemo() {
  const dispatch = useDispatch();
  const infoStore = useSelector((state) => state.infoStore);
  const errors = useSelector(selectPersonalInfoErrors);

  const handleInputChange = (e) => {
    const field = e.target.id.replace("personal-", "");
    dispatch(setPersonalInfo({ [field]: e.target.value }));
  };

  const handleInputBlur = (e) => {
    const field = e.target.id.replace("personal-", "");
    dispatch(fieldBlur(field));
  };

  return (
    <div className="grid grid-cols-1 w-full shadow-lg mx-0 my-0 z-10 p-6.25 max-w-73 bg-white rounded-lg md:shadow-none md:max-w-115">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Personal info</FieldLegend>
            <FieldDescription>
              Please provide your name, email address and phone number
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="personal-name">
                  Name
                  {errors.name && (
                    <span className="text-[12px] text-red-500 mt-1">
                      {errors.name}
                    </span>
                  )}
                </FieldLabel>
                <Input
                  id="personal-name"
                  placeholder="e.g Olawale Raji"
                  required
                  value={infoStore.name.value}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="personal-email">
                  Email Address
                  {errors.email && (
                    <span className="text-[12px] text-red-500 ml-auto">
                      {errors.email}
                    </span>
                  )}
                </FieldLabel>
                <Input
                  id="personal-email"
                  placeholder="e.g olawalesodiq988@gmail.com"
                  required
                  value={infoStore.email.value}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="personal-phone">
                  Phone Number
                  {errors.phone && (
                    <span className="text-[12px] text-red-500 ml-auto">
                      {errors.phone}
                    </span>
                  )}
                </FieldLabel>
                <Input
                  id="personal-phone"
                  placeholder="e.g +1234 567 890"
                  required
                  value={infoStore.phone.value}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}
