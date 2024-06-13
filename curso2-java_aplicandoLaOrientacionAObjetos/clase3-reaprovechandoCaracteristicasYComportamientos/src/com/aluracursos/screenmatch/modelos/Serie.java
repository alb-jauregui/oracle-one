package com.aluracursos.screenmatch.modelos;

public class Serie extends Titulo {
  // atributos
  int temporadas;
  int episodiosPorTemporada;
  int minutosPorEpisodio;

  // metodos
  public int getDuracionEnMinutos() {
    return temporadas * episodiosPorTemporada * minutosPorEpisodio;
  }

  // getters
  public int getTemporadas() {
    return temporadas;
  }

  public int getEpisodiosPorTemporada() {
    return episodiosPorTemporada;
  }

  public int getMinutosPorEpisodio() {
    return minutosPorEpisodio;
  }

  // setters
  public void setTemporadas(int temporadas) {
    this.temporadas = temporadas;
  }

  public void setEpisodiosPorTemporada(int episodiosPorTemporada) {
    this.episodiosPorTemporada = episodiosPorTemporada;
  }

  public void setMinutosPorEpisodio(int minutosPorEpisodio) {
    this.minutosPorEpisodio = minutosPorEpisodio;
  }
}
