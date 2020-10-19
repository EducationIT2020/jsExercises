package educationitclase3;

public class Profesor extends Persona {
	private String materia;
	
	public Profesor() {
		super();
		this.materia = "";
	}
	public Profesor(String nombre, String apellido, int id, int edad, String materia) {
		super(nombre, apellido, id, edad);
		this.materia = materia;
	}
	
	public String getMateria() {
		return this.materia;
	}
	public void setMateria(String materia) {
		this.materia = materia;
	}
	
	public String toString() {
		return super.toString();
	}
}
