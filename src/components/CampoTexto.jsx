import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import "../assets/css/webKit-autofill.css"

const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: "var(--color-tercero)",
            
            
        },
        '& MuiInputLabel-root': {
          color: "var(--color-tercero)",
          
        },
       '& .MuiFilledInput-underline': {
            color: "#dfdfdfc1",
            marginTop: "1rem"
            
       },
       '& .MuiInputLabel-root': {
            color: "var(--color-secundario)",
           
           
       },
       
       '& .MuiFilledInput-root': {
            backgroundColor: "var(--color-principal)",
            

            '&:after':{
                borderBottomColor: "var(--color-tercero)",
            },
            '&:before':{
                borderBottomColor: "var(--color-tercero)",
            },
            '&:hover':{
                backgroundColor: "var(--color-primario)",
                borderBottom: "2px solid var(--color-tercero)",
            }
        


       }

       
    
      });


const CampoTexto = (props) =>{

    const {type = "text", titulo,error,helperText,value,onChange,InputProps,multiline,onBlur} = props

    return  <>

    <CssTextField label={titulo} 
                    id={titulo}
                    type={type}
                    variant="filled" 
                    fullWidth 
                    margin='normal'
                    error={error}
                    helperText={helperText}
                    value={value}
                    onChange={onChange}
                    InputProps={InputProps}
                    multiline={multiline}
                    onBlur={onBlur}
    />


   
    
    
    </>
}

export default CampoTexto