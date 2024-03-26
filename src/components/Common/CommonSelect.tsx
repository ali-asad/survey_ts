// packages block
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Select, FormControl, MenuItem, FormHelperText } from '@mui/material';
import { SelectorInterface, multiOptionType } from '../../interfaceTypes';
import { StyledInputLabel } from '../../theme/styledComponents';

const CommonSelect: FC<SelectorInterface> = ({ isDisabled, controllerName, controllerLabel, optionsArray }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={controllerName}
      control={control}
      render={({ field, fieldState: { error: { message } = {} } }) => {
        return (
          <FormControl variant="outlined" fullWidth error={Boolean(message)} margin="normal">
            <StyledInputLabel>{controllerLabel}</StyledInputLabel>

            <Select
              name={controllerName}
              id="selectedRoleId"
              labelId="selectedRoleLabel"
              label={controllerLabel}
              onChange={field.onChange}
              disabled={isDisabled}
              value={field.value}
              displayEmpty
            >
              {optionsArray.map((option: multiOptionType, index: number) => (
                <MenuItem key={index} value={option?.value}>{option?.label}</MenuItem>
              ))}
            </Select>
            <FormHelperText>{message && message}</FormHelperText>
          </FormControl>
        )
      }}
    />
  )
}

export default CommonSelect;
