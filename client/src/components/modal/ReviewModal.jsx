import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DarkButton from '../button/DarkButton'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { createCustomer } from '../../actions/customerAction'


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

const ReviewModal = ({flag, setFlag}) => {

  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
  
    file: [],
    platForm: '',
    name:'',
    position:'',
    content:''
  })

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleChange = (event, name) => {
    let values = event.target.value
    setData({ ...data, [name]: values })
  }

  const handleFileChange = (event) => {
    setData({ ...data, ['file']: event.target.files[0] })
  }


  const handleSend = () => { 
    console.log('Data : ', data.file)
    let formdata = new FormData()
    formdata.append('name', data.name)
    formdata.append('position', data.position)
    formdata.append('content', data.content)

    formdata.append('file',data.file)
    formdata.append('type', data.platForm)
    createCustomer(formdata)
    setOpen(false)
    setFlag(!flag)
  }


  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>
        <DarkButton title='Add' />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className='mt-10'>Inbox</DialogTitle>
        <DialogContent className='w-[600px] p-7'>
          <FormControl fullWidth>
            <h6 className='text-[18px] font-bold cursor-pointer pt-5 pb-3 '>Type</h6>
            {/* <InputLabel id="demo-simple-select-label">CustomerReview</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.platForm}
              name='platForm'
              label="Input Type"
              onChange={(event) => handleChange(event, 'platForm')}
            >
              <MenuItem value={'Video'}>Video</MenuItem>
              <MenuItem value={'text'}>Text</MenuItem>
            </Select>
          </FormControl>
          <div className='row'>
            <label className='flex flex-col col-md-6'>
              
              <h6 className='text-[18px] font-bold cursor-pointer pt-5 pb-3 '>Name</h6>
              <TextField
              className='w-[80%]'
              required
              margin="dense"
              name='name'
              label='Input Name'
              type='text'
              variant="outlined"
              onChange={(event) => handleChange(event, 'name')}
            />
            </label>
          </div>
          <div className='row'>
            <label className='flex flex-col col-md-6'>
              <h6 className='text-[18px] font-bold cursor-pointer pt-5 pb-3 '>Position(Company)</h6>
              <TextField
              className='w-[80%]'
              required
              margin="dense"
              name='position'
              label='Input Position'
              type='text'
              variant="outlined"
              onChange={(event) => handleChange(event, 'position')}
            />
            </label>
          </div>
          <div className='items-center text-center py-5 col-md-6'>
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
            <div>{data.file.name}</div>
          </div>

          <label className='flex flex-col'>
            <h6 className='text-[18px] font-bold cursor-pointer pt-5 pb-3'>Content</h6>
            <textarea
              rows={6}
              name='content'
              label="Input Conetent"
              onChange={(event) => handleChange(event, 'content')}
              placeholder='Input Content'
              className='bg-third py-4 px-6 placeholder:text-secondary text-tertiary rounded-lg outline-none border-none font-medium w-[80%]'
            />
          </label>
          

        </DialogContent>
        <DialogActions>
          <Button color='error' onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default ReviewModal