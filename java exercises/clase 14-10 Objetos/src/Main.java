import java.util.Scanner;

/*
 * 2) Haz una clase llamada Password que siga las siguientes condiciones:
 * Que tenga los atributos longitud y contrase�a . Por defecto, la longitud sera de 8.
 * Los constructores ser�n los siguiente:
 * Un constructor por defecto.
 * Un constructor con la longitud que nosotros le pasemos. Generara una contrase�a aleatoria con esa longitud.
 * Los m�todos que implementa ser�n:
 * esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe tener mas de 2 may�sculas, mas de 1 min�scula y mas de 5 n�meros.
 * generarPassword():  genera la contrase�a del objeto con la longitud que tenga.
 * M�todo get para contrase�a y longitud.
 * M�todo set para longitud.
 * Ahora, crea una clase clase ejecutable:
 * Crea un array de Passwords con el tama�o que tu le indiques por teclado.
 * Crea un bucle que cree un objeto para cada posici�n del array.
 * Indica tambi�n por teclado la longitud de los Passwords (antes de bucle).
 * Crea otro array de booleanos donde se almacene si el password del array de Password es o no fuerte (usa el bucle anterior).
 * Al final, muestra la contrase�a y si es o no fuerte (usa el bucle anterior). Usa este simple formato:
 * contrase�a1 valor_booleano1
 */

public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese la cantidad de constrase�as que desea crear");
		int quantity = scanner.nextInt();
		Password[] passwords = new Password[quantity];  
		System.out.println("Ingrese el tama�o de la contrase�a");
		int lenght = scanner.nextInt();
		for(int i = 0; i < passwords.length; i++)
		{
			passwords[i] = new Password(lenght);
			System.out.println("Password " + (i + 1) + " : " + passwords[i].getPass());
			System.out.println("		 Is strong : " + passwords[i].isStrong() );
		}

	}

}