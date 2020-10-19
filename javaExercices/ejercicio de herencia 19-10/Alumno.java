package educationitclase3;

public class Alumno extends Persona {
	private String materia;
	private int nota;
	
	public Alumno () {
		super();
		this.materia = "";
		this.nota = 0;
	}
	public Alumno (String nombre, String apellido, int id, int edad, String materia, int nota) {
		super(nombre, apellido, id, edad);
		this.materia = materia;
		this.nota = nota;
	}
	
	public String getMateria() {
		return this.materia;
	}
	public void setMateria(String materia) {
		this.materia = materia;
	}
	public int getNota() {
		return this.nota;
	}
	public void setNota(int nota) {
		this.nota = nota;
	}
	
	public String toString() {
		return super.toString();
	}
}
