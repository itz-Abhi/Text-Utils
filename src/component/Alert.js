import React from 'react'

function Alert(props) {
  return (
    props.alert &&
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
 <strong>{props.alert.type} :{props.alert.msg}</strong>
  
</div>
  )
}

export default Alert
