package educationitclase3;

public class Aula {
	private Profesor profesor;
	private Alumno [] alumnos;
	
	public Aula() {
		this.profesor = new Profesor();
		this.alumnos = new Alumno[5];
	}
	public Aula(Profesor profesor, Alumno [] alumnos) {
		this.profesor = profesor;
		this.alumnos = alumnos;
	}
	
	public Profesor getProfesor () {
		return this.profesor;
	}
	public void setProfesor(Profesor profesor) {
		this.profesor = profesor;
	}
	public Alumno[] getAlumnos() {
		return this.alumnos;
	}
	public void setAlumnos(Alumno [] alumnos) {
		this.alumnos = alumnos;
	}
	
	public String toString() {
		return profesor + "cantidad de alumnos" + alumnos.length;
	}
}
