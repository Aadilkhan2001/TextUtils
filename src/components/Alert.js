import React from 'react'

export default function Alert(props) {
  const CapitalFirstLatter = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); 
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{CapitalFirstLatter(props.alert.message)}</strong>
</div>
  )
}
