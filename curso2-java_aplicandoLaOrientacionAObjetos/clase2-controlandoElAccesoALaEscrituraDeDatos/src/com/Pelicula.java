package com;

public class Pelicula {
  private String nombre;
  private int fechaDeLanzamiento;
  private int duracionEnMinutos;
  private boolean incluidoEnElPlan;
  private double sumaDeLasEvaluaciones;
  private int totalDelasEvaluaciones;

  public String getNombre() {
    return nombre;
  }

  public int getfechaDeLanzamiento() {
    return fechaDeLanzamiento;
  }

  public int getduracionEnMinutos() {
    return duracionEnMinutos;
  }

  public boolean getincluidoEnElPlan() {
    return incluidoEnElPlan;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public void setfechaDeLanzamiento(int fechaDeLanzamiento) {
    this.fechaDeLanzamiento = fechaDeLanzamiento;
  }

  public void setduracionEnMinutos(int duracionEnMinutos) {
    this.duracionEnMinutos = duracionEnMinutos;
  }

  public void setincluidoEnElPlan(boolean incluidoEnElPlan) {
    this.incluidoEnElPlan = incluidoEnElPlan;
  }

  public int gettotalDeLasEvaluaciones() {
    return totalDelasEvaluaciones;
  }

  public void muestraFichaTecnica() {
    System.out.println("El nombre de la película es: " + nombre);
    System.out.println("Su fecha de lanzamiento es: " + fechaDeLanzamiento);
    System.out.println("Duración en minutos: " + duracionEnMinutos);
  }

  public void evalua(double nota) {
    sumaDeLasEvaluaciones += nota;
    totalDelasEvaluaciones++;
  }

  public double calculaMedia() {
    return sumaDeLasEvaluaciones / totalDelasEvaluaciones;
  }
}
