import React, { useState } from 'react'

const InputState = () => {
    const [form, setForm] = useState({name: "", surname: ""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

  return (
    <div>
        <h1>Input State Example</h1>
        Name
        <br/>
        <input name='name' value={form.name} onChange={onChangeInput} />
        <br/>
        Surname
        <br/>
        <input name='surname' value={form.surname} onChange={onChangeInput} />
        <br />

        {form.name +" "+ form.surname}
    </div>
  )
}

export default InputState
