
CREATE TABLE CLIENTE
(
  clientekey Int primary Key,
  nombre VARCHAR2(50 BYTE)      NOT NULL,
  apellido     VARCHAR2(50 BYTE)   NOT NULL,
  CUI         number      NOT NULL,
  fechanac  date,
  direccion VARCHAR2(200 BYTE),
  correo  VARCHAR2(30 BYTE),
  telefono NUMBER 
)

/
  
  CREATE TABLE ESTADO (
    estadokey INT PRIMARY KEY,
    estado VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100)
);

/
  CREATE TABLE SOLICITUD_PRESTAMO
(
  solicitudkey int primary Key,
  clientekey int,
  montosolicitado    number(8,2)    NOT NULL,
  plazosolicitado         number      NOT NULL,
  tasainteres number ,
  fechasolicitud  date default sysdate,
  estadokey int,
  observacion varchar(300),
  FOREIGN KEY (estadokey) REFERENCES ESTADO(estadokey),
  FOREIGN KEY (clientekey) REFERENCES CLIENTE(clientekey) ON DELETE CASCADE
)


/
 CREATE TABLE PRESTAMO
(
  prestamokey int primary Key,
  solicitudkey int,
  fechainicio  date,
  saldopendiente  number(8,2),
  saldopendientecapital  number(8,2),
  estadokey int,
  FOREIGN KEY (estadokey) REFERENCES ESTADO(estadokey),
  FOREIGN KEY (solicitudkey) REFERENCES SOLICITUD_PRESTAMO(solicitudkey) ON DELETE CASCADE
)
  
/

  CREATE TABLE PAGO
(
  pagokey int primary Key,
  prestamokey int      NOT NULL,
  montopagado    number(8,2)   NOT NULL,
  interescobrado    number(8,2)   NOT NULL,
  fechapago         date      NOT NULL,
  FOREIGN KEY (prestamokey) REFERENCES PRESTAMO(prestamokey)
)


/
CREATE SEQUENCE SQ_Cliente
  START WITH 1
  MAXVALUE 9999999999999999999999999999
  MINVALUE 1
  NOCYCLE
  CACHE 20
  NOORDER;
  
  /
  CREATE SEQUENCE SQ_solicitud_prestamo
  START WITH 1
  MAXVALUE 9999999999999999999999999999
  MINVALUE 1
  NOCYCLE
  CACHE 20
  NOORDER;
  
/
CREATE SEQUENCE SQ_prestamo
  START WITH 1
  MAXVALUE 9999999999999999999999999999
  MINVALUE 1
  NOCYCLE
  CACHE 20
  NOORDER;


/
CREATE SEQUENCE SQ_pago
  START WITH 1
  MAXVALUE 9999999999999999999999999999
  MINVALUE 1
  NOCYCLE
  CACHE 20
  NOORDER;
  
  