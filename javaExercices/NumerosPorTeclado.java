package com.educationit;

import java.util.Scanner;

public class NumerosPorTeclado {

	public static void main(String[] args) {
		/*
		 * Pide n�meros por teclado hasta un m�ximo pedido por teclado. 
		 * Se piden y se guardan en un array los n�meros hasta que se responda que NO (N o n) o llegue al m�ximo. 
		 * Por �ltimo se imprimen en orden y se pide un n�mero para buscar. 
		 * si est� se imprime la posici�n de dicho n�mero en el array.*/
		
		Scanner datos = new Scanner(System.in);
		System.out.println("Ingrese la cantidad de numero a ingresar: ");
		int cantidad = datos.nextInt();
		String continuar = "";
		int [] numeros = new int[cantidad];
		int contador = 0;
		do{
			System.out.println("Ingrese un numero: ");
			numeros[contador] = datos.nextInt();
			System.out.println("para salir precione n o N");
			continuar = datos.next();
			contador++;
		}while(!continuar.toUpperCase().equals("N") && contador != cantidad);
		
		System.out.println("El array es:");
		for(int i = 0; i< contador; i++) {
			System.out.println(numeros[i]);
		}
		System.out.println("\nIngrese un numero para buscar: ");
		int buscar = datos.nextInt();
		
		for(int i=0; i< contador; i++) {
			if(numeros[i] == buscar) {
				System.out.println("la posicion del numero a buscar es: "+ i);
				break;
			}else if(i+1 == contador) {
				System.out.println("el numero a buscar no existe");
			}
		}
		
		datos.close();
	}

}
