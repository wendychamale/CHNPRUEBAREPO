drop table SOLICITUD_PRESTAMO;
drop table PRESTAMO;
drop table pago;

insert into Estado values(1,'EN PROCESO','SOLICITUD PRESTAMO EN PROCESO');
insert into Estado values(2,'APROBADO','SOLICITUD APROBADO');
insert into Estado values(3,'RECHAZADO','SOLICITUD RECHAZADA');
insert into Estado values(4,'ACTIVO','SOLICITUD PRESTAMO AUN VIGENTE');
insert into Estado values(5,'INACTIVO','SOLICITUD PRESTAMO YA SE ENCUENTRA INACTIVO POR PAGOS COMPLETADOS');