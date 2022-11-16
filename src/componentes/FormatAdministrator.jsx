import React, { useState } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function FormatAdministrator() {
  const [format, setFormat] = useState("Seleccione Formato...");
  const [caracter, setCaracter] = useState(",(coma)");
  return (
    <>
      <h5 className="mt-5">ADMINISTRADOR DE FORMATOS PARA SOLICITUDES</h5>
      <div className="d-flex justify-content-start gap-5 mt-5 ms-5">
        <NavDropdown
          style={{width:"15%"}}
          className="border border-dark rounded-1 p-2"
          title={format}
          id="nav-dropdown"          
        >
          <NavDropdown.Item eventKey="4.1" onClick={()=>{setFormat("XLS")}}>XLS (Excel)</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" onClick={()=>{setFormat("CSV")}}>CSV</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" onClick={()=>{setFormat("TXT")}}>TXT</NavDropdown.Item>
        </NavDropdown>
        <p>Caracter Separador</p>
        <NavDropdown
          style={{width:"15%"}}
          className="border border-dark rounded-1 p-2"
          title={caracter}
          id="nav-dropdown"
        >
          <NavDropdown.Item eventKey="4.1" onClick={()=>{setCaracter(`, (coma)`)}}>, (coma)</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.1" onClick={()=>{setCaracter("TAB")}}>TAB (Tabulacion)</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" onClick={()=>{setCaracter(`" " doble comilla`)}}>" " (doble comilla)</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" onClick={()=>{setCaracter(`; (punto y coma)`)}}>; (punto y coma)</NavDropdown.Item>
        </NavDropdown>
      </div>
      <div className="d-flex m-3">
        <Table hover className="m-4">
          <thead>
            <tr className="bg-orange-light">
              <th></th>
              <th>Posición / Columna</th>
              <th>Longitud Campo</th>
              <th>Valor Único</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID de solicitud</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td></td>
            </tr>
            <tr className="bg-orange-light">
              <td>Nombre y Apellido destinatario</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Tipo Documento</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td></td>
            </tr>
            <tr className="bg-orange-light">
              <td>Nro Documento</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Lugar Habilitado</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td></td>
            </tr>
            <tr className="bg-orange-light">
              <td>Localidad</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Provincia</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td></td>
            </tr>
            <tr className="bg-orange-light">
              <td>CPA</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Entrega en Domicilio</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td></td>
            </tr>
            <tr className="bg-orange-light">
              <td>Cantidad de piezas</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Peso total de la solicitud</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="align-self-end d-grid gap-2 mb-4">
          <Button variant="warning" className="bg-orange">Aceptar</Button>
          <Button variant="outline-warning">Volver</Button>
        </div>
      </div>
    </>
  );
}
