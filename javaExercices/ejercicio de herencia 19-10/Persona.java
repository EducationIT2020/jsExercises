package educationitclase3;

public class Persona {
	private String nombre;
	private String apellido;
	private int id;
	private int edad;
	
	public Persona () {
		this.nombre = "";
		this.apellido = "";
		this.id = 0;
		this.edad = 0;
	}
	public Persona(String nombre, String apellido, int id, int edad) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.id = id;
		this.edad = edad;
	}
	
	public String getNombre() {
		return this.nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return this.apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public int getId() {
		return this.id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getEdad() {
		return this.edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	
	public String toString() {
		return nombre +" "+ apellido+" ";
	}
}
