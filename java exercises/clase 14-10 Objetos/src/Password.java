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
public class Password {
	private int lenght;
	private String pass;
	
	public Password()
	{
		lenght = 8;
		pass = "";
	}
	
	public Password(int lenght)
	{
		this.lenght = lenght;
		pass = generatePassword(lenght);
	}
	
	public int getLenght()
	{
		return this.lenght;
	}
	
	public void setLenght(int lenght)
	{
		this.lenght = lenght;
	}
	
	public String getPass()
	{
		return this.pass;
	}
	
	public String generatePassword(int lenght)
	{
		String pass = "";
		for(int i = 0; i < lenght; i++)
		{
			int option = (int)Math.floor(Math.random() * 3 + 1);
			if(option == 1)
			{
				pass += generateLetter();
			}
			else 
			{
				pass += generateNumber();
			}
		}
		return pass;
	}
	
	private char generateLetter()
	{
		return (char)Math.floor(Math.random() * (90 - 65) + 65);
	}
	
	private char generateNumber()
	{
		return (char)Math.floor(Math.random() * (57 - 48) + 48);
	}
	
	public boolean isStrong()
	{
		int countLetter = 0;
		int countNumbers = 0;
		for(int i = 0; i < this.pass.length();i++)
		{
			if( this.pass.charAt(i) > 64 && this.pass.charAt(i) < 91)
			{
				countLetter++;
			}
			else
			{
				countNumbers++;
			}
			if( countLetter > 1 && countNumbers > 1)
			{
				return true;
			}
		}
		return false;
	}
}
