import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import DarkButton from '../button/DarkButton'
import { sendEvent } from '../../actions/eventAction'


const MessageModal = ({flag, setFlag}) => {


  const [open, setOpen] = useState(false)
  const [messageData, setMessageData] = useState([{}])

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleChange = (event, name) => {
    let values = event.target.value
    setMessageData({ ...messageData, [name]: values })
  }


  const handleSend = () => {
    sendEvent(messageData).then((data) => {
      console.log(data)
    })
    setOpen(false)
    setFlag(!flag)
  }
  
  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>
        <DarkButton title='Lorem ipsum dolor sit' />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className='mt-10'>Inbox</DialogTitle>
        <DialogContent className='w-[600px] p-7'>
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
          <label className='flex flex-col'>
            <h6 className='text-[18px] font-bold cursor-pointer pt-5 pb-3'>Василий Петров</h6>
            <textarea
              rows={6}
              name='description'
              onChange={(event) => handleChange(event, 'description')}
              placeholder='Input Description'
              className='bg-third py-4 px-6 placeholder:text-secondary text-tertiary rounded-lg outline-none border-none font-medium w-[80%]'
            />
          </label>
          <TextField
            className='w-[80%]'
            required
            margin="dense"
            name='location'
            label='Input Location'
            type='text'
            variant="outlined"
            onChange={(event) => handleChange(event, 'location')}
          />

        </DialogContent>
        <DialogActions>
          <Button color='error' onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSend}><SendOutlinedIcon /></Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default MessageModal