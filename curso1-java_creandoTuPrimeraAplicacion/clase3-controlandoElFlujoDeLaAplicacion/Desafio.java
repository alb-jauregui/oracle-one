// Crea un programa que simule un juego de adivinanzas. El programa debe generar un número aleatorio entre 0 y 100, y pedir al usuario que intente adivinar ese número en un máximo de 5 intentos. En cada intento, el programa debe informar si el número ingresado por el usuario es mayor o menor que el número generado.

// Consejos:

// Para generar un número aleatorio en Java: new Random().nextInt(100);

// Utiliza el Scanner para obtener los datos del usuario.

// Utiliza una variable para contar los intentos.

// Utiliza un bucle para controlar los intentos.

// Utiliza la instrucción ‘break;’ para salir del bucle.

import java.util.Scanner;
import java.util.Random;

public class Desafio {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    int numeroAleatorio = new Random().nextInt(100);
    int contador = 0;
    int numero;

    while (contador < 5) {
      System.out.println("Escribe el numero secreto:");
      numero = scanner.nextInt();

      if (numero == numeroAleatorio) {
        break;
      } else if (numero < numeroAleatorio) {
        System.out.println("Lo siento, el numero secreto es mayor que el ingresado.");
      } else {
        System.out.println("Lo siento, el numero secreto es menor que el ingresado.");
      }
      contador++;
    }

    if (contador != 5) {
      System.out.println("Felicidades, adivintaste el numero secreto.");
    } else {
      System.out.println("Llegaste al numero maximo de intentos, perdiste.");
    }
  }
}
