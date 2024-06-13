import java.util.Scanner;

public class Evaluaciones {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    double nota = 0;
    double mediaEvaluaciones = 0;
    double totalEvaluaciones = 0;

    while (nota != -1) {
      System.out.println("Escribe la nota que le darias a la pelicula Matrix;");
      nota = scanner.nextDouble();

      if (nota != -1) {
        mediaEvaluaciones += nota;
        totalEvaluaciones++;
      }
    }

    System.out.println("La media de evaluaciones para Matrix es: " + mediaEvaluaciones / totalEvaluaciones);

    scanner.close();
  }
}
