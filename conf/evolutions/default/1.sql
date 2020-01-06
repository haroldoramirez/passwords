# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table conta (
  id                            bigint auto_increment not null,
  nome_conta                    varchar(255),
  senha                         varchar(255),
  url                           varchar(255),
  constraint pk_conta primary key (id)
);

create table usuario (
  id                            bigint auto_increment not null,
  confirmacao_token             varchar(255),
  validado                      boolean default false not null,
  nome                          varchar(60) not null,
  email                         varchar(50) not null,
  senha                         varchar(255) not null,
  papel                         varchar(13),
  status                        boolean not null,
  data_cadastro                 date,
  data_alteracao                date,
  ultimo_acesso                 timestamp not null,
  constraint ck_usuario_papel check ( papel in ('USUARIO','GERENTE','SUPERVISOR','ADMINISTRADOR')),
  constraint uq_usuario_email unique (email),
  constraint pk_usuario primary key (id)
);


# --- !Downs

drop table if exists conta;

drop table if exists usuario;

