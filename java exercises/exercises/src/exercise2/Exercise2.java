/*	Pide números por teclado hasta un máximo pedido ingresado por teclado
 *  Se guardan en un array los números hasta que se responda que no o se
 *  llegue al máximo. Por último, se imprimen en orden y se pide un número
 *  para buscar, si está el número se imprime la posición de ese número
 */
package exercise2;

import java.util.Scanner;

public class Exercise2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese la cantidad de números que desea ingresar");
		int quantity = scanner.nextInt();
		int[] numbersArray = new int[quantity];
		String decition = "";
		int count = 0;
		do {
			System.out.println("Ingrese un número");
			numbersArray[count] = scanner.nextInt();
			System.out.println("Si no desea ingresar otro número presione N");
			decition = scanner.next();
			count++;
		}while(!decition.toUpperCase().equals("N") && count != quantity);
		System.out.println("El array es:");
		for(int i = 0; i < count; i++){
			System.out.print(numbersArray[i] + " ");
		}
		System.out.println("\nIngrese un número para buscar");
		int search = scanner.nextInt();
		for(int i = 0; i < count; i++)
		{
			if(numbersArray[i] == search) {
				System.out.print("La posición del número a buscar es " + i + " .");
				break;
			}
			else if(i + 1 == count ) {
				System.out.print("El número a buscar no se encuentra en el array.");
			}
		}
	}

}
