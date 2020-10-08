package com.educationit;

public class Ejercicios {

	public static void main(String[] args) {
		sumaParImpar();
	}
	
	/* Suma los pares y los impares hasta un número de un array
	*/
	static void sumaParImpar() {
		int [] array = {1,2,3,4,5,6,7,8,9,10};
		int sumPar = 0;
		int sumImpar = 0;
		for(int i = 0; i < array.length; i++) {
			if(array [i] % 2 == 0) {
				sumPar += array[i];
			}else {
				sumImpar += array[i];
			}
		}
		
		System.out.println("suma de pares: "+sumPar+" suma de impares: "+sumImpar);
	}
	

	
	
	
	
	
	
	
	

}
