import React, { useState, useRef } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'
// import toastr from 'toastr'
// import 'toastr/build/toastr.css'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const DialogModal = (props) => {

  const { modalTitle, data } = props
  const [open, setOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [userData, setUserData] = useState([{}])
  const [selectedFile, setSelectedFile] = useState('')

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleChange = (event, name) => {
    let values = event.target.value
    // console.log('[' + name + '] : ' + values)
    setUserData({ ...userData, [name]: values })
  }

  const handleFileChange = (event) => {
    console.log('path : ', event.target.files[0])
    setSelectedFile(event.target.files[0])
  }

  const handleSend = () => {

    if (modalTitle === 'Sign Up') {
      console.log('SignUp userData : ', userData)
    }
    else {
      console.log('SignIN userData : ', userData)
    }
  }


  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}> {modalTitle} </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className='mt-10'>{modalTitle}</DialogTitle>
        <DialogContent className='w-[600px] p-7'>
          <div className='items-center text-center py-5'>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              onChange={handleFileChange}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
            <div>{selectedFile.name}</div>
          </div>

          {
            data?.map((item, index) => {
              return (
                <div key={index} className='py-2 flex justify-center'>
                  {
                    item.type === 'password' ?
                      (<FormControl variant="outlined" className='w-[80%]'>
                        <InputLabel htmlFor={item.title}>Password</InputLabel>
                        <OutlinedInput
                          id={item.title}
                          type={showPassword ? 'text' : 'password'}
                          name={item.title}
                          onChange={(event) => handleChange(event, item.title)}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>)
                      :
                      (<TextField
                        id={item.title}
                        className='w-[80%]'
                        required
                        margin="dense"
                        name={item.title}
                        label={item.label}
                        type={item.type}
                        variant="outlined"
                        onChange={(event) => handleChange(event, item.title)}
                      />)
                  }
                </div>
              )
            })
          }
        </DialogContent>
        <DialogActions>
          <Button color='error' onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default DialogModal