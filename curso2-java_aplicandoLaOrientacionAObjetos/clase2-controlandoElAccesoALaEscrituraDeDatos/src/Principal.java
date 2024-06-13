import com.Pelicula;

public class Principal {
  public static void main(String[] args) {
    Pelicula miPelicula = new Pelicula();
    miPelicula.setNombre("Encanto");
    miPelicula.setfechaDeLanzamiento(2021);
    miPelicula.setduracionEnMinutos(120);
    miPelicula.setincluidoEnElPlan(true);

    miPelicula.muestraFichaTecnica();
    miPelicula.evalua(10);
    miPelicula.evalua(10);
    miPelicula.evalua(7.8);

    System.out.println(miPelicula.gettotalDeLasEvaluaciones());
    System.out.println(miPelicula.calculaMedia());
  }
}
