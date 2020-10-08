/*	Pide n�meros por teclado hasta un m�ximo pedido ingresado por teclado
 *  Se guardan en un array los n�meros hasta que se responda que no o se
 *  llegue al m�ximo. Por �ltimo, se imprimen en orden y se pide un n�mero
 *  para buscar, si est� el n�mero se imprime la posici�n de ese n�mero
 */
package exercise2;

import java.util.Scanner;

public class Exercise2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese la cantidad de n�meros que desea ingresar");
		int quantity = scanner.nextInt();
		int[] numbersArray = new int[quantity];
		String decition = "";
		int count = 0;
		do {
			System.out.println("Ingrese un n�mero");
			numbersArray[count] = scanner.nextInt();
			System.out.println("Si no desea ingresar otro n�mero presione N");
			decition = scanner.next();
			count++;
		}while(!decition.toUpperCase().equals("N") && count != quantity);
		System.out.println("El array es:");
		for(int i = 0; i < count; i++){
			System.out.print(numbersArray[i] + " ");
		}
		System.out.println("\nIngrese un n�mero para buscar");
		int search = scanner.nextInt();
		for(int i = 0; i < count; i++)
		{
			if(numbersArray[i] == search) {
				System.out.print("La posici�n del n�mero a buscar es " + i + " .");
				break;
			}
			else if(i + 1 == count ) {
				System.out.print("El n�mero a buscar no se encuentra en el array.");
			}
		}
	}

}
