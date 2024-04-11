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
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { createPublication } from '../../actions/publicationAction'


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

const CategoryModal = ({flag,setFlag}) => {


  const [open, setOpen] = useState(false)
  const [data, setData] = useState({
    title: '',
    description: '',
    file: [],
    platForm: '',
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
    let formdata = new FormData()
    formdata.append('title', data.title)
    formdata.append('description', data.description)
    formdata.append('file',data.file)
    formdata.append('platform', data.platForm)
    // console.log(formdata)
    createPublication(formdata)
    setFlag(!flag);
    setOpen(false)

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
          <label className='flex flex-col'>
            <h6 className='text-[18px] font-bold cursor-pointer pt-5 pb-3'>Description</h6>
            <textarea
              rows={6}
              name='description'
              onChange={(event) => handleChange(event, 'description')}
              placeholder='Input Description'
              className='bg-third py-4 px-6 placeholder:text-secondary text-tertiary rounded-lg outline-none border-none font-medium w-[80%]'
            />
          </label>

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
            <div>{data.file.name}</div>
          </div>

          <TextField
            className='w-[80%]'
            required
            margin="dense"
            name='title'
            label='Input Title'
            type='text'
            variant="outlined"
            onChange={(event) => handleChange(event, 'title')}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">PlatForm</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.platForm}
              name='platForm'
              label="PlatForm"
              onChange={(event) => handleChange(event, 'platForm')}
            >
              <MenuItem value={'VC'}>VC</MenuItem>
              <MenuItem value={'Habr'}>Habr</MenuItem>
              <MenuItem value={'Youtube'}>Youtube</MenuItem>
            </Select>
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button color='error' onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default CategoryModal