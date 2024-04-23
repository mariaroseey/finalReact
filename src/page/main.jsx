import  {useState} from 'react'
import Header from '../component/header'

const Main = () => {
  

    const [data, setData] = useState(true)

    //function hide
    const hide = () => {
        setData(false)
    }

    //function show
    const show = () => {
        setData(true)
    }

    return (
        <div>
            <Header datav={data}/>
            <div className='grid justify-center pt-7'>
            { data && <img className='w-[500px] h-[500px]' src="https://images.unsplash.com/photo-1713709165079-fbdf3ce6b137?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> }

            { data ? <button onClick={hide} className='p-1 m-2'> Hide </button> : <button onClick={show} className='p-1 m-2'> Show </button> }
        </div>
        </div>
    )
    
    
  }

  export default Main