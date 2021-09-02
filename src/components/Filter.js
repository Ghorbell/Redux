import React from 'react'
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { filter } from '../redux/action/action';

const Filter = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Button onClick={()=>dispatch(filter("All"))} inverted color='violet'>
        All
      </Button>
      <Button onClick={()=>dispatch(filter("Done"))}  inverted color='purple'>
        Done
      </Button>
      <Button onClick={()=>dispatch(filter("unDone"))} inverted color='pink'>
        Not Done
      </Button> 
        </div>
    )
}

export default Filter