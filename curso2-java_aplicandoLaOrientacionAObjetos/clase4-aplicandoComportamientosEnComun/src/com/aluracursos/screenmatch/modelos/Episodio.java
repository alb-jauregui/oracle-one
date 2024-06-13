package com.aluracursos.screenmatch.modelos;

import com.aluracursos.screenmacth.calculos.Clasificacion;

public class Episodio implements Clasificacion {
  // variables
  private int numero;
  private String nombre;
  private Serie serie;
  private int totalVisualizaciones;

  // getters y setters
  public int getNumero() {
    return numero;
  }

  public void setNumero(int numero) {
    this.numero = numero;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public Serie getSerie() {
    return serie;
  }

  public void setSerie(Serie serie) {
    this.serie = serie;
  }

  public int getTotalVisualizaciones() {
    return totalVisualizaciones;
  }

  public void setTotalVisualizaciones(int totalVisualizaciones) {
    this.totalVisualizaciones = totalVisualizaciones;
  }

  public int getClasificacion() {
    if (totalVisualizaciones > 100) {
      return 4;
    } else {
      return 2;
    }
  }
}
