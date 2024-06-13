import java.util.Scanner;

public class Desafio {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    String nombre = "Tony Stark";
    String tipoCuenta = "Corriente";
    double saldo = 1599.99;
    int opcion = 0;

    System.out.println("*********");
    System.out.println("\nNombre del clinte: " + nombre);
    System.out.println("El tipo de cuenta es: " + tipoCuenta);
    System.out.println("El saldo disponible es: " + saldo + "$");
    System.out.println("\n*********");

    String menu = """
        \n*** Estriba la opcion deseada: ***
        1 - Consultar saldo
        2 - Retirar
        3 - Depositar
        4 - Salir
        """;

    while (opcion != 4) {
      System.out.println(menu);
      opcion = scanner.nextInt();

      switch (opcion) {
        case 1:
          System.out.println("El saldo de la cuenta es: " + saldo + "$");
          break;
        case 2:
          System.out.println("Ingrese la cantidad a retirar:");
          double retiro = scanner.nextDouble();
          if (saldo < retiro) {
            System.out.println("Saldo insuficiente");
          } else {
            saldo -= retiro;
            System.out.println("El saldo actualizado es: " + saldo + "$");
          }
          break;
        case 3:
          System.out.println("Ingrese la cantidad a depositar:");
          double deposito = scanner.nextDouble();
          saldo += deposito;
          System.out.println("El saldo actualizado es: " + saldo + "$");
          break;
        case 4:
          System.out.println("Gracias por utilizar nuestros servicios.");
          break;
        default:
          System.out.println("Opcion no valida.");
      }
    }
  }
}
