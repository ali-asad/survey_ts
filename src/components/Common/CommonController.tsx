// packages block
import { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, TextField } from "@mui/material";
// styles, constants, utils and interfaces block
import { PASSWORD, TEXT } from "../../constants";
import { CustomControlProps, PasswordType } from "../../interfaceTypes";
import ShowPassword from "../showPassword";

const CommonController: FC<CustomControlProps> = ({ controllerName, controllerLabel, fieldType, variant, isPassword, isDisabled, isMultiLine, error }): JSX.Element => {
  const { control } = useFormContext();
  const [passwordType, setPasswordType] = useState<PasswordType>(PASSWORD);

  const handleClickShowPassword = () => {
    if (passwordType === PASSWORD) {
      setPasswordType(TEXT);
    } else {
      setPasswordType(PASSWORD);
    }
  };

  return (
    <Box>
      <Controller
        rules={{
          required: error ? error : true,
        }}
        name={controllerName}
        
        control={control}
        render={({ field, fieldState: { error: { message } = {} } }) => {
          return (
            <TextField
              type={fieldType === "password" ? passwordType : fieldType}
              variant={variant}
              sx={{ m: "8px 0" }}
              error={!!message}
              placeholder={controllerLabel}
              label= {controllerLabel}
              fullWidth
              {...field}
              disabled={isDisabled}
              minRows={isMultiLine ? 3 : undefined}
              maxRows={isMultiLine ? 3 : undefined}
              multiline={isMultiLine}
              helperText={message && message}
              InputLabelProps={{
                shrink: fieldType === "Date" ? true : undefined
              }}
              InputProps={isPassword ? {
                endAdornment: <ShowPassword
                  isPassword={isPassword}
                  passwordType={passwordType}
                  handleShowPassword={handleClickShowPassword}
                />,
              } : undefined}

            />
          )
        }}
      />
    </Box>
  );
};

export default CommonController;
