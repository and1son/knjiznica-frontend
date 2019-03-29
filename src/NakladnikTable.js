  import React from 'react'


  function NakladnikTable(props){
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

    {props.nakladnik && props.nakladnik.map(item => 
     <tr key={item.sifra}>
        <td>{item.sifra}</td>
        <td>{item.Naziv}</td>
        <td>{item.Mjesto}</td>
        <td><button onClick={props.handleEdit}> Edit </button></td>
     </tr>
    )}
    </tbody>
    </table>
    )
  }
   
  export default NakladnikTable