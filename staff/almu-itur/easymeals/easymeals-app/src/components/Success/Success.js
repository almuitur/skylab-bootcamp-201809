import React from 'react'
import swal from 'sweetalert'

function Success(props) {
    return <div>
        {swal({
            title: "Success",
            text: props.message,
            icon: "success",
            button: "OK"
        })}
    </div>
}

export default Success