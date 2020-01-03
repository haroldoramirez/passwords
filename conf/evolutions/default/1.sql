# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table usuario (
  id                            bigint auto_increment not null,
  name                          varchar(255),
  password                      varchar(255),
  constraint pk_usuario primary key (id)
);


# --- !Downs

drop table if exists usuario;

