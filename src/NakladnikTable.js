  import React from 'react'


  const NakladnikTable = (props) =>{
  return(
    <table>
      <thead>
        <tr>
          <th>Sifra </th>
          <th>Naziv </th>
          <th>Mjesto </th>
          <th>Akcija </th>

        </tr>
      </thead>
    <tbody>

     <tr key={props.sifra}>
        <td>{props.sifra}</td>
        <td>{props.Naziv}</td>
        <td>{props.Mjesto}</td>
        <td><button onClick={props.handleUserName}> Edit </button></td>
     </tr>
    )}
    </tbody>
    </table>
    )
  }
   
  export default NakladnikTable