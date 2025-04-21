import { useState } from 'react'
import './Uploader.css'
import { MdCloudUpload } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'

const Uploader = () => {
  return (
    <main>
        <form action="" onClick={() => document.getElementsByClassName('input-field')[0].click()}>

            <input type="file" name="" id="" hidden accept='image/*' className='input-field'/>

        </form>
    </main>
  )
}

export default Uploader