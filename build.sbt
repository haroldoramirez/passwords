name := """passwords"""
organization := "pumba"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.13.1"

libraryDependencies ++= Seq(
  guice,
  evolutions,
  jdbc,
  "org.mindrot" % "jbcrypt" % "0.4",
  "com.h2database" % "h2" % "1.4.192",
  "org.julienrf" %% "play-jsmessages" % "4.0.0",
  // To provide an implementation of JAXB-API, which is required by Ebean.
  "javax.xml.bind" % "jaxb-api" % "2.3.1",
  "javax.activation" % "activation" % "1.1.1",
  "org.glassfish.jaxb" % "jaxb-runtime" % "2.3.2",
)
