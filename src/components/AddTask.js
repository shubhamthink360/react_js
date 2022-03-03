import { useState } from "react"
const AddTask = ({ onAdd }) => {
    const[text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState(false)

    //on Submit
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }
        if (!day) {
            alert('Please enter a date')
            return
          }
        onAdd({ text,day,reminder })

        //Clear Form
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label>New Task</label>
            <input type="text" name="" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Task' />
        </div>
        <div className="form-control">
            <label>Day and Time</label>
            <input type="text" name="" value={day} onChange={(e)=>setDay(e.target.value)} placeholder='Enter Day and Time' />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" name="" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}
export default AddTask