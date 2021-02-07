import React from 'react';
import TextField from "@material-ui/core/TextField";



const CustomTextField = ({value,onChange,label,placeholder}) => {

    return (
        <div>
            <TextField
                id="outlined-full-width"
                label={label}
                placeholder={placeholder}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                value={value}
                onChange={onChange}
                type="text"
            />
        </div>
    );
}

export default CustomTextField

